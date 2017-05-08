<?php

namespace App\Modules\Agenda\Models;
use App\Modules\Agenda\Models\Agenda;
use App\Modules\Agenda\Models\Schelude;
use Illuminate\Database\Eloquent\Model;

class AgendaScheludes extends Model
{
    //

      use softDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = 'agendas_scheludes';

    /**
     * columna primaria
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */
    protected $fillable = ['agenda_id', 'schelude_id'];

    /**
     * @method agenda()
     * @return una relacion uno a mucho con agenda
     */
    public function agenda()
    {
        return $this->hasMany(Agenda::class);
    }

    /**
     * @method hora()
     * @return una relacion uno a mucho con hora
     */
    public function schelude()
    {
        return $this->hasMany(Schelude::class);
    }
}
