<?php

namespace App\Modules\Agenda\Models;

use Agenda;
use Appoinment;
use CollaboretorGoal;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;

/**
 *@resource User
 *
 *modelo para usar los datos de la tabla User
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class User extends Model
{
    use softDeletes;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = "user";

    /**
     * columna primaria
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */
    protected $fillable = ['first_name', 'last_name', 'email', 'password'];

    /**
     * @method agenda()
     * @return una relacion uno a mucho con agenda
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

    public function appoinment()
    {
        return $this->belongsTo(Appoinment::class);
    }
}
