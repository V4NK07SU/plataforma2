<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;


/**
 * @resource PollType
 *
 * Modelo relacionado con: Poll.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollType extends Model
{
    use SoftDeletes;

    protected $table = 'poll_types';

    protected $primaryKey = 'id';
    
    protected $fillable = [
    	'title','description',
    ];

    /**
     * poll
     *
     * Retorna la relacion de que un tipo de encuesta tiene muchas encuestas
     * 
     * @return  hasMany()
     */
    
    public function polls()
    {
        return $this->hasMany('App\Modules\Polls\Models\Poll');
    }
}
