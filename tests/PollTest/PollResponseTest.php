<?php

/**
 * @resource PollResponseTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollResponseTest extends TestCase
{
    /**
     * testPollResponseStore
     *
     * prueba para crear un tipo de encuesta
     *
     * JSON
     */

    public function testPollResponseStore()
    {
        $this->post('/api/pollresponses', [
            'user_id'          => 1,
            'poll_id'          => 1,
            'poll_question_id' => 1,
            'response'         => 'example',
            'responded_date'   => '2017-09-09 00:00:00',
        ])->seeJson([
            'message' => 'la respuesta fue creada con exito',
        ]);
    }

    /**
     * testPollResponseIndex
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollResponseIndex()
    {
        $this->get('/api/pollresponses')
            ->seeJson([
                'user_id'          => 1,
                'poll_id'          => 1,
                'poll_question_id' => 1,
                'response'         => 'example',
                'responded_date'   => '2017-09-09 00:00:00',
            ]);
    }

    /**
     * testPollResponseUpdate
     *
     * prueba para actualizar un tipo de encuesta
     *
     * JSON
     */

    public function testPollResponseUpdate()
    {
        $this->put('/api/pollresponses/1', [
            'response'       => 'exampleUpdatee',
            'responded_date' => '2017-11-11 01:01:01',
        ])
            ->seeJson([
                'message' => 'La respuesta de encuesta fue actualizada con exito',
            ]);
    }

    /**     
     * testPollResponseShow
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollResponseShow()
    {
        $this->get('/api/pollresponses/1')
            ->seeJson([
                'user_id'          => 1,
                'poll_id'          => 1,
                'poll_question_id' => 1,
                'response'         => 'exampleUpdatee',
                'responded_date'   => '2017-11-11 01:01:01',
            ]);
    }

    /**     
     * testPollResponseDelete
     *
     * prueba para eliminar un tipo de encuesta
     *
     * JSON


    public function testPollResponseDelete()
    {
    $this->delete('/api/pollresponses/1')
    ->seeJson([
    'message' => 'el tipo de encuesta se he eliminado con exito',
    ]);
    }
     */
}
