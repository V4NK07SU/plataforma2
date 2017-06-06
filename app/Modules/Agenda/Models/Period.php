<?php

namespace App\Modules\Agenda\Models;

use Agenda;
use CollaboretorGoal;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 *@resource Period
 *
 *modelo para usar los datos de la tabla Period
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class Period extends Model
{
    use SoftDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = "periods";

    /**
     * columna primaria
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */
    protected $fillable = ['description', 'start_at', 'ends_at'];

    /**
     * Cardinalidad
     * @metodo agenda
     */
    public function agenda()
    {
        return $this->hasMany(Agenda::class);
    }

    /**
     * @method collaboretor()
     * @return una relacion uno a mucho con collaboretor
     */
    public function collaboretor()
    {
        return $this->hasMany(CollaboretorGoal::class);
    }
}
