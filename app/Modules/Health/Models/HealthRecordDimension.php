<?php

namespace App\Modules\Health\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource HealthRecordDimension
 *
 * Relaciones de la tabla health_record_dimension.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class HealthRecordDimension extends Model
{
    use SoftDeletes;

    protected $table = 'health_record_dimension';

    protected $primaryKey = 'id';

    protected $fillable = [
        'record_id', 'dimension_id', 'observations', 'value',
    ];

    /**
     * healthRecords
     *
     * Retorna la relacion de muchos a uno.
     *
     * @return  belongsTo()
     */

    public function healthRecords()
    {
        return $this->belongsTo('App\Modules\Health\Models\Health\HealthRecord');
    }

    /**
     * healthDimensions
     *
     * Retorna la relacion de muchos a uno.
     *
     * @return  belongsTo()
     */

    public function healthDimensions()
    {
        return $this->belongsTo('App\Modules\Health\Models\Health\HealthDimension');
    }
}
