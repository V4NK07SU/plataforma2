<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource EvaluationSchedule
 *
 * Relaciones de la tabla evaluation_functions.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationSchedule extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_schedule';

    protected $primaryKey = 'id';

    protected $fillable = [
        'evaluation_id', 'evaluated_id', 'evaluator_id', 'commitments_acomplished', 'commitments_at', 'evaluation_acomplished', 'evaluation_at',
    ];

    /**
     * evaluationGlobal
     *
     * Retorna la relacion para la tabla pivote: evaluation_competency_level
     *
     * @return  hasMany()
     */

    public function evaluationGlobal()
    {
        return $this->belongsTo('App\Modules\Evaluation\Models\EvaluationGlobal');
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
