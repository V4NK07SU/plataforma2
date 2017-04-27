<?php

namespace App\Modules\Health\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource HealthType
 *
 * Relaciones de la tabla health_types.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class HealthType extends Model
{
    use SoftDeletes;

    protected $table = 'health_types';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description',
    ];

    /**
     * healthDimension
     *
     * Retorna la relacion para la tabla pivote.
     *
     * @return  belongsToMany()
     */

    public function healthDimension()
    {
        return $this->belongsToMany('App\Modules\Health\Models\Health\HealthDimension');
    }

    /**
     * healthRecords
     *
     * Retorna la relacion para la tabla pivote.
     *
     * @return  hasMany()
     */

    public function healthRecords()
    {
        return $this->hasMany('App\Modules\Health\Models\Health\HealthRecord');
    }
}
