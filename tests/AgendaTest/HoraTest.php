<?php

class HoraTest extends TestCase
{
    /**
     *
     * testStore
     *
     * prueba para crear una hora
     */

    public function testStore()
    {
        $this->post('/api/agendas/horas', [
            'ends_at'  => '2000-01-01 00:00:00',
            'start_at' => '2000-01-01 00:00:00',
        ])
            ->seeJson([
                'message' => 'las horas se han ingresado con exito',
            ]);
    }

    /**
     *
     * testIndex
     *
     * prueba a mostrar una hora
     */

    public function testIndex()
    {
        $this->get('/api/agendas/horas')
            ->seeJson([
                'ends_at'  => '2000-01-01 00:00:00',
                'start_at' => '2000-01-01 00:00:00',
            ]);
    }

    /**
     *
     * testUpdate
     *
     * prueba para actualizar una hora
     */

    public function testUpdate()
    {
        $this->put('/api/agendas/horas/1', [
            'ends_at'  => '2001-01-01 00:00:00',
            'start_at' => '2002-01-01 00:00:00',
        ])
            ->seeJson([
                'message' => 'se actualizo con exito',
            ]);
    }

    /**
     *
     * testShow
     *
     * prueba para mostrar una hora 
     */

    public function testShow()
    {
        $this->get('/api/agendas/horas/1')
            ->seeJson([
                'ends_at'  => '2001-01-01 00:00:00',
                'start_at' => '2002-01-01 00:00:00',
            ]);
    }
    /**

     *
     * testDelete
     *
     * prueba para eliminar una hora


    public function testDelete()
    {
    $this->delete('/api/agendas/horas/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }

     * */
}
