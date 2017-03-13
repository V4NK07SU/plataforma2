<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource PollResponse
 *
 * Modelo relacionado con: User, Poll, PollQuestion.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollResponse extends Model
{
    use SoftDeletes;

    protected $table = 'poll_responses';

    protected $primaryKey = 'id';
 
    protected $fillable   = [
        'user_id', 'poll_id', 'poll_question_id', 'response', 'responded_date',
    ];

    /**
     * user
     *
     * Retorna la relacion de que una respuesta solo puede tener un usuario
     * 
     * @return  belongsTo()
     */

    public function user()
    {
        return $this->belongsTo('App\Modules\Polls\Models\User');
    }

    /**
     * poll
     *
     * Retorna la relacion de que una respuesta pertenece solo a una encuesta
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
     * Retorna la relacion de que una respuesta pertenece solo a una pregunta
     * 
     * @return  belongsTo()
     */

    public function poll_question()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollQuestion');
    }

}
