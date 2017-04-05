<?php

use \App\Modules\Employees\Models\Employee;

class CreateEmployeeTest extends TestCase
{
    /**
     * Crear un empleado.
     *
     * @return void
     */
    public function testCreateEmployee()
    {
        $this->json('POST', '/api/employees', [
            'first_name' => 'Pierre',
            'last_name' => 'Silva',
            'email' => 'pierre@email.com',
            'phone' => '8990011',
            'position' => 'Developer',
        ])
            ->seeJson([
                'message' => 'El empleado se creo con exito!',
            ]);
    }

    /**
     * Editar un empleado.
     *
     * @return void
     */
    public function testUpdateEmployee()
    {
        $this->json('PUT', '/api/employees/1', [
            'first_name' => 'Pierre Michel',
            'last_name' => 'Silva Pérez',
            'email' => 'pierre@email2.com',
            'phone' => '8990012',
            'position' => 'Manager',
        ])
            ->seeJson([
                'message' => 'El empleado se actualizo con exito!',
            ]);
    }

    /**
     * Mostrar un empleado.
     *
     * @return void
     */
    public function testShowEmployee()
    {
        $this->json('GET', '/api/employees/1')
            ->seeJson([
                'first_name' => 'Pierre Michel',
            ]);
    }

    /**
     * Mostrar empleados.
     *
     * @return void
     */
    public function testIndexEmployee()
    {
        $this->json('GET', '/api/employees')
            ->seeJson([
                'id' => 1,
                'first_name' => 'Pierre Michel',
            ]);
    }


    /**
     * Eliminar un empleado.
     *
     * @return void
     */
    public function testDeleteEmployee()
    {
        $this->json('DELETE', '/api/employees/1')
            ->seeJson([
                'message' => 'El empleado se elimino con exito!',
            ]);

        Employee::truncate();
    }
}
