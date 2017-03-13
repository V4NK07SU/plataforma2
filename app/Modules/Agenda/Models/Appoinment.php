<?php

namespace App\Modules\Agenda\Models;

use Agenda;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;
use User;

/**
 *@resource Appoinment
 *
 *modelo para usar los datos de la tabla Appoinment
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class Appoinment extends Model
{
    use softDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = "appoinments";

    /**
     * columna primaria
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */
    protected $fillable = ['user_id', 'agenda_id', 'reason', 'accepted_at', 'start_at', 'ends_at', 'accomplished_at',
        'observations', 'risk_variable_id', 'risk_value', 'canceled_by'];

    /**
     * @method agenda()
     * @return una relacion uno a mucho con agenda
     */
    public function agenda()
    {
        return $this->belongsTo(Agenda::class);
    }

    /**
     * @method riskvariable()
     * @return una relacion uno a mucho con riskvariable
     */
    public function riskvariable()
    {
        return $this->belongsTo(RiskVariable::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
