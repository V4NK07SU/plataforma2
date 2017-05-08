<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource PollCampaing
 *
 * Modelo relacionado con: User, Poll.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollCampaing extends Model
{
    use SoftDeletes;

    protected $table = 'poll_campaigns';

    protected $primaryKey = 'id';

    protected $fillable = [
        'max_questions', 'start_at', 'finish_at', 'user_id',
    ];

    /**
     * user
     *
     * Retorna la relacion de que una campaña solo puede tener un usuario
     * 
     * @return  belongsTo()
     */

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * polls
     *
     * Retorna la relacion de que una campaña puede tener muchas encuestas.
     * 
     * @return  belongsToMany()
     */

    public function polls()
    {
        return $this->belongsToMany('App\Modules\Polls\Models\Poll', 'poll_campaing_poll');
    }

}
