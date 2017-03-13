<?php

/**
 * @resource PollSubquestionResponseTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollSubquestionResponseTest extends TestCase
{

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
     * prueba para crear una encuesta (relacion)
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
     * testPollQuestionStore
     *
     * prueba para crear una pregunta de  una encuesta (relacion)
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
     * prueba para crear una sub pregunta de una encuesta(relacion)
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
     * testPollSubquestionResponseStore
     *
     * prueba para crear una respuesta de una subpregunta de encuesta
     *
     * JSON
     */

    public function testPollSubquestionResponseStore()
    {
        $this->post('/api/polls/pollsubquestionresponses', [
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
     * prueba a mostrar las  respuesta de una subpregunta de encuesta
     *
     * JSON
     */

    public function testPollSubquestionResponseIndex()
    {
        $this->get('/api/polls/pollsubquestionresponses')
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
     * prueba para actualizar una respuesta de una subpregunta de encuesta
     *
     * JSON
     */

    public function testPollSubquestionResponseUpdate()
    {
        $this->put('/api/polls/pollsubquestionresponses/1', [
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
     * prueba a mostrar una respuesta de una subpregunta de encuesta
     *
     * JSON
     */

    public function testPollSubquestionResponseShow()
    {
        $this->get('/api/polls/pollsubquestionresponses/1')
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
     * prueba para eliminar una respuesta de una subpregunta de encuesta
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
