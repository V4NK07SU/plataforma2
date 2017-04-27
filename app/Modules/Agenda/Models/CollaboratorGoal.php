<?php

namespace App\Modules\Agenda\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;
use Period as Prd;
use Service as Srv;

/**
 * @resource CollaboratorGoal
 *
 * modelo para usar los datos de la tabla CollaboratorGoal
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */
class CollaboratorGoal extends Model
{
    use softDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = "collaborators_goals";

    /**
     * columna primaria
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */
    protected $fillable = ['user_id', 'service_id', 'period_id', 'fullfilment', 'efficacy'];

    /**
     * @method period()
     * @return una relacion uno a mucho con period
     */
    public function period()
    {
        return $this->belongsTo(Prd::class);
    }

    /**
     * @method service()
     * @return una relacion uno a mucho con service
     */
    public function service()
    {
        return $this->belongsTo(Srv::class);
    }

    /**
     * @method user()
     * @return una relacion uno a mucho con user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
