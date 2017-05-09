<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource PollQuestionAnswer
 *
 * Modelo relacionado con: PollAnswer, Poll, PollQuestion, User.
 *
 * @author Danny Rojas Reyes, @rojasknight
 * 
 */

class PollSubquestionAnswer extends Model
{
    use SoftDeletes;

    protected $table = 'poll_subquestions_answer';

    protected $fillable = [
        'id', 'poll_subquestion_id', 'title', 'description',
    ];

    /**
     * pollAnswer
     *
     * Retorna la relacion de que la respuesta de la subpreguntas de una encuesta  que
     * solo pueden tener una subpregunta.
     * 
     * @return  belongsTo()
     */

    public function pollAnswer()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollSubquestion');
    }

}
