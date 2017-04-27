<?php

namespace App\Modules\Agenda\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;
use RiskVariable;

/**
 *@resource Phenomena
 *
 *modelo para usar los datos de la tabla Phenomena
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */
class Phenomena extends Model
{
    use softDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = "phenomena";

    /**
     * columna primaria
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */
    protected $fillable = ['title', 'description'];

    /**
     * @method riskvariable()
     * @return una relacion uno a mucho con riskvariable
     */

    public function riskvariable()
    {
        return $this->hasMany(RiskVariable::class);
    }
}
