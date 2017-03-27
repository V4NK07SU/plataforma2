<?php

namespace App\Modules\Tasks\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    //
    use SoftDeletes;

    protected $table = 'tasks';

    protected $fillable = [
        'name',
        'description',
    ];

    public function categories ()
    {
        return $this->belongsToMany(TaskCategory::class, 'tasks_task_category', 'category_id', 'task_id');
    }
}
