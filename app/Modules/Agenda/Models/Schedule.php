<?php

namespace App\Modules\Agenda\Models;

use App\Modules\Agenda\Models\Agenda;
use App\Modules\Agenda\Models\Dia;
use App\Modules\Agenda\Models\Hora;
use App\Modules\Agenda\Models\Service;
use App\Modules\Agenda\Models\AgendaSchedule;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;

/**
 *@resource Schedule
 *
 *modelo para usar los datos de la tabla Schedule
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class Schedule extends Model
{
    use softDeletes;

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
    protected $fillable = ['hora_id', 'dia_id'];

    /**
     * @method hora()
     * @return una relacion uno a mucho con hora
     */
    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function AgendaSchelude(){

        return $this->belongsTo(AgendaSchedule::class);
    }
}
