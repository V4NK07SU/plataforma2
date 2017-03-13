<?php

namespace App\Modules\Agenda\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;
use Schedule;

/**
 *@resource Hora
 *
 *modelo para usar los datos de la tabla Hora
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class Hora extends Model
{
    use softDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = "horas";

    /**
     * columna primaria
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */
    protected $fillable = [
        'ends_at', 'start_at',
    ];

    /**
     * @method schelude()
     * @return una relacion uno a mucho con schelude
     */
    public function schedule()
    {
        return $this->hasMany(Schedule::class);
    }
}
