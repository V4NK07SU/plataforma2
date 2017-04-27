<?php

/**
 * @resource PollQuestionTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollQuestionTest extends TestCase
{
 /**
     *
     * testCreatephenomenaStore
     *
     * prueba para crear datos en la tabla fenomeno (relacion)
     */

    public function testCreatephenomenaStore()
    {
        $this->post('/api/agendas/phenomenas', [

            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                      'message' => 'el fenomeno se ha ingresado con exito',
            ]);
    }

    /**
     *
     * testStore
     *
     * prueba para la variable (relacion)
     */

    public function testStore()
    {
        $this->post('/api/agendas/riskvariables', [
            'title'         => 'example',
            'description'   => 'example',
            'phenomenon_id' => 1,
        ])
            ->seeJson([
              'message' => 'la variable de riesgo se ha ingresado con exito',
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
 * testPollUserStore
 *
 * prueba para crear un usuario (relacion)
 *
 * JSON
 */

    public function testPollUserStore()
    {
        $this->post('/api/users/register', [
            'email'      => 'example@mail.com',
            'password'   => '123456',
        ])
            ->seeJson([
             'message' => 'el usuario  se ha ingresado con exito',
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
     * prueba para crear una pregunta de  una encuesta
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
     * testPollQuestionIndex
     *
     * prueba a mostrar las pregunta de  una encuesta
     *
     * JSON
     */

    public function testPollQuestionIndex()
    {
        $this->get('/api/polls/pollquestions')
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
     * prueba para actualizar una pregunta de  una encuesta
     *
     * JSON
     */

    public function testPollQuestionUpdate()
    {
        $this->put('/api/polls/pollquestions/1', [
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
     * prueba a mostrar una pregunta de  una encuesta
     *
     * JSON
     */

    public function testPollQuestionShow()
    {
        $this->get('/api/polls/pollquestions/1')
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
     * prueba para eliminar una pregunta de  una encuesta
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
