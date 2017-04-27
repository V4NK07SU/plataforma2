<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource EvaluationCompetencies
 *
 * Relaciones de la tabla evaluation_functions.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationCompetencies extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_competencies';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description',
    ];

    /**
     * evaluationLevels
     *
     * Retorna la relacion para la tabla pivote: evaluation_competency_level
     *
     * @return  belongsToMany()
     */

    public function evaluationLevels()
    {
        return $this->belongsToMany('App\Modules\Evaluation\Models\EvaluationLevel');
    }

    /**
     * evaluationCompetenciesResponses
     *
     * Retorna la relacion de uno a muchos.
     *
     * @return  hasMany()
     */

    public function evaluationCompetenciesResponses()
    {
        return $this->hasMany('App\Modules\Evaluation\Models\EvaluationCompetencyeResponse');
    }

    /**
     * evaluationCompetenciesAnswers
     *
     * Retorna la relacion de uno a muchos.
     *
     * @return  hasMany()
     */

    public function evaluationCompetenciesAnswers()
    {
        return $this->hasMany('App\Modules\Evaluation\Models\EvaluationCompetencyAnswer');
    }

}
