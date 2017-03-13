<?php

namespace App\Modules\Agenda\Models;

use Agenda;
use Dia;
use Hora;
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
     * @method agenda()
     * @return una relacion uno a mucho con agenda
     */
    public function agenda()
    {
        return $this->hasMany(Agenda::class);
    }

    /**
     * @method hora()
     * @return una relacion uno a mucho con hora
     */
    public function hora()
    {
        return $this->belongsTo(Hora::class);
    }
    /**
     * @method dia()
     * @return una relacion uno a mucho con dia
     */
    public function dia()
    {
        return $this->belongsTo(Dia::class);
    }
}
