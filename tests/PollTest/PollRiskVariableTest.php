<?php

class RiskVariableTest extends TestCase
{
    /**
     * testCreatephenomenaStore
     *
     * prueba para crear datos en la tabla fenomeno
     *
     * JSON
     */

    public function testCreatephenomenaStore()
    {
        $this->post('/api/polls/pollphenomena', [

            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                     'message' => 'el fenomeno se ha ingresado con exito',
            ]);
    }

    /**
     * testStore
     *
     * prueba para crear un fenomeno
     *
     * JSON
     */

    public function testStore()
    {
        $this->post('/api/polls/pollriskvariable', [
            'title'         => 'example',
            'description'   => 'example',
            'phenomenon_id' => 1,
        ])
            ->seeJson([
               'message' => 'la variable se ha ingresado con exito',
            ]);
    }

    /**
     * testIndex
     *
     * prueba a mostrar un fenomeno
     *
     * JSON
     */

    public function testIndex()
    {
        $this->get('/api/polls/pollriskvariable')
            ->seeJson([
                'title'         => 'example',
                'description'   => 'example',
                'phenomenon_id' => 1,
            ]);
    }

    /**
     * testUpdate
     *
     * prueba para actualizar un fenomeno
     *
     * JSON
     */

    public function testUpdate()
    {
        $this->put('/api/polls/pollriskvariable/1', [
            'title'         => 'exampleupdate',
            'description'   => 'exampleupdate1',
            'phenomenon_id' => 1,
        ])
            ->seeJson([
                'message' => 'la variable se actualizo con exito',
            ]);
    }

    /**
     * testShow
     *
     * prueba para mostrar un fenomeno
     *
     * JSON
     */

    public function testShow()
    {
        $this->get('/api/polls/pollriskvariable/1')
            ->seeJson([
                'title'         => 'exampleupdate',
                'description'   => 'exampleupdate1',
                'phenomenon_id' => 1,
            ]);
    }

    /**
     * testDelete
     *
     * prueba para eliminar un  fenomeno
     *
     * JSON


    public function testDelete()
    {
    $this->delete('/api/polls/pollriskvariable/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }
     * */
}
