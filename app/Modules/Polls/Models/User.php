<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource User
 *
 * Modelo relacionado con: Poll, PollQuestionAnswer, PollResponse, PollCampaing, PollSubquestionResponses.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class User extends Model
{

    //use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'first_name', 'last_name', 'email', 'password',
    ];

    protected $primaryKey = 'id';

    protected $table = 'users';

    protected $hidden = [
        'password',
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
