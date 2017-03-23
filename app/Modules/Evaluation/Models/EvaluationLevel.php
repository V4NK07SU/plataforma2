<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * @resource EvaluationLevel
 *
 * Relaciones de la tabla evaluation_functions.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationLevel extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_levels';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description',
    ];

    /**
     * evaluationCompetency
     *
     * Retorna la relacion para la tabla pivote: evaluation_competency_level
     *
     * @return  belongsToMany()
     */

    public function evaluationCompetency()
    {
        return $this->belongsToMany('App\Modules\Evaluation\Models\EvaluationCompetencies');
    }

}
