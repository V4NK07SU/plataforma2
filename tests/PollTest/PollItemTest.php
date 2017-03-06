<?php

/**
 * @resource PollItemTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollItemTest extends TestCase
{
    /**
     * testPollItemStore
     *
     * prueba para crear un tipo de encuesta
     *
     * JSON
     */

    public function testPollItemStore()
    {
        $this->post('/api/pollitem', [
            'poll_id'     => 1,
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'El item de la encuesta se ha creado con exito',
            ]);
    }

    /**
     * testPollItemIndex
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollItemIndex()
    {
        $this->get('/api/pollitem')
            ->seeJson([
                'poll_id'     => 1,
                'title'       => 'example',
                'description' => 'example',
            ]);
    }

    /**
     * testPollItemUpdate
     *
     * prueba para actualizar un tipo de encuesta
     *
     * JSON
     */

    public function testPollItemUpdate()
    {
        $this->put('/api/pollitem/1', [
            'title'       => 'exampleUpdatee',
            'description' => 'exampleUpdatee',
        ])
            ->seeJson([
                'message' => 'El item de la encuesta ha sido actualizado con exito',
            ]);
    }

    /**
     * testPollItemShow
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollItemShow()
    {
        $this->get('/api/pollitem/1')
            ->seeJson([
                'poll_id'     => 1,
                'title'       => 'exampleUpdatee',
                'description' => 'exampleUpdatee',
            ]);
    }

    /**
     * testPollItemDelete
     *
     * prueba para eliminar un tipo de encuesta
     *
     * JSON


    public function testPollItemDelete()
    {
    $this->delete('/api/pollitem/1')
    ->seeJson([
    'message' => 'el tipo de encuesta se he eliminado con exito',
    ]);
    }

     */
}
