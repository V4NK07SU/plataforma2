<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource EvaluationCommitment
 *
 * Relaciones de la tabla evaluation_functions.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationUserPosition extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_user_position';

    protected $primaryKey = 'id';

    protected $fillable = [
        'id', 'user_id', 'position_id', 'boss_id',
    ];

    /**
     * User
     *
     *
     *
     * @return  belongsTo().
     */

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    /**
     * UserBoss
     *
     *
     *
     * @return  belongsTo().
     */

    public function getBoss()
    {
        return $this->belongsTo('App\User', 'boss_id');
    }

    /**
     * evaluationPosition
     *
     *
     *
     * @return  belongsTo().
     */

    public function evaluationPosition()
    {
        return $this->belongsTo('App\Modules\Evaluation\Models\EvaluationPosition');
    }

    /**
     * parent
     *
     * Retorna una relacion padre hijo de boss_id(Padre) con user_id(Hijo)(relacion con la misma tabla).
     *
     * @return  hasMany().
     */

    public function parent()
    {
        return $this->belongsTo('App\Modules\Evaluation\Models\EvaluationUserPosition', 'boss_id');
    }

    /**
     * children
     *
     * Retorna una relacion padre hijo de boss_id(Padre) con user_id(Hijo)(relacion con la misma tabla).
     *
     * @return  hasMany().
     */

    public function children()
    {
        return $this->belongsTo('App\Modules\Evaluation\Models\EvaluationUserPosition', 'user_id');
    }

}
