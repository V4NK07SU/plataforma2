<?php

namespace App\Modules\Agenda\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;
use App\User;
use Appoinment;
use Service;
use Schedule;
use Period;

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
      public function schedule()
      {
          return $this->belongsTo(Schedule::class);
      }

    


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
        public function service()
        {
        return $this->belongsTo(Service::class);
        }
//-------------------------------------------------------------------
    /**
     * @method period()
     * @return una relacion uno a mucho con period
     */
    public function period()
    {
        return $this->belongsTo(Period::class);
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
}
