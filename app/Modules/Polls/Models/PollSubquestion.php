<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource PollSubquestion
 *
 * Modelo relacionado con: PollQuestion, PollSubquestionResponses.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollSubquestion extends Model
{
    use SoftDeletes;

    protected $table = 'poll_subquestions';

    protected $primaryKey = 'id';
    
    protected $fillable = [
        'poll_question_id', 'poll_question_type_id', 'title', 'description',
    ];

    /**
     * pollQuestion
     *
     * Retorna la relacion de que una sub pregunta solo puede tener una pregunta
     * 
     * @return  belongsTo()
     */
    
    public function pollQuestion()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollQuestion','poll_question_id');
    }

    /**
     * Table -->  pollSubcuestionsResponses
     */
    public function pollSubcuestionsResponses()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollSubquestionResponses');
    }

     /**
     * pollQuestionsAnswer
     *
     * Retorna la relacion de uno a muchos.
     * 
     * @return  belongsTo()
     */

    public function pollQuestionsAnswer()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollSubquestionAnswer');
    }

     /**
     * pollQuestionType
     *
     * Retorna la relacion de que una subpregunta pyede tener un tipo de pregunta.
     * 
     * @return  belongsTo()
     */
    
    public function pollQuestionType()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollQuestionType','poll_question_type_id');
    }

}
