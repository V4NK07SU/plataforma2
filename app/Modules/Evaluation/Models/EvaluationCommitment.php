<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource EvaluationCommitment
 *
 * Relaciones de la tabla evaluation_functions.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationCommitment extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_commitments';

    protected $primaryKey = 'id';

    protected $fillable = [
        'evaluation_id', 'function_id', 'description', 'evaluated_id', 'evaluator_id',
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
     * evaluationFunction
     *
     * Retorna la relacion de uno a mucho.
     *
     * @return  belongsTo()
     */

    public function evaluationFunction()
    {
        return $this->belongsTo('App\Modules\Evaluation\Models\EvaluationFunction');
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
