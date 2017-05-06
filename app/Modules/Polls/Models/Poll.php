<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource Poll
 *
 * Modelo relacionado con: User, PollType, Poll_Item, Poll_Question_Answer, Poll_Response, Poll_Subcuestion_Responses, Poll_Campaing.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class Poll extends Model
{
    use SoftDeletes;

    protected $table = 'polls';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description', 'poll_types_id', 'user_id',
    ];

    /**
     * user
     *
     *Retorna la relacion de que una encuesta tiene solo un usuario
     *
     * @return  belongsTo()
     */

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * poll_type
     *
     *Retorna la relacion de que muchas encuesta puede tener solo  un tipo de encuestas
     *
     * @return  belongsTo()
     */

    public function pollType()
    {
        return $this->belongsTo('App\Modules\Polls\Models\PollType', 'poll_types_id');
    }

    /**
     * poll_items
     *
     * Retorna que una encuesta puede tener muchos items
     * 
     * @return  hasMany()
     */

    public function pollItems()
    {
        return $this->hasMany('App\Modules\Polls\Models\Poll_Item');
    }

    /**
     * poll_question_answers
     *
     *  Retorna qeue una encuesta puede tener muchas respuestas de las preguntas encuestadas
     *  
     * @return  hasMany()
     */

    public function pollQuestionAnswers()
    {
        return $this->hasMany('App\Modules\Polls\Models\Poll_Question_Answer');
    }

    /**
     * poll_responses
     *
     * retorna que una encuesta puede tener muchas respuestas
     * 
     * @return  hasMany()
     */

    public function pollResponses()
    {
        return $this->hasMany('App\Modules\Polls\Models\Poll_Response');
    }

    /**
     * poll_subcuestions_responses
     *
     * Retorna que una encuesta puede tener varias respuestas de las sub encuestas
     * 
     * @return  hasMany()
     */

    public function pollSubcuestionsResponses()
    {
        return $this->hasMany('App\Modules\Polls\Models\Poll_Subcuestion_Responses');
    }

    /**
     * polls_campaing
     *
     * retorna que una encuesta puede tener muchas campañas para una encuesta
     * 
     * @return  belongsToMany()
     */

    public function pollsCampaing() 
    {
        return $this->belongsToMany('App\Modules\Polls\Models\PollCampaing');
    }

}
