<?php

class RiskVariableTest extends TestCase
{
    /**
     *
     * testCreatephenomenaStore
     *
     * prueba para crear datos en la tabla fenomeno
     */

    public function testCreatephenomenaStore()
    {
        $this->post('/api/agendas/phenomenas', [

            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'los phenomenos se han ingresado con exito',
            ]);
    }

    /**
     *
     * testStore
     *
     * prueba para crear un fenomeno
     */

    public function testStore()
    {
        $this->post('/api/agendas/riskvariables', [
            'title'         => 'example',
            'description'   => 'example',
            'phenomenon_id' => 1,
        ])
            ->seeJson([
                'message' => 'los riegos se han ingresado con exito',
            ]);
    }

    /**
     *
     * testIndex
     *
     * prueba a mostrar un fenomeno
     */

    public function testIndex()
    {
        $this->get('/api/agendas/riskvariables')
            ->seeJson([
                'title'         => 'example',
                'description'   => 'example',
                'phenomenon_id' => 1,
            ]);
    }

    /**
     *
     * testUpdate
     *
     * prueba para actualizar un fenomeno
     */

    public function testUpdate()
    {
        $this->put('/api/agendas/riskvariables/1', [
            'title'         => 'exampleupdate',
            'description'   => 'exampleupdate1',
            'phenomenon_id' => 1,
        ])
            ->seeJson([
                'message' => 'se actualizo con exito',
            ]);
    }

    /**
     *
     * testShow
     *
     * prueba para mostrar un fenomeno
     */

    public function testShow()
    {
        $this->get('/api/agendas/riskvariables/1')
            ->seeJson([
                'title'         => 'exampleupdate',
                'description'   => 'exampleupdate1',
                'phenomenon_id' => 1,
            ]);
    }

    /**
     *
     * testDelete
     *
     * prueba para eliminar un  fenomeno


    public function testDelete()
    {
    $this->delete('/api/agendas/riskvariables/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }
     * */
}
