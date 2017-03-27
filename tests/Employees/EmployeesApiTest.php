<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Modules\Employees\Models\EmployeePosition;
use App\Modules\Employees\Models\Employee;

class EmployeesApiTest extends TestCase
{
    public function testEmployeesCreatePosition ()
    {
        $this->json('POST', '/api/employees/positions', [
            'title' => 'Posicion 1',
            'description'  => 'Esta es la descripcion de la posicion',
        ])
        ->seeJson([
            'message' => 'La posición se creo con exito!',
        ]);
    }

    public function testEmployeesCreateEmployee ()
    {
        $this->json('POST', '/api/employees', [
            'first_name' => 'Pierre',
            'last_name'  => 'Silva',
            'email'      => 'pierre@email.com',
            'phone'      => '8990011',
            'position_id'   => 1,
        ])
            ->seeJson([
                'message' => 'El empleado se creo con exito!',
            ]);
    }

    // Mostrar un empleado

    // Mostrar empleados paginados

    // Actualizar empleado

    // Actualizar posicion

    public function testEmployeesDeleteEmployee()
    {
        $this->json('DELETE', '/api/employees/1')
            ->seeJson([
                'message' => 'El empleado se elimino con exito!',
            ]);
    }

    public function testEmployeesDeletePosition ()
    {
        $this->json('DELETE', '/api/employees/positions/1')
            ->seeJson([
                'message' => 'La posición se elimino con exito!',
            ]);
    }

    public function testEmployeesTruncateTables()
    {
        EmployeePosition::truncate();
        Employee::truncate();
    }
}
