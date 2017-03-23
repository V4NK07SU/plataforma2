<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource EvaluationFunction
 *
 * Relaciones de la tabla evaluation_functions.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationFunction extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_functions';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description',
    ];

    /**
     * evaluationPosition
     *
     * Retorna la relacion para la tabla pivote: evaluation_position_function
     *
     * @return  belongsToMany()
     */

    public function evaluationPositions()
    {
        return $this->belongsToMany('App\Modules\Evaluation\Models\EvaluationPosition');
    }

}
