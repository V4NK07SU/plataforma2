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
        return response()->json(['user' => Auth::user(), 'auth'=>Auth::user()->getJWTCustomClaims(), 'users'=> User::get(['name', 'email'])]);
    }

    /**
     * Authenticate user by email and password
     *
     * @param Request $request
     *
     * @return mixed
     */
    public function authenticate(Request $request)
    {
        $this->validate($request, [
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ]);

        $credentials = $request->only('email', 'password');

        try {
            // verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->error('Invalid credentials', 401);
            }
        } catch (\JWTException $e) {
            return response()->error('Could not create token', 500);
        }

        $user = Auth::user();

        return response()->success(compact('user', 'token'));
    }

    /**
     * Register new user
     *
     * @param Request $request
     *
     * @return mixed
     */
    public function register(Request $request)
    {
        $this->validate($request, [
            'first_name'       => 'min:3',
            'last_name'       => 'min:3',
            'email'      => 'required|email|unique:users',
            'password'   => 'required|min:8',
        ]);

        $user = new User;
        $user->first_name = trim($request->first_name);
        $user->last_name = trim($request->last_name);
        $user->email = trim(strtolower($request->email));
        $user->password = bcrypt($request->password);
        $user->save();

        $token = JWTAuth::fromUser($user);

        return response()->success(compact('user', 'token'));
    }

    public function logout()
    {
        if(Auth::logout()) {
            return response()->json(['message' => 'Logout Successfully!'], 200);
        }
        return response()->json(['message' => 'Logout Unsuccessfully!'], 500);
    }

    public function createRole(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|min:6|unique:roles,name',
            'slug' => 'required|string|min:5|unique:roles,slug',
            'description' => 'string'
        ]);

        $role = Role::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'description' => $request->description
        ]);

        if ($role) {
            return response()->success(['error' => false, 'message' => 'Role created successfully!']);
        }

        return response()->error('Role was not created!');
    }

    public function assignRole(Request $request) {

        $user = User::where('email', '=', $request->email)->first();

        $role = Role::where('slug', '=', $request->role)->first();

        $assigned = $user->assignRole($role->id);

        if ($assigned) {
            return response()->success(['error' => false, 'message' => 'Role assigned successfully!']);
        }

        return response()->error('Role was not assigned!');

    }

    public function createPermission (Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|min:6|unique:roles,name',
            'slug' => 'required|string|min:5|unique:roles,slug',
            'description' => 'string'
        ]);

        $permission = Permission::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'description' => $request->description,
        ]);

        if ($permission) {
            return response()->success(['error' => false, 'message' => 'Permission created successfully!']);
        }

        return response()->error('Permission was not created!');
    }


    public function assignPermission (Request $request)
    {
        $role = Role::where('slug', '=', $request->role)->first();

        $permission = Permission::where('slug', '=', $request->permission)->first();

        $role->assignPermission($permission->id);
        $role->save();

        return response()->success(['error' => false, 'message' => 'Role assigned successfully!']);

    }
}
