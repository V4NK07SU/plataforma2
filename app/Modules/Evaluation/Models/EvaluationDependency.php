<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource EvaluationDependency
 *
 * Relaciones de la tabla evaluation_functions.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationDependency extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_dependencies';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description',
    ];

    /**
     * evaluationPositions
     *
     * Retorna la relacion para la tabla pivote: evaluation_dependency_position
     *
     * @return  belongsToMany()
     */

    public function evaluationPositions()
    {
        return $this->belongsToMany('App\Modules\Evaluation\Models\EvaluationPosition');
    }
}
