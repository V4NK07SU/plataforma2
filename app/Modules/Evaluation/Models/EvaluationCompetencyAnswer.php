<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EvaluationCompetencyAnswer extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_competency_answers';

    protected $primaryKey = 'id';

    protected $fillable = [
        'description', 'competency_id', 'value',
    ];

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

}
