<?php

/**
 * @resource PollSubquestionResponseTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollSubquestionResponseTest extends TestCase
{
    /**
     * testPollSubquestionResponseStore
     *
     * prueba para crear un tipo de encuesta
     *
     * JSON
     */

    public function testPollSubquestionResponseStore()
    {
        $this->post('/api/pollsubquestionresponses', [
            'user_id'        => 1,
            'poll_id'        => 1,
            'subquestion_id' => 1,
            'response'       => 'example',
            'responded_date' => '2017-09-09 00:00:00',
        ])->seeJson([
            'message' => 'La respuesta de la subcuestion en la encuesta se ha creado con exito',
        ]);
    }

    /**
     * testPollSubquestionResponseIndex
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollSubquestionResponseIndex()
    {
        $this->get('/api/pollsubquestionresponses')
            ->seeJson([
                'user_id'        => 1,
                'poll_id'        => 1,
                'subquestion_id' => 1,
                'response'       => 'example',
                'responded_date' => '2017-09-09 00:00:00',
            ]);
    }

    /**
     * testPollSubquestionResponseUpdate
     *
     * prueba para actualizar un tipo de encuesta
     *
     * JSON
     */

    public function testPollSubquestionResponseUpdate()
    {
        $this->put('/api/pollsubquestionresponses/1', [
            'response'       => 'exampleUpdatee',
            'responded_date' => '2017-11-11 01:01:01',
        ])
            ->seeJson([
                'message' => 'La respuesta de la subpregunta en la encuesta fue actualizada con exito',
            ]);
    }

    /**
     * testPollSubquestionResponseShow
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollSubquestionResponseShow()
    {
        $this->get('/api/pollsubquestionresponses/1')
            ->seeJson([
                'user_id'        => 1,
                'poll_id'        => 1,
                'subquestion_id' => 1,
                'response'       => 'exampleUpdatee',
                'responded_date' => '2017-11-11 01:01:01',
            ]);
    }

    /**
     * testPollSubquestionResponseDelete
     *
     * prueba para eliminar un tipo de encuesta
     *
     * JSON


    public function testPollSubquestionResponseDelete()
    {
    $this->delete('/api/pollsubquestionresponses/1')
    ->seeJson([
    'message' => 'el tipo de encuesta se he eliminado con exito',
    ]);
    }
     */

}
