<?php

namespace App\Modules\Blog\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class BlogUser extends Model
{
    //

    use SoftDeletes;

    /**
     * Nombre de la tabla
     *
     */
    protected  $table = "blog_users";

    /**
     * columna primaria
     * @var string
     */

    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */

    protected  $fillable =[ 'name','email','website' ];

    public function posts()
    {
        return $this->hasMany('BlogPost');
    }
    
}
