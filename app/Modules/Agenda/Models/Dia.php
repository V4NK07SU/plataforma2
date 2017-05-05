<?php

namespace App\Modules\Agenda\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;
use Schelude;

/**
 *@resource Dia
 *
 *modelo para usar los datos de la tabla Dia
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class Dia extends Model
{
    use softDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = "dias";

    /**
     * columna primaria
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */
    protected $fillable = ['title'];

    /**
     * @method schelude()
     * @return una relacion uno a mucho con schelude
     */
  
}
