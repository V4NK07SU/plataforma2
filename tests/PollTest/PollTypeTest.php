<?php

/**
 * @resource PollTypeTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollTypeTest extends TestCase
{
    /**
     * testPollTypeStore
     *
     * prueba para crear un tipo de encuesta
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
     * testPollTypeIndex
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollTypeIndex()
    {
        $this->get('/api/polls/polltypes')
            ->seeJson([
                'title'       => 'example',
                'description' => 'example',
            ]);
    }

    /**
     * testPollTypeUpdate
     *
     * prueba para actualizar un tipo de encuesta
     *
     * JSON
     */

    public function testPollTypeUpdate()
    {
        $this->put('/api/polls/polltypes/1', [
            'title'       => 'exampleUpdatee',
            'description' => 'exampleUpdatee',
        ])
            ->seeJson([
                'message' => 'Tipo de encuesta actualizada con exito',
            ]);
    }

    /**
     * testPollTypeShow
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollTypeShow()
    {
        $this->get('/api/polls/polltypes/1')
            ->seeJson([
                'title'       => 'exampleUpdatee',
                'description' => 'exampleUpdatee',
            ]);
    }

    /**
     * testPollTypeDelete
     *
     * prueba para eliminar un tipo de encuesta
     *
     * JSON


    public function testPollTypeDelete()
    {
    $this->delete('/api/polltype/1')
    ->seeJson([
    'message' => 'el tipo de encuesta se he eliminado con exito',
    ]);
     */

}
