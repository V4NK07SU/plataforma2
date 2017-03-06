<?php

/**
 * @resource PollTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollTest extends TestCase
{
    /**
     * testPollStore
     *
     * prueba para crear un tipo de encuesta
     *
     * JSON
     */

    public function testPollStore()
    {
        $this->post('/api/poll', [
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
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollIndex()
    {
        $this->get('/api/poll')
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
     * prueba para actualizar un tipo de encuesta
     *
     * JSON
     */

    public function testPollUpdate()
    {
        $this->put('/api/poll/1', [
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
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollShow()
    {
        $this->get('/api/poll/1')
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
     * prueba para eliminar un tipo de encuesta
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
