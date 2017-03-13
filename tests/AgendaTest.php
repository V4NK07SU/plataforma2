<?php

class AgendaTest extends TestCase
{
    /**
     *
     * testCreateUserStore
     *
     * prueba para crear datos en uso
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
     * testCreateScheduleStore
     *
     * prueba para crear un  horario
     */

    public function testCreateScheduleStore()
    {
        $this->post('/api/agendas/schedules', [
            'hora_id' => 1,
            'dia_id'  => 1,
        ])
            ->seeJson([
                'message' => 'el horario se han ingresado con exito',
            ]);
    }

    /**
     *
     * testStore
     *
     * prueba para crear una agenda
     */

    public function testStore()
    {
        $this->post('/api/agendas', [
            'user_id'     => 1,
            'service_id'  => 1,
            'period_id'   => 1,
            'schedule_id' => 1,
            'observacion' => 'esto es una observacion553',
        ])
            ->seeJson([
                'message' => 'la agenda esta lista',
            ]);
    }

    /**
     *
     * testIndex
     *
     * prueba a mostrar una agenda
     */

    public function testIndex()
    {
        $this->get('/api/agendas')
            ->seeJson([
                'user_id'     => 1,
                'service_id'  => 1,
                'period_id'   => 1,
                'schedule_id' => 1,
                'observacion' => 'esto es una observacion553',
            ]);
    }

    /**
     *
     * testUpdate
     *
     * prueba para actualizar una agenda
     */

    public function testUpdate()
    {
        $this->put('/api/agendas/1', [
            'user_id'     => 1,
            'service_id'  => 1,
            'period_id'   => 1,
            'schedule_id' => 1,
            'observacion' => 'esto es una observacion prueba',
        ])
            ->seeJson([
                'message' => 'se actualizo con exito',
            ]);
    }

    /**
     *
     * testShow
     *
     * prueba para mostrar una agenda
     */

    public function testShow()
    {
        $this->get('/api/agendas/1')
            ->seeJson([
                'user_id'     => 1,
                'service_id'  => 1,
                'period_id'   => 1,
                'schedule_id' => 1,
                'observacion' => 'esto es una observacion prueba',
            ]);
    }

    /**
     *
     * testDelete
     *
     * prueba para eliminar una agenda

    public function testDelete()
    {
    $this->delete('/api/agendas/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }

     * */
}
