<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource EvaluationCompetencyeResponse
 *
 * Relaciones de la tabla, evaluation_competencies_responses.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationCompetencyResponse extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_competencies_responses';

    protected $primaryKey = 'id';

    protected $fillable = [
        'evaluation_id', 'competency_id', 'answer_id', 'evaluated_id', 'evaluator_id', 'rol_id',
    ];

     /**
     * evaluationGlobal
     *
     * Retorna la relacion de muchos a uno.
     *
     * @return  belongsTo()
     */

    public function evaluationGlobal()
    {
        return $this->belongsTo('App\Modules\Evaluation\Models\EvaluationGlobal');
    }



    /**
     * evaluationPosition
     *
     * Retorna la relacion de muchos a uno con la tabla
     *
     * @return  belongsTo()
     */

    public function evaluationRoll()
    {
        return $this->belongsTo('App\Modules\Evaluation\Models\EvaluationRoll');
    }

    /**
     * evaluationPosition
     *
     * Retorna la relacion de muchos a uno con la tabla.
     *
     * @return  belongsTo()
     */

    public function evaluationCompetencyAnswer()
    {
        return $this->belongsTo('App\Modules\Evaluation\Models\EvaluationCompetencyAnswer');
    }

    /**
     * evaluationCompetency
     *
     * Retorna la relacion de muchos a uno.
     *
     * @return  belongsTo()
     */

    public function evaluationCompetency()
    {
        return $this->belongsTo('App\Modules\Evaluation\Models\EvaluationCompetencies');
    }








    /**
     * evaluationUserPositionEvaluated
     *
     * Retorna la relacion de uno a mucho.
     *
     * @return  belongsTo()
     */

    public function evaluationUserPositionEvaluated()
    {
        return $this->belongsTo('App\Modules\Evaluation\Models\EvaluationUserPosition');
    }

    /**
     * evaluationUserPositionEvaluator
     *
     * Retorna la relacion de muchos a uno.
     *
     * @return  belongsTo()
     */

    public function evaluationUserPositionEvaluator()
    {
        return $this->belongsTo('App\Modules\Evaluation\Models\EvaluationUserPosition');
    }

}
