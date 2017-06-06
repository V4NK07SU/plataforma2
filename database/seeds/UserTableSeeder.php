<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \App\User::truncate();
        factory(\App\User::class)->create([
            'first_name' => 'Admin',
            'last_name' => 'Istrator',
            'email' => 'admin@umbrella-base.dev',
            'password' => 'adm123'
        ]);
    }
}
