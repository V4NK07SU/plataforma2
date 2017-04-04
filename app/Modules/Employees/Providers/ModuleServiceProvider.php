<?php

namespace App\Modules\Employees\Providers;

use pierresilva\Modules\Support\ServiceProvider;

class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the module services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadTranslationsFrom(__DIR__.'/../Resources/Lang', 'employees');
        $this->loadViewsFrom(__DIR__.'/../Resources/Views', 'employees');
        $this->loadMigrationsFrom(__DIR__.'/../Database/Migrations', 'employees');
    }

    /**
     * Register the module services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
    }
}
