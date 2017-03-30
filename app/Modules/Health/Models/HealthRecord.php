<?php

namespace App\Modules\Health\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource HealthRecord
 *
 * Relaciones de la tabla health_record.
 *
 * @author Danny Rojas Reyes, @rojasknight
 */

class HealthRecord extends Model
{
    use SoftDeletes;

    protected $table = 'health_record';

    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id', 'professional_id', 'type_id',
    ];

    /**
     * healthRecordsDimencions
     *
     * Retorna la relacion de uno a muchos.
     *
     * @return  hasMany()
     */

    public function healthRecordsDimencions()
    {
        return $this->hasMany('App\Modules\Health\Models\HealthRecordDimension');
    }

    /**
     * healthUsers
     *
     * Retorna la relacion de muchos a uno.
     *
     * @return  belongsTo()
     */

    public function healthUsers()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    /**
     * healthProfessionalUsers
     *
     * Retorna la relacion de muchos a uno.
     *
     * @return  belongsTo()
     */

    public function healthProfessionalUsers()
    {
        return $this->belongsTo('App\User', 'professional_id');
    }

    /**
     * healthType
     *
     * Retorna la relacion de muchos a uno.
     *
     * @return  belongsTo()
     */

    public function healthType()
    {
        return $this->belongsTo('App\Modules\Health\Models\HealthType', 'type_id');
    }

    /**
     * healthHistories
     *
     * Retorna la relacion de uno a muchos.
     *
     * @return  hasMany()
     */

    public function healthHistories()
    {
        return $this->hasMany('App\Modules\Health\Models\HealthHistory');
    }
}
