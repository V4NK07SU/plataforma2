<?php

/**
 * @resource PollAnswerTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollAnswerTest extends TestCase
{

    /**
     * testPollAnswerStore
     *
     * prueba para crear un tipo de encuesta
     *
     * JSON .
     */

    public function testPollAnswerStore()
    {
        $this->post('/api/pollanswerr', [
            'title'       => 'example',
            'description' => 'example',
            'value'       => 1,
        ])
            ->seeJson([
                'message' => 'la respuesta fue creada con exito',
            ]);
    }

    /**
     * testPollAnswerIndex
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollAnswerIndex()
    {
        $this->get('/api/pollanswerr')
            ->seeJson([
                'title'       => 'example',
                'description' => 'example',
                'value'       => 1,
            ]);
    }

    /**
     * testPollAnswerUpdate
     *
     * prueba para actualizar un tipo de encuesta
     *
     * JSON
     */

    public function testPollAnswerUpdate()
    {
        $this->put('/api/pollanswerr/1', [
            'title'       => 'exampleUpdatee',
            'description' => 'exampleUpdatee',
            'value'       => 2,
        ])
            ->seeJson([
                'message' => 'La respuesta fue actualizada con exito',
            ]);
    }

    /**
     * testPollAnswerShow
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollAnswerShow()
    {
        $this->get('/api/pollanswerr/1')
            ->seeJson([
                'title'       => 'exampleUpdatee',
                'description' => 'exampleUpdatee',
                'value'       => 2,
            ]);
    }

    /**
     * testPollAnswerDelete
     *
     * prueba para eliminar un tipo de encuesta
     *
     * JSON


    public function testPollAnswerDelete()
    {
    $this->delete('/api/pollanswerr/1')
    ->seeJson([
    'message' => 'el tipo de encuesta se he eliminado con exito',
    ]);
    }
     */

}
