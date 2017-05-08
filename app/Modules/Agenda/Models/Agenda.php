<?php

namespace App\Modules\Agenda\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;
use App\Modules\Agenda\Models\Schedule;
use App\User;
use Appoinment;
use Service as Srv;
use Schedule as Sche;
use Period as Prd;

/**
 *@resource Agenda
 *
 * modelo para usar los datos de la tabla agenda
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class Agenda extends Model
{
    use softDeletes;


    /**
     * Nombre de la tabla
     * 
     */
   protected  $table = "agendas";

    /**
     * columna primaria
     * @var string
     */

    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */

    protected  $fillable =[ 'user_id','service_id','period_id','schedule_id','observacion'];

    /**
     * Cardinalidad
     * @method schelude(): una relacion de uno a mucho con agenda
     */
  


 //---------------------------------------------------------

    /**
     * @method appoinment()
     * @return una relacion uno a mucho con appoinment
     */
      public function appoinment()
      {
          return $this->hasMany(Appoinment::class);
      }
//---------------------------------------------------------------
    /**
     * @method service()
     * @return una relacion uno a mucho con service
     */
//-------------------------------------------------------------------
    /**
     * @method period()
     * @return una relacion uno a mucho con period
     */
    public function period()
    {
        return $this->belongsTo(Prd::class);
    }
//-------------------------------------------------------------------------
    /**
     * @method user()
     * @return una relacion uno a mucho con user
     */
    public function user()
    {
        return $this->hasMany(User::class);
    }
    public function schedules(){

        return $this->belongsToMany(Schedule::class, 'agendas_schedules');
    }
    
}
