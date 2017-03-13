<?php

/**
 * @resource PollSubquestionTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollSubquestionTest extends TestCase
{
    /**
     * testPollUserStore
     *
     * prueba para crear un usuario (Relación)
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
     * testPollTypeStore
     *
     * prueba para crear un tipo de encuesta (Relacíón)
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
     * testPollStore
     *
     * prueba para crear una encuesta (Relación)
     *
     * JSON
     */

    public function testPollStore()
    {
        $this->post('/api/polls/polls', [
            'title'         => 'example',
            'description'   => 'example',
            'poll_types_id' => 1,
            'user_id'       => 1,
        ])
            ->seeJson([
                'message' => 'la encuesta fue creada con exito',
            ]);
    }

    /**
     * testPollItemStore
     *
     * prueba para crear un item de encuesta (relación)
     *
     * JSON
     */

    public function testPollItemStore()
    {
        $this->post('/api/polls/pollitems', [
            'poll_id'     => 1,
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'El item de la encuesta se ha creado con exito',
            ]);
    }

    /**
     * testPollQuestionTypesStore
     *
     * prueba para crear un tipo de pregunta (Relación)
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
     * testPollQuestionStore
     *
     * prueba para crear una pregunta de  una encuesta (Relación)
     *
     * JSON
     */

    public function testPollQuestionStore()
    {
        $this->post('/api/polls/pollquestions', [
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
     * testPollSubquestionStore
     *
     * prueba para crear una sub pregunta de una encuesta
     *
     * JSON
     */

    public function testPollSubquestionStore()
    {
        $this->post('/api/polls/pollsubquestions', [
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
        $this->get('/api/polls/pollsubquestions')
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
        $this->put('/api/polls/pollsubquestions/1', [
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
        $this->get('/api/polls/pollsubquestions/1')
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
