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
use App\Modules\Users\Http\Requests\UserLoginRequest;
use App\Modules\Users\Http\Requests\UserRegisterRequest;
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
     * Authenticate user by id|email and password
     *
     * @param UserRequest $request
     *
     * @return mixed
     */
    public function authenticate(UserLoginRequest $request)
    { 
        $user = false; 
        
        $ldapUser = $this->loginWithLdap($request->username, $request->password);        

        if($ldapUser) {
            
            $fistName = $ldapUser['sn'];
            $lastName = $ldapUser['givenname'];
            $email = $ldapUser['mail'];
            $uid = $ldapUser['uid'];
            $this->registerWithAuth($firstName, $lastName, $email, $uid, $uid);            
        } 

        $this->loginWhitAuth($request->username, $request->password);
    }

    /**
     * Login a user by LDAP Server
     *
     * @param string $id
     * @param string $password
     * 
     * @return boolean
     */
    private function loginWithLdap(string $uid, string $password)
    {
        $user = false;
        $user = LdapHelper::login($uid, $password);        
        LdapHelper::disconnect();
        if($user) {

            return $user;
        }   

        return false;             
    }

    /**
     * Login a user by Laravel Auth
     *
     * @param string $email
     * @param string $password
     * 
     * @return boolean
     */
    private function loginWhitAuth(string $email, string $password)
    {
        
        $credentials = ['email' => $email, 'password' => $password];        
            
        $token = JWTAuth::attempt($credentials);
            
        if ( ! $token )
        {            
            return response()->error('Error autenticando el usuario en el sistema!', 500);
        }

        $user = Auth::user();

        return response()->success(compact('user', 'token'));
    }
    
    /**
     * Register a user by Laravel Auth
     *
     * @param string $firstName
     * @param string $lastName
     * @param string $email
     * @param string $password
     * @param string $uid
     * @return void
     */
    private function registerWithAuth(string $firstName, string $lastName, string $email, string $password, string $uid)
    {
        $userExistsInDB = User::where('email', '=', $email)->first();

        if($userExistsInDB) {
            $loggedinUser = Auth::loginUsingId($userExists->id);

            $token = JWTAuth::fromUser($userExists);
            
            if ( ! $loggedinUser || ! $token )
            {
                return response()->error('Error autenticando el usuario al sistema!', 500);
            }

            return response()->success(compact('token'));
        }

        $this->register($firstName, $lastName, $email, $uid, $uid);
    }

    /**
     * Register new user
     *
     * @param UserRequest $request
     *
     * @return mixed
     */
    public function register($firstName, $lastName, $email, $uid, $password)
    {
        
        $user = new User();
        $user->first_name = trim($firstName);
        $user->last_name = trim($lastName);
        $user->email = trim(strtolower($email));
        $user->password = bcrypt($password);
        $user->uid = trim($uid);
        $user->avatar = 'http://plus.corhuila.edu.co:8080/sinugwt/images/dynamic/foto/1/'.$uid.'/'.$uid.'.jpg';
        $user->save();

        if(!$user) {
            return response()->error('Error registrando el usuario al sistema!', 500);
        }

        $role = Role::where('slug', '=', 'usuario')->first();
        $user->assignRole($role->id);

        $user = User::where('email', '=', $email)->first();
        
        $token = JWTAuth::attempt(['email' => $user->email, 'password' => $password]);

        if(!$token) {
            return response()->error('Error autenticando el usuario al sistema!', 500);
        }

        return response()->success(compact('user', 'token'));
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
