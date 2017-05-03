<?php

namespace App\Modules\Users\Models;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    //
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

    protected $table = 'permissions';

    /**
     * Atributos que se van a asignar masivamente
     *
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'description',
    ];

    /**
     * Atributos que seran escondidos por el array.
     *
     * @var array
     */
    protected $hidden = [];
}
