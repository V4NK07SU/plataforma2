<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;
use Phenomena;

/**
 * @resource PollRiskVariable
 *
 * modelo para usar los datos de la tabla RiskVariable
 *
 * @author Danny Rojas Reyes , afarable-1997@hotmail.com
 */
class PollRiskVariable extends Model
{
    use softDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = "poll_risk_variables";

    /**
     * columna primaria
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */
    protected $fillable = ['title', 'description', 'phenomenon_id'];

    /**
     * phenomena
     *
     * una relacion uno a mucho con phenomena
     *
     * @return  belongsTo()
     */
    
    public function phenomena()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollPhenomena');
    }

    /**
     * poll_questions
     *
     * relacion entre las preguntas y las variables de riesgo
     *
     * @return  belongsTo()
     */

    public function poll_questions()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollQuestion');
    }
}
