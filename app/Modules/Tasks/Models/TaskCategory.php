<?php

namespace App\Modules\Tasks\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TaskCategory extends Model
{
    //
    use SoftDeletes;

    protected $table = 'tasks_categories';

    protected $fillable = [
        'name'
    ];

    public function tasks ()
    {
        return $this->belongsToMany(Task::class, 'tasks_task_category', 'task_id', 'category_id');
    }
}
