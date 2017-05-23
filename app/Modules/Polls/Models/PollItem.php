<?php

namespace App\Modules\Polls\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource PollItem
 *
 * Modelo relacionado con: Poll, PollQuestion
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollItem extends Model
{
    use SoftDeletes;

    protected $table = 'poll_items';
    
    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description',
    ];

    /**
     * poll
     *
     * Retorna la relacion de que muchos items pertenecen a una sola encuesta.
     * 
     * @return  belongsTo()
     */

    public function polls()
    {
        return $this->belongsToMany('App\Modules\Polls\Models\Poll', 'poll_poll_item');
    }

    /**
     * poll
     *
     * Retorna la relacion de que un item puede tener muchas preguntas
     * 
     * @return  hasMany()
     */

    public function pollQuestions()
    {
        return $this->hasMany('App\Modules\Polls\Models\PollQuestion');
    }

}
