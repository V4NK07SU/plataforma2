<?php

namespace App\Modules\Health\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource HealthDimensionCategory
 *
 * Relaciones de la tabla health_dimensions_categories.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class HealthDimensionCategory extends Model
{
    use SoftDeletes;

    protected $table = 'health_dimensions_categories';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description',
    ];

    /**
     * healthDimensions
     *
     * Retorna la relacion de mucho a uno.
     *
     * @return  hasMany()
     */

    public function healthDimensions()
    {
        return $this->hasMany('App\Modules\Health\Models\Health\HealthDimension');
    }
}
