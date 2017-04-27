<?php

class DiaTest extends TestCase
{
    /**
     *
     * testStore
     *
     * prueba para crear un dia
     */

    public function testStore()
    {
        $this->post('/api/agendas/dias', [
            'title' => 'sabado',
        ])
            ->seeJson([
                'message' => 'los dias se han ingresado con exito',
            ]);
    }

    /**
     *
     * testIndex
     *
     * prueba a mostrar los dias
     */

    public function testIndex()
    {
        $this->get('/api/agendas/dias')
            ->seeJson([
                'title' => 'sabado',
            ]);
    }

    /**
     *
     * testUpdate
     *
     * prueba para actualizar un tipo de encuesta
     */

    public function testUpdate()
    {
        $this->put('/api/agendas/dias/1', [
            'title' => 'domingo',
        ])
            ->seeJson([
                'message' => 'se actualizo con exito',
            ]);
    }
    /**
     *
     * testShow
     *
     * prueba a mostrar los dias
     */

    public function testShow()
    {
        $this->get('/api/agendas/dias/1')
            ->seeJson([
                'title' => 'domingo',
            ]);
    }

    /**
     *
     * testDelete
     *
     * prueba para eliminar un  dia


    public function testDelete()
    {
    $this->delete('/api/agendas/dias/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }
     * */
}
