<?php

namespace App\Modules\Users\Models;

use Illuminate\Database\Eloquent\Model;
use App\Modules\Users\Models\Permission;
use App\Modules\Users\Models\User;

class Role extends Model
{
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

    protected $table = 'roles';

    /**
     * Atributos que se van a asignar masivamente
     *
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'description', 'special',
    ];

    /**
     * Atributos que no seran retornados.
     *
     * @var array
     */
    protected $hidden = [];

    public function permissions()
    {
        return $this->belongsToMany('App\Modules\Users\Models\Permission');
    }

    public function users()
    {
        return $this->belongsToMany('App\Users');
    }
}
