<?php

namespace App\Modules\Orgchart\Providers;

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
        $this->loadTranslationsFrom(__DIR__.'/../Resources/Lang', 'orgchart');
        $this->loadViewsFrom(__DIR__.'/../Resources/Views', 'orgchart');
        $this->loadMigrationsFrom(__DIR__.'/../Database/Migrations', 'orgchart');
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
