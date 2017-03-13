<?php

/**
 * @resource PollQuestionTypesTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollQuestionTypesTest extends TestCase
{
    /**
     * testPollQuestionTypesStore
     *
     * prueba para crear un tipo de pregunta
     *
     * JSON
     */

    public function testPollQuestionTypesStore()
    {
        $this->post('/api/polls/pollquestiontypes', [
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'El tipo de pregunta fue creado con exito',
            ]);
    }

    /**
     * testPollQuestionTypesIndex
     *
     * prueba a mostrar los tipos de pregunta
     *
     * JSON
     */

    public function testPollQuestionTypesIndex()
    {
        $this->get('/api/polls/pollquestiontypes')
            ->seeJson([
                'title'       => 'example',
                'description' => 'example',
            ]);
    }

    /**
     * testPollQuestionTypesUpdate
     *
     * prueba para actualizar un tipo de pregunta
     *
     * JSON
     */

    public function testPollQuestionTypesUpdate()
    {
        $this->put('/api/polls/pollquestiontypes/1', [
            'title'       => 'exampleUpdatee',
            'description' => 'exampleUpdatee',
        ])
            ->seeJson([
                'message' => 'El tipo de pregunta en la encuesta fue actualizada con exito',
            ]);
    }

    /**
     * testPollQuestionTypesShow
     *
     * prueba a mostrar los tipo de pregunta
     *
     * JSON
     */

    public function testPollQuestionTypesShow()
    {
        $this->get('/api/polls/pollquestiontypes/1')
            ->seeJson([
                'title'       => 'exampleUpdatee',
                'description' => 'exampleUpdatee',
            ]);
    }

    /**
     * testPollQuestionTypesDelete
     *
     * prueba para eliminar un tipo de pregunta
     *
     * JSON


    public function testPollQuestionTypesDelete()
    {
    $this->delete('/api/pollquestiontype/1')
    ->seeJson([
    'message' => 'el tipo de encuesta se he eliminado con exito',
    ]);


    }
     */
}
