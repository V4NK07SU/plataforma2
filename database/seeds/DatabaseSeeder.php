<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Modules\Users\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        //User::truncate();

        $users = [
            ['first_name' => 'Pierre', 'last_name' => 'Silva', 'email' => 'pierremichelsilva@gmail.com', 'password' => Hash::make('colombia1')],
            ['first_name' => 'Ryan', 'last_name' => 'Chenkie', 'email' => 'ryanchenkie@gmail.com', 'password' => Hash::make('secret')],
            ['first_name' => 'Chris', 'last_name' => 'Sevilleja', 'email' => 'chris@scotch.io', 'password' => Hash::make('secret')],
            ['first_name' => 'Holly', 'last_name' => 'Lloyd', 'email' => 'holly@scotch.io', 'password' => Hash::make('secret')],
            ['first_name' => 'Adnan', 'last_name' => 'Kukic', 'email' => 'adnan@scotch.io', 'password' => Hash::make('secret')],
            ['first_name' => 'Admin', 'last_name' => 'Istrator', 'email' => 'admin@umbrella-base.dev', 'password' => Hash::make('colombia1')],
        ];

        $roles =[
            ['name' => 'Usuario', 'slug' => 'usuario', 'description' => 'Usuario simple autenticado'],
            ['name' => 'Admin', 'slug' => 'admin', 'description' => 'Usuario Administrador'],
            ['name' => 'Desarrollador', 'slug' => 'desarrollador', 'description' => 'Usuario desarrollador', 'special' => 'all-access'],
            ['name' => 'Prohibido', 'slug' => 'prohibido', 'description' => 'Usuario prohibido en el sistema', 'special' => 'no-access'],
        ];

        $roles_ids = [];
        $user_role_id = null;
        $user_admin_id = null;
        $desarrollador_role_id = null;

        foreach ($roles as $role) {
            $new_role = Role::create($role);
            $roles_ids[] = $new_role->id;
            if ($role['name'] == 'Usuario') {
                $user_role_id = $new_role->id;
            }
            if ($role['name'] == 'Admin') {
                $admin_role_id = $new_role->id;
            }
            if ($role['name'] == 'Desarrollador') {
                $desarrollador_role_id = $new_role->id;
            }
        }

        // Loop through each user above and create the record for them in the database
        foreach ($users as $user) {
            $new_user = User::create($user);

            if ($user['email'] == 'admin@umbrella-base.dev') {
                $new_user->syncRoles([$user_role_id, $admin_role_id, $desarrollador_role_id]);
            } else {
                $new_user->syncRoles([$user_role_id]);
            }
        }

    }
}
