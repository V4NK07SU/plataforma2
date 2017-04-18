<?php

namespace App\Modules\Blog\Models;

use Illuminate\Database\Eloquent\Model;

class BlogCategorie extends Model
{
    //

    public function posts()
    {
        return $this->belongsToMany('')
    }
}
