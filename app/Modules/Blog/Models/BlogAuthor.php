<?php

namespace App\Modules\Blog\Models;

use Illuminate\Database\Eloquent\Model;
use App\Modules\Blog\Models\BlogPost;
use Illuminate\Database\Eloquent\SoftDeletes;

class BlogAuthor extends Model
{
    //

    use SoftDeletes;

    /**
     * Nombre de la tabla
     *
     */
    protected  $table = "blog_authors";

    /**
     * columna primaria
     * @var string
     */

    protected $primaryKey = 'id';

    /**
     *campo que se puede iniciar masivamente, insertar los datos
     * @var [type]
     */

    protected  $fillable =[ 'display_name','first_name','last_name','email' ];

    public function posts()
    {
        return $this->hasMany('BlogPost');
    }
}
