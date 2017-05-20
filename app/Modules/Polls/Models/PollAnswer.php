<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource PollAnswer
 *
 * Modelo relacionado con: PollQuestionAnswer.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollAnswer extends Model
{
    use SoftDeletes;

    protected $table = 'poll_answers';

    protected $primaryKey = 'id';
    
    protected $fillable = [
        'poll_question_id', 'title', 'description', 'value',
    ];

    /**
     * pollQuestion
     *
     * Retorna la relacion de que las respuestas de una encuesta solo pueden tener una pregunta.
     *
     * @return  belongsTo()
     */

    public function pollQuestion()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollQuestion');
    }


    
    /**
     * pollResponses
     *
     * Retorna la relacion de que las respuestas de una encuesta solo pueden tener muchas preguntas.
     *
     * @return  hasMany()
     */

    public function pollResponses()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollResponse');
    }    
}
