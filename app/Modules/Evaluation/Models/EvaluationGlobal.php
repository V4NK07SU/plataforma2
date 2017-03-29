<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource EvaluationGlobal
 *
 * Relaciones de la tabla evaluation_functions.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationGlobal extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_global';

    protected $primaryKey = 'id';

    protected $fillable = [
        'period_stars', 'period_ends', 'commitments_stars', 'commitments_ends', 'evaluation_stars', 'evaluation_ends', 'type_id',
    ];

    /**
     * evaluationSchedule
     *
     * Retorna la relacion para la tabla pivote: evaluation_competency_level
     *
     * @return  hasMany()
     */

    public function evaluationSchedules()
    {
        return $this->hasMany('App\Modules\Evaluation\Models\EvaluationSchedule');
    }
}
