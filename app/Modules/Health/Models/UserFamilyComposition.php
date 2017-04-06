<?php

namespace App\Modules\Health\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @resource UserFamilyComposition
 *
 * Relaciones de la tabla user_family_composition.
 *
 * @author Danny Rojas Reyes, @rojasknight
 */

class UserFamilyComposition extends Model
{
    use SoftDeletes;

    protected $table = 'user_family_composition';

    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id', 'first_name', 'last_name', 'relationship', 'occupation', 'address', 'phone',
    ];

    /**
     * User
     *
     * Retorna la relacion de muchos a uno.
     *
     * @return  belongsTo()
     */

    public function User()
    {
        return $this->belongsTo('App\User');
    }
}
