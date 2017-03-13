<?php

/**
 * @resource PollQuestionAnswerTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollQuestionAnswerTest extends TestCase
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
     * testPollAnswerStore
     *
     * prueba para crear un respuesta de encuesta (relacion)
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
     * testPollQuestionTypesStore
     *
     * prueba para crear un tipo de pregunta (relacion)
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
     * testPollTypeStore
     *
     * prueba para crear un tipo de encuesta (relacion)
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
     * prueba para crear una encuesta(relacion)
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
     * prueba para crear un item de encuesta (relacion)
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
 * testPollQuestionAnswerStore
 *
 * prueba para crear una respuesta de una pregunta
 *
 * JSON
 */

    public function testPollQuestionAnswerStore()
    {
        $this->post('/api/polls/pollquestionanswers', [
            'poll_question_id' => 1,
            'poll_answer_id'   => 1,
            'user_id'          => 1,
            'poll_id'          => 1,
            'answered_date'    => '2017-03-07 00:00:00',
        ])
            ->seeJson([
                'message' => 'La respuesta de la pregunta  se ha creado con exito',
            ]);
    }

    /**
     * testPollQuestionAnswerIndex
     *
     * prueba a mostrar las respuestas de las preguntas
     *
     * JSON
     */

    public function testPollQuestionAnswerIndex()
    {
        $this->get('/api/polls/pollquestionanswers')

            ->seeJson([
                'poll_question_id' => 1,
                'poll_answer_id'   => 1,
                'user_id'          => 1,
                'poll_id'          => 1,
                'answered_date'    => '2017-03-07 00:00:00',
            ]);
    }

}
