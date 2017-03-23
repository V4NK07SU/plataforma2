<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource EvaluationRoll
 *
 * Relaciones de la tabla evaluation_functions.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationRoll extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_roles';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description',
    ];

    /**
     * evaluationRoles
     *
     * Retorna la relacion de uno a mucho.
     *
     * @return  hasMany()
     */

    public function evaluationRoles()
    {
        return $this->hasMany('App\Modules\Evaluation\Models\EvaluationCompetencyeResponse');
    }

}
