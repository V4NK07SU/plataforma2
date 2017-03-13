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
        'question_id', 'title', 'description',
    ];

    /**
     * poll_question
     *
     * Retorna la relacion de que una sub pregunta solo puede tener una pregunta
     * 
     * @return  belongsTo()
     */
    
    public function poll_question()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollQuestion');
    }

    /**
     * Table -->  Poll_Subcuestion_Responses
     */
    public function poll_subcuestions_responses()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollSubquestionResponses');
    }

}
