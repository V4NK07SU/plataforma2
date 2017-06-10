<?php

namespace App\Modules\Health\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource HealthAppointment
 *
 * 
 *
 * @author David felipe bustos, <david_bustos17@hotmail.com>
 *
 */

class HealthAppointment extends Model
{
    use SoftDeletes;

    protected $connection = 'mysql';

    protected $table = 'health_appointment';

    protected $primaryKey = 'id';

    protected $fillable = [
        'appointment_start', 'appointment_end', 'appointment_status', 'appointment_patient_session',
    ];

    /**
     * user
     *
     * Retorna la relacion de uno a muchos
     *
     * @return  hasMany()
     */

        public function patient()
        {
            return $this->belongsTo('App\User', 'appointment_patient_id', 'id');
        }

        public function doctor()
        {
            return $this->belongsTo('App\User', 'user_id', 'id');
        }
}
