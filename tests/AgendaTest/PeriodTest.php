<?php

class PeriodTest extends TestCase
{
    /**
     *
     * testStore
     *
     * prueba para crear un periodo
     */

    public function testStore()
    {
        $this->post('/api/agendas/periods', [
            'description' => 'example1',
            'start_at'    => '2000-01-01 00:00:00',
            'ends_at'     => '2000-01-01 00:00:00',
        ])
            ->seeJson([
                'message' => 'el periodo se han ingresado con exito',
            ]);
    }

    /**
     *
     * testIndex
     *
     * prueba a mostrar un periodo
     */

    public function testIndex()
    {
        $this->get('/api/agendas/periods')
            ->seeJson([
                'description' => 'example1',
                'start_at'    => '2000-01-01 00:00:00',
                'ends_at'     => '2000-01-01 00:00:00',
            ]);
    }

    /**
     *
     * testUpdate
     *
     * prueba para actualizar un periodo
     */

    public function testUpdate()
    {
        $this->put('/api/agendas/periods/1', [
            'description' => 'exampleupdTEupdate',
            'start_at'    => '2002-01-01 00:00:00',
            'ends_at'     => '2002-01-01 00:00:00',
        ])
            ->seeJson([
                'message' => 'se actualizo con exito',
            ]);
    }

    /**
     *
     * testShow
     *
     * prueba para mostrar un periodo
     */

    public function testShow()
    {
        $this->get('/api/agendas/periods/1')
            ->seeJson([
                'description' => 'exampleupdTEupdate',
                'start_at'    => '2002-01-01 00:00:00',
                'ends_at'     => '2002-01-01 00:00:00',
            ]);
    }

    /**
     *
     * testDelete
     *
     * prueba para eliminar un periodo


    public function testDelete()
    {
    $this->delete('/api/agendas/periods/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }
     * */
}
