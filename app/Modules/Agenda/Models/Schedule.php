<?php

namespace App\Modules\Agenda\Models;

use App\Modules\Agenda\Models\Appoinment;
use App\Modules\Agenda\Models\Dia;
use App\Modules\Agenda\Models\Hora;
use App\Modules\Agenda\Models\Service;
use App\Modules\Agenda\Models\Agenda;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 *@resource Schedule
 *
 *modelo para usar los datos de la tabla Schedule
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class Schedule extends Model
{
    use SoftDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = 'schedule';

    /**
     * columna primaria
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */
    protected $fillable = ['ends_at', 'start_at','service_id','observation'];

    /**
     * @method hora()
     * @return una relacion uno a mucho con hora
     */
    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function Agendas(){

        return $this->belongsToMany(Agenda::class,'agendas_schedules');
    }

    public function appoinments(){

        return $this->hasMany(Appoinment::class);
    }
}
