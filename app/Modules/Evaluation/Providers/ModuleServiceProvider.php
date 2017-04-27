<?php

namespace App\Modules\Evaluation\Providers;

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
        $this->loadTranslationsFrom(__DIR__.'/../Resources/Lang', 'evaluation');
        $this->loadViewsFrom(__DIR__.'/../Resources/Views', 'evaluation');
        $this->loadMigrationsFrom(__DIR__.'/../Database/Migrations', 'evaluation');
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
