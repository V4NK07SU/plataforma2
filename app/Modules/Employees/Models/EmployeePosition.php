<?php

namespace App\Modules\Employees\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EmployeePosition extends Model
{
    //
    use SoftDeletes;

    protected $table = 'employees_positions';

    protected $fillable = [
        'title',
        'description'
    ];

    public function employees ()
    {
        return $this->hasMany(Employee::class);
    }

}
