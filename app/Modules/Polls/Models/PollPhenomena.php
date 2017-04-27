<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;
use RiskVariable;

/**
 * @resource PollPhenomena
 *
 * modelo para usar los datos de la tabla Phenomena
 *
 * @author Danny rojas reyes, afarable-1997@hotmail.com
 */
class PollPhenomena extends Model
{
    use softDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = "poll_phenomena";

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
     * riskvariable
     *
     * una relacion uno a mucho con riskvariable
     *
     * @return  belongsTo()
     */

    public function riskvariable()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollRiskVariable');
    }
}
