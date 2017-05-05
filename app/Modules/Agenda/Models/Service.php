<?php

namespace App\Modules\Agenda\Models;

use App\Modules\Agenda\Models\Agenda;
use App\Modules\Agenda\Models\CollaboratorGoal;
use App\Modules\Agenda\Models\Schedule;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;

/**
 *@resource Service
 *
 *modelo para usar los datos de la tabla Service
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class Service extends Model
{
    use softDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = "services";

    /**
     * columna primaria
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */
    protected $fillable = ['title', 'description'];

    /**
     * @method agenda()
     * @return una relacion uno a mucho con agenda
     */
   
    /**
     * @method collaboretor()
     * @return una relacion uno a mucho con collaboretor
     */
    public function collaboretor()
    {
        return $this->hasMany(CollaboretorGoal::class);
    }

     public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }
}   

