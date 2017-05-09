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

    public function pollAnswers()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollAnswer');
    }

    /**
     * pollResponses
     *
     * Retorna la relacion de que una pregunta puede tener muchas respuestas
     * 
     * @return  hasMany()
     */

    public function pollResponses()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollResponse');
    }

    /**
     * pollSubquestions
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
     * riskVariable 
     *
     * relacion entre las variables de riesgo y las preguntas
     *
     * @return belongsTo().
     */
    public function riskVariable()
    {
         return $this->belongsTo('App\Modules\Agenda\Models\RiskVariable', 'risk_var_id');
    }
}
