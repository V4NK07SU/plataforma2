<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource EvaluationPosition
 *
 * Relaciones de la tabla evaluation_functions.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationPosition extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_positions';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description', 'dependency_id', 'level_id',
    ];

    /**
     * evaluationFunctions
     *
     * Retorna la relacion para la tabla pivote: evaluation_position_function
     *
     * @return  belongsToMany()
     */

    public function evaluationFunctions()
    {
        return $this->belongsToMany('App\Modules\Evaluation\Models\EvaluationFunction');
    }

    /**
     * evaluationDependencies
     *
     * Retorna la relacion para la tabla pivote: evaluation_dependency_position
     *
     * @return  belongsToMany()
     */

    public function evaluationDependencies()
    {
        return $this->belongsToMany('App\Modules\Evaluation\Models\EvaluationDependency');
    }

    /**
     * evaluationPositions
     *
     * Retorna la relacion para la misma tabla de uno a muchos.
     *
     * @return  hashMany()
     */

    public function evaluationPositions()
    {
        return $this->hashMany('App\Modules\Evaluation\Models\EvaluationPosition');
    }


    /**
     * evaluationUsersPositions
     *
     * 
     *
     * @return  hashMany()
     */

    public function evaluationUsersPositions()
    {
        return $this->hashMany('App\Modules\Evaluation\Models\EvaluationUserPosition');
    }
    




    /**
     * evaluationUser
     *
     * Retorna la relacion para la misma tabla de uno a muchos.
     *
     * @return  belongsToMany()
     */

    public function evaluationUser()
    {
        return $this->belongsToMany('App\User');
    }
}
