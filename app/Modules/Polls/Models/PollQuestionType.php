<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource PollQuestionType
 *
 * Modelo relacionado con: PollQuestion.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollQuestionType extends Model
{
    use SoftDeletes;

    protected $table = 'poll_question_types';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description',
    ];

    /**
     * poll_questions
     *
     * Retorna la relacion de que un tipo de preguntas pueden tener muchos preguntas
     * 
     * @return  hasMany()
     */

    public function pollQuestions()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollQuestion');
    }
}
