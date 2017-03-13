<?php

class CollaboratorGoalTest extends TestCase
{

    /**
     *
     * testCreateUserStore
     *
     * prueba para crear datos de usuario
     */

    public function testCreateUserStore()
    {
        $this->post('/api/agendas/users', [
            'first_name' => 'example',
            'last_name'  => 'example',
            'email'      => 'pipe@gmail.com',
            'password'   => 'contra',
        ])
            ->seeJson([
                'message' => 'el usuario  se ha ingresado con exito',
            ]);
    }

    /**
     *
     * testCreateServiceStore
     *
     * prueba para crear datos en servicios
     */

    public function testCreateServiceStore()
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
     * testCreatePeriodStore
     *
     * prueba para crear datos de period
     */

    public function testCreatePeriodStore()
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
     * testStore
     *
     * prueba para crear una meta
     */

    public function testStore()
    {
        $this->post('/api/agendas/collaborators', [

            'user_id'     => 1,
            'service_id'  => 1,
            'period_id'   => 1,
            'fullfilment' => 25,
            'efficacy'    => 40,

        ])
            ->seeJson([
                'message' => ' se guardado con exito ',
            ]);
    }

    /**
     *
     * testIndex
     *
     * prueba a mostrar una meta de colaboracion 
     */

    public function testIndex()
    {
        $this->get('/api/agendas/collaborators')
            ->seeJson([
                'user_id'     => 1,
                'service_id'  => 1,
                'period_id'   => 1,
                'fullfilment' => 25,
                'efficacy'    => 40,
            ]);
    }

    /**
     *
     * testUpdate
     *
     * prueba para actualizar una meta de colaboracion 
     */

    public function testUpdate()
    {
        $this->put('/api/agendas/collaborators/1', [
            'user_id'     => 1,
            'service_id'  => 1,
            'period_id'   => 1,
            'fullfilment' => 444,
            'efficacy'    => 444,
        ])
            ->seeJson([
                'message' => 'se actualizo con exito',
            ]);
    }

    /**
     *
     * testShow
     *
     * prueba a mostrar una meta de colaboracion 
     */

    public function testShow()
    {
        $this->get('/api/agendas/collaborators/1')
            ->seeJson([
                'user_id'     => 1,
                'service_id'  => 1,
                'period_id'   => 1,
                'fullfilment' => 444,
                'efficacy'    => 444,
            ]);
    }

    /**
     *
     * testDelete
     *
     * prueba para eliminar una meta de colaboracion 


    public function testDelete()
    {
    $this->delete('/api/agendas/collaborators/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }

     * */
}
