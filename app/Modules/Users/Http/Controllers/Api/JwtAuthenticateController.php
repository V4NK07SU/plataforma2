<?php

namespace App\Modules\Users\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Auth;
use JWTAuth;
use App\User;
use Debugbar;
use pierresilva\Sentinel\Models\Permission;
use pierresilva\Sentinel\Models\Role;
use App\Modules\Users\Http\Requests\UserRequest;
use App\Helpers\StringHelper;
use App\Modules\Users\Models\Permission as UsersPermission;
use App\Modules\Users\Models\Role as UsersRole;
use App\Helpers\LdapHelper;
use App\Modules\Users\Http\Requests\RoleRequest;

class JwtAuthenticateController extends Controller
{

    public function __construct()
    {
        // Debugbar::disable();
    }
    //
    /**
     * Get list all users
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //return response()->json(['user' => Auth::user(), 'auth'=>Auth::user()->getJWTCustomClaims(), 'users'=> User::get(['name', 'email'])]);
        sleep(5);
        $users = User::paginate(10);

        return $users;
    }

    /**
     * Authenticate user by email and password
     *
     * @param UserRequest $request
     *
     * @return mixed
     */
    public function authenticate(Request $request)
    {
        $this->validate($request, [
            'email'    => 'required',
            'password' => 'required|min:5',
        ]);

        $credentials = $request->only('email', 'password');
        $user = false;
        $newUser = false;
        $loggedinUser = false;
        $token = null;
        $ldapConn = LdapHelper::connect();

        if(!$ldapConn) {
            return response()->json(['message' => ['No se pudo conectar al servidor LDAP!']], 500);
        }

        $user = LdapHelper::login($request->input('email'), $request->input('password'));
        LdapHelper::disconnect();

        if(!$user) {
            return response()->json(['message' => ['Identificación o clave incorrectos!']], 422);
        }

        $userExists = User::where('email', '=', $user['mail'])->first();

        if($userExists) {
            $loggedinUser = Auth::loginUsingId($userExists->id);

            $token = JWTAuth::fromUser($userExists);
            
            if ( ! $loggedinUser || ! $token )
            {
                return response()->error('Error autenticando el usuario al sistema!', 500);
            }
        } else {

            $newUser = new User();
            $newUser->first_name = trim($user['givenname']);
            $newUser->last_name = trim($user['sn']);
            $newUser->email = trim(strtolower($user['mail']));
            $newUser->password = bcrypt($user['uid']);
            $newUser->uid = $user['uid'];
            $newUser->avatar = 'http://plus.corhuila.edu.co:8080/sinugwt/images/dynamic/foto/1/'.$user['uid'].'/'.$user['uid'].'.jpg';
            $newUser->save();

            $role = Role::where('slug', '=', 'usuario')->first();
            $newUser->assignRole($role->id);

            $loggedinUser = Auth::loginUsingId($newUser->id);
            
            $token = JWTAuth::fromUser($newUser);
            
            if ( ! $loggedinUser || ! $token )
            {
                return response()->error('Error autenticando el nuevo usuario al sistema!', 500);
            }
        }

        return response()->success(compact('token'));
    }

    /**
     * Register new user
     *
     * @param UserRequest $request
     *
     * @return mixed
     */
    public function register(UserRequest $request)
    {
        
        $user = new User();
        $user->first_name = trim($request->first_name);
        $user->last_name = trim($request->last_name);
        $user->email = trim(strtolower($request->email));
        $user->password = bcrypt($request->password);
        $user->save();

        $role = Role::where('slug', '=', 'usuario')->first();
        $user->assignRole($role->id);

        $credentials = $request->only('email', 'password');
        $token = JWTAuth::attempt($credentials);

        //return response()->success(compact('user', 'token'));
        return response()->success(compact('token'));
    }

    public function logout()
    {
        /*
        if(Auth::logout()) {
            return response()->json(['message' => 'Logout Successfully!'], 200);
        }
        */
        return response()->json(['message' => 'Salio del sistema con exito!'], 200);
    }

    public function createRole(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|min:6|unique:roles,name',
            //'slug' => 'required|string|min:5|unique:roles,slug',
            'description' => 'string'
        ]);

        $role = Role::create([
            'name' => $request->name,
            'slug' => StringHelper::uniqueSlug($request->name, 'roles', '.', 'slug'),
            'description' => $request->description
        ]);

        if ($role) {
            return response()->success(['error' => false, 'message' => 'Rol creado con éxito!']);
        }

        return response()->error(['error' => true, 'message' => 'El rol no fue creado!']);
    }

    public function assignRole(Request $request) {

        $user = User::where('email', '=', $request->email)->first();

        $role = Role::where('slug', '=', $request->role)->first();

        $assigned = $user->assignRole($role->id);

        if ($assigned) {
            return response()->success(['error' => false, 'message' => 'Rol asignado con éxito!']);
        }

        return response()->error(['error' => true, 'mesasge' => 'El rol no se asigno!']);

    }

    public function createPermission (Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|min:6|unique:roles,name',
            //'slug' => 'required|string|min:5',
            'description' => 'string'
        ]);

        $permission = Permission::create([
            'name' => $request->name,
            'slug' => StringHelper::uniqueSlug($request->name, 'permissions', '.', 'slug'),
            'description' => $request->description,
        ]);

        if ($permission) {
            return response()->success(['error' => false, 'message' => 'Permiso creado con éxito!']);
        }

        return response()->error(['error' => true, 'message' => 'El permiso no fue creado!']);
    }


    public function assignPermission (Request $request)
    {
        $role = Role::where('slug', '=', $request->role)->first();

        $permission = Permission::where('slug', '=', $request->permission)->first();

        $role->assignPermission($permission->id);
        $role->save();

        return response()->success(['error' => false, 'message' => 'Permiso asignado con éxito!']);

    }

    public function getPermissions()
    {
        return UsersPermission::paginate(10);
    }

    public function getPermission($id)
    {
        $permission = UsersPermission::findOrFail($id);
        return $permission;
    }

    public function deletePermission($id)
    {
        if(UsersPermission::destroy($id)) {
            return response()->success(['message' => 'Se elimino el permiso con éxito!']);
        }

        return response()->error(['message' => 'No se elimino el permiso!']);
        
    }

    public function updatePermission(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|string|min:6|unique:permissions,name',
            //'slug' => 'required|string|min:5',
            'description' => 'string|min:5'
        ]);

        if(UsersPermission::findOrFail($id)->update($request->all())) {
            return response()->success(['message' => 'Se actualizo el permiso con éxito!']);
        }

        return response()->error(['message' => 'No se actualizó el permiso!']);
    }

    public function getRoles()
    {
        return UsersRole::paginate(10);
    }

    public function getRole($id)
    {
        $role = UsersRole::with('permissions')->findOrFail($id);
        $permissions = UsersPermission::all();

        return ['role' => $role, 'permissions' => $permissions];
    }

    public function createsRole(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|min:6|unique:roles,name',
            //'slug' => 'required|string|min:5|unique:roles,slug',
            'description' => 'string'
        ]);

        $role = Role::create([
            'name' => $request->name,
            'slug' => StringHelper::uniqueSlug($request->name, 'roles', '.', 'slug'),
            'description' => $request->description
        ]);

        foreach($request->permissions as $k => $v) {
            $permissions[] = $v['id'];
        }
        $role->permissions()->sync($permissions);
        return response()->success(['mesagge' => 'Rol creado con éxito!', 'permissions' => $permissions, 'role' => $role]);
    }

    public function updateRole(RoleRequest $request, $id)
    {        
        $role = UsersRole::findOrFail($id);
        $role->update($request->all());
        $permissions = [];
        foreach($request->input('permissions') as $k => $v) {
            $permissions[] = $v['id'];
        }
        $role->permissions()->sync($permissions);
        return response()->success(['mesagge' => 'Rol actualizado con éxito!', 'permissions' => $permissions, 'role' => $role]);
        
    }

    public function deleteRole($id)
    {
        if(UsersRole::destroy($id)) {
            return response()->success(['mesagge' => 'Rol eliminado con exito!']);
        }

        return response()->error(['mesagge' => 'No se pudo eliminar el rol!']);
    }
}
