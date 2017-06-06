<?php

namespace App\Modules\Agenda\Models;

use App\Modules\Agenda\Models\Appoinment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Modules\Agenda\Models\Phenomena;

/**
 *@resource RiskVariable
 *
 *modelo para usar los datos de la tabla RiskVariable
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */
class RiskVariable extends Model
{
    use SoftDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = "risk_variables";

    /**
     * columna primaria
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */
    protected $fillable = ['title', 'description', 'phenomenon_id'];

    /**
     * @method appoinmet()
     * @return una relacion uno a mucho con appoinmet
     */
    public function appoinmet()
    {
        return $this->hasMany(Appoinment::class);
    }
    /**
     * @method phenomena()
     * @return una relacion uno a mucho con phenomena
     */
    public function phenomena()
    {
        return $this->belongsTo(Phenomena::class);
    }

        /**
     * poll_questions
     *
     * relacion entre las preguntas y las variables de riesgo
     *
     * @return  belongsTo()
     */

    public function pollQuestions()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollQuestion');
    }
}
