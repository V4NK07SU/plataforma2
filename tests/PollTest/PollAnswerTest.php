<?php

use App\Modules\Polls\Models\PollAnswer;

/**
 * @resource PollAnswerTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollAnswerTest extends TestCase
{

    /**
     * testPollAnswerStore
     *
     * prueba para crear un respuesta de encuesta
     *
     * JSON .
     */

    public function testPollAnswerStore()
    {
        $this->post('/api/polls/pollanswers', [
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
     * prueba a mostrar las respuesta de encuesta
     *
     * JSON
     */

    public function testPollAnswerIndex()
    {
        $this->get('/api/polls/pollanswers')
            ->seeJson([
                'title'       => 'example',
                'description' => 'example',
                'value'       => 1,
            ]);
    }

    /**
     * testPollAnswerUpdate
     *
     * prueba para actualizar una respuesta de encuesta
     *
     * JSON
     */

    public function testPollAnswerUpdate()
    {
        $this->put('/api/polls/pollanswers/1', [
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
     * prueba a mostrar una respuesta de encuesta
     *
     * JSON
     */

    public function testPollAnswerShow()
    {
        $this->get('/api/polls/pollanswers/1')
            ->seeJson([
                'title'       => 'exampleUpdatee',
                'description' => 'exampleUpdatee',
                'value'       => 2,
            ]);
    }

    /**
     * testPollAnswerDelete
     *
     * prueba para eliminar una respuesta de encuesta
     *
     * JSON


    public function testPollAnswerDelete()
    {
    $this->delete('/api/pollanswerr/1')
    ->seeJson([
    'message' => 'el tipo de encuesta se he eliminado con exito',
    ]);

    }


    public function testTruncate()
    {
    $answer = PollAnswer::withTrashed()->where('id', 1);
    $answer->forceDelete();
    //PollAnswer::truncate();
    }
     */

}
