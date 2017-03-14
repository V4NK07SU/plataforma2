<?php

class ServiceTest extends TestCase
{
    /**
     *
     * testStore
     *
     * prueba para crear un servicio
     */

    public function testStore()
    {
        $this->post('/api/agendas/services', [
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'los servicios se han ingresado con exito',
            ]);
    }

    /**
     *
     * testIndex
     *
     * prueba a mostrar un servicio
     */

    public function testIndex()
    {
        $this->get('/api/agendas/services')
            ->seeJson([
                'title'       => 'example',
                'description' => 'example',
            ]);
    }

    /**
     *
     * testUpdate
     *
     * prueba para actualizar un servicio
     */

    public function testUpdate()
    {
        $this->put('/api/agendas/services/1', [
            'title'       => 'exampleUpdatee123',
            'description' => 'exampleUpdateeq23',
        ])
            ->seeJson([
                'message' => 'se actualizo con exito',
            ]);
    }

    /**
     *
     * testShow
     *
     * prueba a mostrar un servicio
     */

    public function testShow()
    {
        $this->get('/api/agendas/services/1')
            ->seeJson([
                'title'       => 'exampleUpdatee123',
                'description' => 'exampleUpdateeq23',
            ]);
    }

    /**
     *
     * testDelete
     *
     * prueba para eliminar un servicio



    public function testDelete()
    {
    $this->delete('/api/agendas/services/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }
     * */

}
