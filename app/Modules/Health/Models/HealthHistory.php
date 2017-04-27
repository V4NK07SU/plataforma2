<?php

namespace App\Modules\Health\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource HealthHistory
 *
 * Relaciones de la tabla health_history.
 *
 * @author Danny Rojas Reyes, @rojasknight
 */

class HealthHistory extends Model
{
    use SoftDeletes;

    protected $table = 'health_history';

    protected $primaryKey = 'id';

    protected $fillable = [
        'record_id', 'date', 'observations', 'tracing', 'reason', 'professional_id',
    ];

    /**
     * HealthRecord
     *
     * Retorna la relacion de muchos a uno.
     *
     * @return  belongsTo()
     */

    public function HealthRecord()
    {
        return $this->belongsTo('App\Modules\Health\Models\HealthRecord');
    }

    /**
     * HealthUser
     *
     * Retorna la relacion de muchos a uno.
     *
     * @return  belongsTo()
     */

    public function HealthUser()
    {
        return $this->belongsTo('App\User');
    }
}
