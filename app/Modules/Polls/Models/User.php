<?php

namespace App\Modules\Polls\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use pierresilva\Sentinel\Traits\SentinelTrait;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * @resource User
 *
 * Modelo relacionado con: Poll, PollQuestionAnswer, PollResponse, PollCampaing, PollSubquestionResponses.
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use SentinelTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [
            'roles'       => $this->getRoles(),
            'permissions' => $this->getPermissions(),
        ];
    }

    /**
     *
     * polls
     *
     * Retorna la relacion de que un usuario puede tiner muchas encuestas.
     * @return  hasMany()
     */

    public function polls()
    {
        return $this->hasMany('App\Modules\Polls\Models\Poll');
    }

    /**
     *
     * polls
     *
     * Retorna la relacion de que un usuario tiene muchas respuestas.
     * @return  hasMany()
     */

    public function poll_question_answers()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollQuestionAnswer');
    }

    /**
     *
     * poll_response
     *
     * Retorna la relacion de que un usuario puede tener muchas respuesta
     * @return  hasMany()
     */

    public function poll_response()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollResponse');
    }

    /**
     *
     * polls_campaing
     *
     * Retorna la relacion de que un usuario puede tener muchas campañas de encuestas
     * @return  hasMany()
     */

    public function polls_campaing()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollCampaing');
    }

    /**
     *
     * poll_subcuestions_responses
     *
     * Retorna la relacion de que un usuario puede tener muchas respuestas de las subpreguntas de una encuesta
     * @return  hasMany()
     */

    public function poll_subcuestions_responses()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollSubquestionResponses');
    }

}
