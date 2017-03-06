<?php

/**
 * @resource PollCampaingTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollCampaingTest extends TestCase
{
    /**
     * testPollCampaingStore
     *
     * prueba para crear un tipo de encuesta
     *
     * JSON
     */

    public function testPollCampaingStore()
    {
        $this->post('/api/pollcampaing', [

            'max_questions' => 10,
            'start_at'      => '2017-03-03 00:00:00',
            'finish_at'     => '2017-04-03 00:00:00',
            'user_id'       => 1,
        ])
            ->seeJson([
                'message' => 'El campaña de la encuesta se ha creado con exito',
            ]);
    }

    /**
     * testPollCampaingIndex
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollCampaingIndex()
    {
        $this->get('/api/pollcampaing')
            ->seeJson([
                'max_questions' => 10,
                'start_at'      => '2017-03-03 00:00:00',
                'finish_at'     => '2017-04-03 00:00:00',
            ]);
    }

    /**
     * testPollCampaingUpdate
     *
     * prueba para actualizar un tipo de encuesta
     *
     * JSON
     */

    public function testPollCampaingUpdate()
    {
        $this->put('/api/pollcampaing/2', [
            'max_questions' => 12,
            'start_at'      => '2017-03-03 00:00:11',
            'finish_at'     => '2017-11-11 00:00:11',
            'user_id'       => 1,
        ])
            ->seeJson([
                'message' => 'Campaña de encuesta fue actualizada con exito',
            ]);
    }

    /**
     * testPollCampaingShow
     *
     * prueba a mostrar los tipos de encuesta
     *
     * JSON
     */

    public function testPollCampaingShow()
    {
        $this->get('/api/pollcampaing/2')
            ->seeJson([
                'max_questions' => 12,
                'start_at'      => '2017-03-03 00:00:11',
                'finish_at'     => '2017-11-11 00:00:11',
            ]);
    }

    /**
     * testPollCampaingDelete
     *
     * prueba para eliminar un tipo de encuesta
     *
     * JSON


    public function testPollCampaingDelete()
    {
    $this->delete('/api/pollcampaing/2')
    ->seeJson([
    'message' => 'el tipo de encuesta se he eliminado con exito',
    ]);
    }

     */

}
