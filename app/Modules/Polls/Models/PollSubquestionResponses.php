<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource PollSubquestionResponses
 *
 * Modelo relacionado con: PollSubquestion, Poll, User.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollSubquestionResponses extends Model
{
    use SoftDeletes;

    protected $table = 'poll_subquestions_responses';

    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id', 'poll_id', 'subquestion_id', 'response', 'responded_date',
    ];

    /**
     * poll_subquestion
     *
     * Retorna la relacion de que respuestas de los sondeos de preguntas tiene una Subcuenta de encuesta
     * 
     * @return  belongsTo()
     */

    public function poll_subquestion()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollSubquestion');
    }

    /**
     * poll
     *
     * Retorna la relacion de que respuestas de las sub preguntas de la encuesta solo tiene una encuesta
     * 
     * @return  belongsTo()
     */

    public function poll()
    {
        return $this->belongsTo('App\Modules\Polls\Models\Poll');
    }

    /**
     * user
     *
     * Retorna la relacion de que respuestas de los sondeos de preguntas solo puede tener  un usuario
     * 
     * @return  belongsTo()
     */

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
