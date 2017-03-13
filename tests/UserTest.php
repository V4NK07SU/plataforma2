<?php

class UserTest extends TestCase
{
/**
 * testStore
 *
 * prueba para crear un usuario
 *
 * JSON 
 */

    public function testStore()
    {
        $this->post('/api/agendas/users', [
            'first_name' => 'example',
            'last_name'  => 'example',
            'email'      => 'pipe@gmail.com',
            'password'   => 'contra',
        ])
            ->seeJson([
                'message' => 'el usuario  se ha ingresado con exito',
            ]);
    }

    /**  
     * testIndex
     * 
     * prueba a mostrar un usuario
     * 
     * JSON
     */

    public function testIndex()
    {
        $this->get('/api/agendas/users')
            ->seeJson([
                'first_name' => 'example',
                'last_name'  => 'example',
                'email'      => 'pipe@gmail.com',
                'password'   => 'contra',
            ]);
    }

    /**
     *
     * testUpdate
     *
     * prueba para actualizar un usuario
     *
     * JSON
     */

    public function testUpdate()
    {
        $this->put('/api/agendas/users/1', [
            'first_name' => 'exampleupdate',
            'last_name'  => 'exampleupdate',
            'email'      => 'pipeantonio@gmail.com',
            'password'   => 'contra',
        ])
            ->seeJson([
                'message' => 'se actualizo con exito',
            ]);
    }

    /**
     *
     * testShow
     *
     * prueba a mostrar los usuarios
     *
     * JSON
     */

    public function testShow()
    {
        $this->get('/api/agendas/users/1')
            ->seeJson([
                'first_name' => 'exampleupdate',
                'last_name'  => 'exampleupdate',
                'email'      => 'pipeantonio@gmail.com',
                'password'   => 'contra',
            ]);
    }

    /**
     *
     * testDelete
     *
     * prueba para eliminar usuarios
     *
     * JSON


    public function testDelete()
    {
    $this->delete('/agendas/users/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }
     * */

}
