<?php

namespace App\Modules\Health\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource HealthDimension
 *
 * Relaciones de la tabla health_dimensions.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class HealthDimension extends Model
{
    use SoftDeletes;

    protected $table = 'health_dimensions';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description', 'category_id',
    ];

    /**
     * healthRecordDimension
     *
     * Retorna la relacion de uno a muchos.
     *
     * @return  hasMany()
     */

    public function healthRecordDimension()
    {
        return $this->hasMany('App\Modules\Health\Models\HealthRecordDimension');
    }

    /**
     * healthDimensionCategory
     *
     * Retorna la relacion de  muchos a uno.
     *
     * @return  belongsTo()
     */

    public function healthDimensionCategory()
    {
        return $this->belongsTo('App\Modules\Health\Models\HealthDimensionCategory');
    }

    /**
     * healthTypes
     *
     * Retorna la relacion para la tabla pivote.
     *
     * @return  belongsToMany()
     */

    public function healthTypes()
    {
        return $this->belongsToMany('App\Modules\Health\Models\HealthType','health_type_dimension');
    }
}
