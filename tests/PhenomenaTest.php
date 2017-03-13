<?php

class PhenomenaTest extends TestCase
{
    /**
     *
     * testStore
     *
     * prueba para crear un fenomeno
     */

    public function testStore()
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
     * testIndex
     *
     * prueba a mostrar los fenomenos
     */

    public function testIndex()
    {
        $this->get('/api/agendas/phenomenas')
            ->seeJson([

                'title'       => 'example',
                'description' => 'example',
            ]);
    }

    /**
     *
     * testUpdate
     *
     * prueba para actualizar los fenomenos
     */

    public function testUpdate()
    {
        $this->put('/api/agendas/phenomenas/1', [
            'title'       => 'exampleupdate',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'se actualizo con exito',
            ]);
    }
    /**
     *
     * testShow
     *
     * prueba a mostrar  los fenomenos
     */

    public function testShow()
    {
        $this->get('/api/agendas/phenomenas/1')
            ->seeJson([

                'title'       => 'exampleupdate',
                'description' => 'example',
            ]);
    }

    

    /**
     *
     * testDelete
     *
     * prueba para eliminar un fenomeno


    public function testDelete()
    {
    $this->delete('/agendas/phenomenas/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }

     * */
}
