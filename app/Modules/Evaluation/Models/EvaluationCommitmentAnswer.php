<?php

namespace App\Modules\Evaluation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * @resource EvaluationCommitmentAnswer
 *
 * Relaciones de la tabla evaluation_functions.
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationCommitmentAnswer extends Model
{
    use SoftDeletes;

    protected $table = 'evaluation_commitments_answers';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description',
    ];
}
