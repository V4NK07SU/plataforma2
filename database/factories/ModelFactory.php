<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'firs_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(\App\Modules\Users\Models\Role::class, function () {
    static $name, $slug, $description;

    return [
        'name' => $name ?: $name = 'Some Role',
        'slug' => $slug ?: $slug = 'some-role',
        'description' => $description ?: $description = 'Some role description.',
        'special' => null
    ];
});

$factory->define(\App\Modules\Users\Models\Permission::class, function() {
    static $name, $slug, $description;

    return [
        'name' => $name ?: $name = 'Some Permission',
        'slug' => $slug ?: $slug = 'some-permission',
        'description' => $description ?: $description = 'Some permission description.'
    ];
});
