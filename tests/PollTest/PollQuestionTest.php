<?php

/**
 * @resource PollQuestionTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollQuestionTest extends TestCase
{
    /**
     * testPollQuestionStore
     *
     * prueba para crear un tipo de encuesta
     *
     * JSON
     */

    public function testPollQuestionStore()
    {
        $this->post('/api/pollquestion', [
            'poll_item_id'          => 1,
            'poll_question_type_id' => 1,
            'title'                 => 'example',
            'description'           => 'example',
            'risk_var_id'           => 1,
        ])
            ->seeJson([
                'message' => 'la pregunta de la encuesta se ha creado con exito',
            ]);
    }

    /**
     * tesPollQuestiontIndex
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollQuestionIndex()
    {
        $this->get('/api/pollquestion')
            ->seeJson([
                'poll_item_id'          => 1,
                'poll_question_type_id' => 1,
                'title'                 => 'example',
                'description'           => 'example',
                'risk_var_id'           => 1,
            ]);
    }

    /**
     * testPollQuestionUpdate
     *
     * prueba para actualizar un tipo de encuesta
     *
     * JSON
     */

    public function testPollQuestionUpdate()
    {
        $this->put('/api/pollquestion/1', [
            'title'       => 'exampleUpdatee',
            'description' => 'exampleUpdatee',
        ])
            ->seeJson([
                'message' => 'La pregunta de la encuesta fue actualizada con exito',
            ]);
    }

    /**
     * testPollQuestionShow
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollQuestionShow()
    {
        $this->get('/api/pollquestion/1')
            ->seeJson([
                'poll_item_id'          => 1,
                'poll_question_type_id' => 1,
                'title'                 => 'exampleUpdatee',
                'description'           => 'exampleUpdatee',
                'risk_var_id'           => 1,
            ]);
    }
    /**
     * testPollQuestionDelete
     *
     * prueba para eliminar un tipo de encuesta
     *
     * JSON


    public function testPollQuestionDelete()
    {
    $this->delete('/api/pollquestion/1')
    ->seeJson([
    'message' => 'el tipo de encuesta se he eliminado con exito',
    ]);
    }

     */
}
