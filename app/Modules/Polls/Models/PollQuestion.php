<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource PollQuestion
 *
 * Modelo relacionado con: PollItem, PollQuestionType, PollQuestionAnswer, PollResponse, PollSubcuestion.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollQuestion extends Model
{
    use SoftDeletes;

    protected $table = 'poll_questions';
    
    protected $primaryKey = 'id';

    protected $fillable = [
        'poll_item_id', 'poll_question_type_id', 'title', 'description', 'risk_var_id',
    ];

    /**
     * poll_item
     *
     * Retorna la relacion de que muchas preguntas pertenecen a un solo item
     * 
     * @return  belongsTo()
     */

    public function pollItem()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollItem');
    }

    /**
     * poll_question_type
     *
     * Retorna la relacion de que muchas preguntas pertenecen a un solo tipo de pregunta.
     * 
     * @return  belongsTo()
     */

    public function pollQuestionType()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollQuestionType');
    }

    /**
     * poll_question_answers
     *
     * Retorna la relacion de que una pregunta puede tener muchas respuestas
     * 
     * @return  hasMany()
     */

    public function poll_question_answers()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollQuestionAnswer');
    }

    /**
     * poll_responses
     *
     * Retorna la relacion de que una pregunta puede tener muchas respuestas
     * 
     * @return  hasMany()
     */

    public function poll_responses()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollResponse');
    }

    /**
     * poll_subquestions
     *
     * Retorna la relacion de que una entrevista de preguntas tiene muchas sub preguntas.
     * 
     * @return  hasMany()
     */

    public function pollSubquestions()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollSubcuestion');
    }


    /**
     * [risk_variable description]
     * relacion entre las variables de riesgo y las preguntas
     * @return 
     */
    public function risk_variable()
    {
         return $this->belongsTo('App\Modules\Agenda\Models\RiskVariable');
    }
}
