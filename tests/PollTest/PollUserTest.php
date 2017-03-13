<?php

/**
 * @resource PollUserTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollUserTest extends TestCase
{
    /**
     * testPollUserStore
     *
     * prueba para crear un usuario
     *
     * JSON
     */

    public function testPollUserStore()
    {
        $this->post('/api/polls/users', [
            'first_name' => 'example',
            'last_name'  => 'example',
            'email'      => 'example@mail.com',
            'password'   => '123456',
        ])
            ->seeJson([
                'message' => 'El usuario se ha creado con exito',
            ]);
    }

    /**
     * testPollUserIndex
     *
     * prueba a mostrar los usuario
     *
     * JSON
     */

    public function testPollUserIndex()
    {
        $this->get('/api/polls/users')
            ->seeJson([
                'id'         => 1,
                'first_name' => 'example',
                'last_name'  => 'example',
                'email'      => 'example@mail.com',
            ]);
    }

    /**
     * testPollUserUpdate
     *
     * prueba para actualizar un usuario
     *
     * JSON
     */

    public function testPollUserUpdate()
    {
        $this->put('/api/polls/users/1', [
            'first_name' => 'exampleUpdate',
            'last_name'  => 'exampleUpdate',
            'email'      => 'exampleUpdate@mail.com',
            'password'   => '123456Updatee',
        ])
            ->seeJson([
                'message' => 'El usuario se ha actualizado con exito',
            ]);
    }

    /**
     * testPollUserShow
     *
     * prueba a mostrar los tipos un usuario determinado
     *
     * JSON
     */

    public function testPollUserShow()
    {
        $this->get('/api/polls/users/1')
            ->seeJson([
                'first_name' => 'exampleUpdate',
                'last_name'  => 'exampleUpdate',
                'email'      => 'exampleUpdate@mail.com',
            ]);
    }

    /**
     * testPollUserDelete
     *
     * prueba para eliminar un usuario
     *
     * JSON


    public function testPollUserDelete()
    {
    $this->delete('/api/user/1')
    ->seeJson([
    'message' => 'El usuario se he eliminado con exito',
    ]);

    }
     */

}
