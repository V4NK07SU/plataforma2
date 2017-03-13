<?php

/**
 * @resource PollItemTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollItemTest extends TestCase
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
     * prueba para crear un item de encuesta
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
     * testPollItemIndex
     *
     * prueba a mostrar los items de encuesta
     *
     * JSON
     */

    public function testPollItemIndex()
    {
        $this->get('/api/polls/pollitems')
            ->seeJson([
                'poll_id'     => 1,
                'title'       => 'example',
                'description' => 'example',
            ]);
    }

    /**
     * testPollItemUpdate
     *
     * prueba para actualizar un item de encuesta
     *
     * JSON
     */

    public function testPollItemUpdate()
    {
        $this->put('/api/polls/pollitems/1', [
            'title'       => 'exampleUpdatee',
            'description' => 'exampleUpdatee',
        ])
            ->seeJson([
                'message' => 'El item de la encuesta ha sido actualizado con exito',
            ]);
    }

    /**
     * testPollItemShow
     *
     * prueba a mostrar los item de encuesta
     *
     * JSON
     */

    public function testPollItemShow()
    {
        $this->get('/api/polls/pollitems/1')
            ->seeJson([
                'poll_id'     => 1,
                'title'       => 'exampleUpdatee',
                'description' => 'exampleUpdatee',
            ]);
    }

    /**
     * testPollItemDelete
     *
     * prueba para eliminar un item de encuesta
     *
     * JSON


    public function testPollItemDelete()
    {
    $this->delete('/api/pollitem/1')
    ->seeJson([
    'message' => 'el tipo de encuesta se he eliminado con exito',
    ]);
    }
     */

}
