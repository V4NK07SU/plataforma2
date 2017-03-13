<?php

/**
 * @resource PollCampaingTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollCampaingTest extends TestCase
{

    /**
     * testPollUserStore
     *
     * prueba para crear un usuario (relacion)
     *
     * JSON
     */

    public function testPollUserStore()
    {
        $this->post('/api/polls/users', [
            'first_name' => 'example',
            'last_name'  => 'example',
            'email'      => 'example@mail.com',
            'password'   => '123456',
        ])
            ->seeJson([
                'message' => 'El usuario se ha creado con exito',
            ]);
    }

    /**
     * testPollCampaingStore
     *
     * prueba para crear una campaña de encuesta
     *
     * JSON
     */

    public function testPollCampaingStore()
    {
        $this->post('/api/polls/pollcampaings', [

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
     * prueba a mostrar las campañas de encuesta
     *
     * JSON
     */

    public function testPollCampaingIndex()
    {
        $this->get('/api/polls/pollcampaings')
            ->seeJson([
                'max_questions' => 10,
                'start_at'      => '2017-03-03 00:00:00',
                'finish_at'     => '2017-04-03 00:00:00',
            ]);
    }

    /**
     * testPollCampaingUpdate
     *
     * prueba para actualizar una campaña de encuesta
     *
     * JSON
     */

    public function testPollCampaingUpdate()
    {
        $this->put('/api/polls/pollcampaings/1', [
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
     * prueba a mostrar una campaña de encuesta
     *
     * JSON
     */

    public function testPollCampaingShow()
    {
        $this->get('/api/polls/pollcampaings/1')
            ->seeJson([
                'max_questions' => 12,
                'start_at'      => '2017-03-03 00:00:11',
                'finish_at'     => '2017-11-11 00:00:11',
            ]);
    }

    /**
     * testPollCampaingDelete
     *
     * prueba para eliminar una campaña de encuesta
     *
     * JSON


    public function testPollCampaingDelete()
    {
    $this->delete('/api/pollcampaing/1')
    ->seeJson([
    'message' => 'el tipo de encuesta se he eliminado con exito',
    ]);

    }
     */

}
