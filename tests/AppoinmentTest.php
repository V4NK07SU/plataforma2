<?php

class AppoinmentTest extends TestCase
{
    /**
     * testCreateUserStore
     *
     * prueba para crear un usuario
     *
     * JSON
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
     * testCreateAgendaStore
     *
     * prueba para crear datos en agenda
     *  */

    /**
     *
     * testStore
     *
     * prueba para crear un servicio
     */

    public function testServiceStore()
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
     * testStore
     *
     * prueba para crear un periodo
     */

    public function testPeroidStore()
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
     * prueba para crear un horario
     */

    public function testStore()
    {
        $this->post('/api/agendas/schedules', [
            'hora_id' => 1,
            'dia_id'  => 1,
        ])
            ->seeJson([
                'message' => 'el horario se han ingresado con exito',
            ]);
    }

    public function testCreateAgendaStore()
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
     * testCreateRiskVariableStore
     *
     * prueba para crear datos en los riesgos
     * */

    public function testCreateRiskVariableStore()
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
     * testStore
     *
     * prueba para crear una cita
     */

    public function testAppoinmentStore()
    {
        $this->post('/api/agendas/appoinments', [
            'user_id'          => 1,
            'agenda_id'        => 1,
            'reason'           => 'hola a otodos2',
            'accepted_at'      => '2000-01-01 00:00:00',
            'start_at'         => '2000-01-01 00:00:00',
            'ends_at'          => '2000-01-01 00:00:00',
            'accomplished_at'  => '2000-01-01 00:00:00',
            'observations'     => 'hola esto es una observacion',
            'risk_variable_id' => 1,
            'risk_value'       => 'cancelada',
            'canceled_by'      => 1,
        ])
            ->seeJson([
                'message' => 'la cita esta lista']);
    }

    /**
     *
     * testIndex
     *
     * prueba a mostrar una cita
     */

    public function testIndex()
    {
        $this->get('/api/agendas/appoinments')
            ->seeJson([
                'user_id'          => 1,
                'agenda_id'        => 1,
                'reason'           => 'hola a otodos2',
                'accepted_at'      => '2000-01-01 00:00:00',
                'start_at'         => '2000-01-01 00:00:00',
                'ends_at'          => '2000-01-01 00:00:00',
                'accomplished_at'  => '2000-01-01 00:00:00',
                'observations'     => 'hola esto es una observacion',
                'risk_variable_id' => 1,
                'risk_value'       => 'cancelada',
                'canceled_by'      => 1,
            ]);
    }

    /**
     *
     * testUpdate
     *
     * prueba para actualizar una cita
     */

    public function testUpdate()
    {
        $this->put('/api/agendas/appoinments/1', [
            'user_id'          => 1,
            'agenda_id'        => 1,
            'reason'           => 'hola a todos esto es un update',
            'accepted_at'      => '2000-01-01 00:00:00',
            'start_at'         => '2000-01-01 00:00:00',
            'ends_at'          => '2000-01-01 00:00:00',
            'accomplished_at'  => '2000-01-01 00:00:00',
            'observations'     => 'hola esto es una observacion de update',
            'risk_variable_id' => 1,
            'risk_value'       => 'cancelada',
            'canceled_by'      => 1,
        ])
            ->seeJson([
                'message' => 'se actualizo con exito',
            ]);
    }

    /**
     *
     * testShow
     *
     * prueba a mostrar una cita
     */

    public function testShow()
    {
        $this->get('/api/agendas/appoinments/1')
            ->seeJson([
                'user_id'          => 1,
                'agenda_id'        => 1,
                'reason'           => 'hola a todos esto es un update',
                'accepted_at'      => '2000-01-01 00:00:00',
                'start_at'         => '2000-01-01 00:00:00',
                'ends_at'          => '2000-01-01 00:00:00',
                'accomplished_at'  => '2000-01-01 00:00:00',
                'observations'     => 'hola esto es una observacion de update',
                'risk_variable_id' => 1,
                'risk_value'       => 'cancelada',
                'canceled_by'      => 1,
            ]);
    }

    /**
     *
     * testDelete
     *
     * prueba para eliminar una cita


    public function testDelete()
    {
    $this->delete('/api/agendas/appoinments/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }

     * */
}
