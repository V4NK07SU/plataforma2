<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource PollItem
 *
 * Modelo relacionado con: Poll, PollQuestion
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollItem extends Model
{
    use SoftDeletes;

    protected $table = 'poll_items';
    
    protected $primaryKey = 'id';

    protected $fillable = [
        'poll_id', 'title', 'description',
    ];

    /**
     * poll
     *
     * Retorna la relacion de que muchos items pertenecen a una sola encuesta.
     * 
     * @return  belongsTo()
     */

    public function poll()
    {
        return $this->belongsTo('App\Modules\Polls\Models\Poll');
    }

    /**
     * poll
     *
     * Retorna la relacion de que un item puede tener muchas preguntas
     * 
     * @return  hasMany()
     */

    public function poll_questions()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollQuestion');
    }

}
