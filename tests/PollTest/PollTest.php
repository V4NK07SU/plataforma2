<?php

/**
 * @resource PollTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollTest extends TestCase
{

    /**
     * testPollUserStore
     *
     * prueba para crear un usuario (Relación)
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
     * testPollTypeStore
     *
     * prueba para crear un tipo de encuesta. (Relación)
     *
     * JSON
     */

    public function testPollTypeStore()
    {
        $this->post('/api/polls/polltypes', [
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'El tipo de encuesta se ha creado con exito',
            ]);
    }

    /**
     * testPollStore
     *
     * prueba para crear una encuesta
     *
     * JSON
     */

    public function testPollStore()
    {
        $this->post('/api/polls/polls', [
            'title'         => 'example',
            'description'   => 'example',
            'poll_types_id' => 1,
            'user_id'       => 1,
        ])
            ->seeJson([
                'message' => 'la encuesta fue creada con exito',
            ]);
    }

    /**
     * testPollIndex
     *
     * prueba a mostrar las encuestas
     *
     * JSON
     */

    public function testPollIndex()
    {
        $this->get('/api/polls/polls')
            ->seeJson([
                'title'         => 'example',
                'description'   => 'example',
                'poll_types_id' => 1,
                'user_id'       => 1,
            ]);
    }

    /**
     * testPollUpdate
     *
     * prueba para actualizar una encuesta
     *
     * JSON
     */

    public function testPollUpdate()
    {
        $this->put('/api/polls/polls/1', [
            'title'         => 'exampleUpdatee',
            'description'   => 'exampleUpdatee',
            'poll_types_id' => 1,
            'user_id'       => 1,
        ])
            ->seeJson([
                'message' => 'Encuesta actualizada con exito',
            ]);
    }

    /**
     * testPollStore
     *
     * prueba a mostrar una encuesta
     *
     * JSON
     */

    public function testPollShow()
    {
        $this->get('/api/polls/polls/1')
            ->seeJson([
                'title'         => 'exampleUpdatee',
                'description'   => 'exampleUpdatee',
                'poll_types_id' => 1,
                'user_id'       => 1,
            ]);
    }

    /**
     * testPollDelete
     *
     * prueba para eliminar una encuesta
     *
     * JSON


    public function testPollDelete()
    {
    $this->delete('/api/poll/1')
    ->seeJson([
    'message' => 'La encuesta se he eliminado con exito',
    ]);


    }
     */

}
