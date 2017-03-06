<?php

/**
 * @resource PollSubquestionTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollSubquestionTest extends TestCase
{
    /**
     * testPollSubquestionStore
     *
     * prueba para crear un tipo de encuesta
     *
     * JSON
     */

    public function testPollSubquestionStore()
    {
        $this->post('/api/pollsubquestions', [
            'question_id' => 1,
            'title'       => 'example',
            'description' => 'example',
        ])->seeJson([
            'message' => 'La subpregunta de la encuesta  se ha creado con exito',
        ]);
    }

    /**
     * testPollSubquestionIndex
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollSubquestionIndex()
    {
        $this->get('/api/pollsubquestions')
            ->seeJson([
                'question_id' => 1,
                'title'       => 'example',
                'description' => 'example',
            ]);
    }

    /**
     * testPollSubquestionUpdate
     *
     * prueba para actualizar un tipo de encuesta
     *
     * JSON
     */

    public function testPollSubquestionUpdate()
    {
        $this->put('/api/pollsubquestions/1', [
            'title'       => 'exampleUpdatee',
            'description' => 'exampleUpdatee',
        ])
            ->seeJson([
                'message' => 'La subpregunta de la encuesta fue actualizada con exito',
            ]);
    }

    /**
     * testPollSubquestionShow
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollSubquestionShow()
    {
        $this->get('/api/pollsubquestions/1')
            ->seeJson([
                'question_id' => 1,
                'title'       => 'exampleUpdatee',
                'description' => 'exampleUpdatee',
            ]);
    }

    /**
     * testPollSubquestionDelete
     *
     * prueba para eliminar un tipo de encuesta
     *
     * JSON

    public function testPollSubquestionDelete()
    {
    $this->delete('/api/pollsubquestions/1')
    ->seeJson([
    'message' => 'La subpregunta de la encuesta se he eliminado con exito',
    ]);
    }
     */

}
