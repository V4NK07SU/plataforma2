<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource PollQuestionAnswer
 *
 * Modelo relacionado con: PollAnswer, Poll, PollQuestion, User.
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollQuestionAnswer extends Model
{
    use SoftDeletes;

    protected $table = 'poll_questions_answer';

    protected $fillable = [
        'poll_question_id', 'poll_answer_id', 'user_id',
        'poll_id', 'answered_date',
    ];

    /**
     * poll_answer
     *
     * Retorna la relacion de que las respuestas de una encuesta solo pueden tener una respuesta
     * 
     * @return  belongsTo()
     */

    public function poll_answer()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollAnswer');
    }

    /**
     * poll
     *
     * Retorna la relacion de que las respuestas de una encuesta solo pueden tener una  encuesta.
     * 
     * @return  belongsTo()
     */

    public function poll()
    {
        return $this->belongsTo('App\Modules\Polls\Models\Poll');
    }

    /**
     * poll_question
     *
     * Retorna la relacion de que las respuestas de una encuesta solo pueden tener una pregunta.
     * 
     * @return  belongsTo()
     */

    public function poll_question()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollQuestion');
    }

    /**
     * user
     *
     * Retorna la relacion de que las respuestas de una encuesta solo pueden pertenecer a un usuario
     * 
     * @return  belongsTo()
     */

    public function user()
    {
        return $this->belongsTo('App\Modules\Polls\Models\User');
    }

}
