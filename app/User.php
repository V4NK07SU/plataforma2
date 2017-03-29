<?php

namespace App;

use Illuminate\Database\Eloquent\softDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use pierresilva\Sentinel\Traits\SentinelTrait;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * @Userl
 *
 * Relaciones con el modelo User.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use SentinelTrait;
    use softDeletes;

    /**
     * Atributo para asignar un nombre a la PK
     *
     * @var String
     */

    protected $primaryKey = 'id';

    /**
     * Atributo para asignar un nombre de la tabla
     *
     * @var String
     */

    protected $table = 'users';

    /**
     * Atributos que se van a asignar masivamente
     *
     * @var array
     */

    protected $fillable = [
        'first_name', 'last_name', 'email', 'password',
    ];

    /**
     * Atributos que seran escondidos por el array.
     *
     * @var array
     */

    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT
     *
     * @return mixed
     */

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT
     *
     * @return array
     */

    public function getJWTCustomClaims()
    {
        return [
            'roles'       => $this->getRoles(),
            'permissions' => $this->getPermissions(),
        ];
    }

    /**
     *
     * RELACIONES PARA AGENDA
     *
     */

    /**
     * agenda
     *
     * @return una relacion uno a mucho con agenda
     */

    public function agenda()
    {
        return $this->hasMany(Agenda::class);
    }

    /**
     * collaboretor
     *
     * @return una relacion uno a mucho con collaboretor
     */

    public function collaboretor()
    {
        return $this->hasMany(CollaboratorGoal::class);
    }

    /**
     * appoinment
     *
     * @return una relacion uno a mucho con las citas
     */

    public function appoinment()
    {
        return $this->belongsTo(Appoinment::class);
    }

    /**
     *
     * RELACIONES PARA LAS ENCUESTAS
     *
     */

    /**
     * polls
     *
     * Retorna la relacion de que un usuario puede tiner muchas encuestas.
     *
     * @return  hasMany()
     */

    public function polls()
    {
        return $this->hasMany('App\Modules\Polls\Models\Poll');
    }

    /**
     * poll_question_answers
     *
     * Retorna la relacion de que un usuario tiene muchas respuestas.
     *
     * @return  hasMany()
     */

    public function poll_question_answers()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollQuestionAnswer');
    }

    /**
     * poll_response
     *
     * Retorna la relacion de que un usuario puede tener muchas respuesta
     *
     * @return  hasMany()
     */

    public function poll_response()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollResponse');
    }

    /**
     * polls_campaing
     *
     * Retorna la relacion de que un usuario puede tener muchas campañas de encuestas
     *
     * @return  hasMany()
     */

    public function polls_campaing()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollCampaing');
    }

    /**
     * poll_subcuestions_responses
     *
     * Retorna la relacion de que un usuario puede tener muchas respuestas de las subpreguntas de una encuesta
     *
     * @return  hasMany()
     */

    public function poll_subcuestions_responses()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollSubquestionResponses');
    }

    /**
     * evaluationPositions
     *
     * Retorna la relacion para la misma tabla de uno a muchos.
     *
     * @return  belongsToMany()
     */

    public function evaluationPositions()
    {
        return $this->belongsToMany('App\Modules\Polls\Models\EvaluationPosition');
    }







}
