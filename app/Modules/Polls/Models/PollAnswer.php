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
        'title', 'description', 'value',
    ];

    /**
     * poll_question_answers
     *
     *Retorna la relacion de que las respuestas de una encuesta solo pueden tener un usuario
     *
     * @return  hasMany()
     */

    public function poll_question_answers()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollQuestionAnswer');
    }
}
