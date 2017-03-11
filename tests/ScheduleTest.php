<?php

class ScheduleTest extends TestCase
{

    /**
     *
     * testCreateHoraStore
     *
     * prueba para crear datos en hora
     */

    public function testCreateHoraStore()
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
     * testCreateDiaStore
     *
     * prueba para crear datos en dia
     */

    public function testCreateDiaStore()
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

    /**
     *
     * testIndex
     *
     * prueba a mostrar el horario
     */

    public function testIndex()
    {
        $this->get('/api/agendas/schedules')
            ->seeJson([
                'hora_id' => 1,
                'dia_id'  => 1,
            ]);
    }

    /**
     *
     * testUpdate
     *
     * prueba para actualizar un horario
     */

    public function testUpdate()
    {
        $this->put('/api/agendas/schedules/1', [
            'hora_id' => 2,
            'dia_id'  => 2,
        ])
            ->seeJson([
                'message' => 'se actualizo con exito',
            ]);
    }

    /**
     *
     * testShow
     *
     * prueba a mostrar un horario
     */

    public function testShow()
    {
        $this->get('/api/agendas/schedules/1')
            ->seeJson([
                'hora_id' => 2,
                'dia_id'  => 2,
            ]);
    }

    /**
     *
     * testDelete
     *
     * prueba para eliminar un horario


    public function testDelete()
    {
    $this->delete('/api/agendas/schedules/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }
     * */
}
