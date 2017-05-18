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
        return $this->belongsTo('App\User', 'user_id');
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
     * poll
     *
     * Retorna la relacion de que muchos items pertenecen a una sola encuesta.
     * 
     * @return  belongsTo()
     */

    public function pollItems()
    {
        return $this->belongsToMany('App\Modules\Polls\Models\PollItem', 'poll_poll_item');
    }


    /**
     * pollResponses
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
     * pollSubcuestionsResponses
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

    public function campaigns() 
    {
        return $this->belongsToMany('App\Modules\Polls\Models\PollCampaing', 'poll_campaing_poll');
    }

}
