<?php

use App\Modules\Evaluation\Models\EvaluationUserPosition;

class EvaluationScheduleTest extends TestCase
{

    /**
     * PivotTableEvaluationUserPosition
     *
     * prueba para crear una evaluacion.(Relacion)
     *
     * JSON .
     */

    public function testEvaluationLevelStore()
    {
        $this->post('/api/evaluations/levels', [
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'El nivel de evaluacion fue creado con exito',
            ]);
    }

    /**
     * testEvaluationStore
     *
     * prueba para crear una evaluacion. (Relacion)
     *
     * JSON .
     */

    public function testEvaluationDependencyStore()
    {
        $this->post('/api/evaluations/dependencies', [
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'Dependencia de evaluacion fue creada con exito',
            ]);
    }

    /**
     * testEvaluationStore
     *
     * prueba para crear una evaluacion(Relacion).
     *
     * JSON .
     */

    public function testEvaluationPositionStore()
    {
        $this->post('/api/evaluations/positions', [
            'title'         => 'example',
            'description'   => 'example',
            'dependency_id' => 1,
            'level_id'      => 1,
        ])
            ->seeJson([
                'message' => 'Posicion de evaluacion fue creada con exito',
            ]);
    }

    /**
     * testPollUserStore
     *
     * prueba para crear un usuario (relacion)
     *
     * JSON
     */

    public function testPollUserStore()
    {
        $this->post('/api/users/register', [
            'email'    => 'example@mail.com',
            'password' => '123456',
        ])
            ->seeJson([
                'message' => 'el usuario  se ha ingresado con exito',
            ]);
    }

    /**
     * testEvaluationStore
     *
     * prueba para crear una evaluacion. (Relacion)
     *
     * JSON .
     */

    public function testEvaluationDependencyStoree()
    {
        $this->post('/api/evaluations/dependencies', [
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'Dependencia de evaluacion fue creada con exito',
            ]);
    }

    /**
     * testEvaluationStore
     *
     * prueba para crear el nivel de una evaluacion. (Relacion)
     *
     * JSON.
     */

    public function testEvaluationLevelStoree()
    {
        $this->post('/api/evaluations/levels', [
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'El nivel de evaluacion fue creado con exito',
            ]);
    }

    /**
     * testEvaluationStore
     *
     * prueba para crear una evaluacion.(Relacion)
     *
     * JSON .
     */

    public function testEvaluationPositionStoree()
    {
        $this->post('/api/evaluations/positions', [
            'title'         => 'example',
            'description'   => 'example',
            'dependency_id' => 1,
            'level_id'      => 1,
        ])
            ->seeJson([
                'message' => 'Posicion de evaluacion fue creada con exito',
            ]);
    }

    /**
     *
     * testEvaluationUserPositionStore
     *
     * prueba para crear una hora(Relacion)
     */

    public function testEvaluationUserPositionStore()
    {
        $this->post('/api/evaluations/user/position', [
            'user_id'     => 1,
            'position_id' => 1,
            'boss_id'     => 1,
        ])
            ->seeJson([
                'message' => 'creado con exito',
            ]);
    }

    /**
     *
     * testStore
     *
     * prueba para crear una hora(Relacion)
     */

    public function testEvaluationGlobalStore()
    {
        $this->post('/api/evaluations/global', [
            'period_stars'      => '2000-01-01 00:00:00',
            'period_ends'       => '2000-01-01 00:00:00',
            'commitments_stars' => '2000-01-01 00:00:00',
            'commitments_ends'  => '2000-01-01 00:00:00',
            'evaluation_stars'  => '2000-01-01 00:00:00',
            'evaluation_ends'   => '2000-01-01 00:00:00',
            'type_id'           => 1,
        ])
            ->seeJson([
                'message' => 'La evaluacion global fue creada con exito',
            ]);
    }

    /**
     *
     * testStore
     *
     * prueba para crear una hora.
     */

    public function testEvaluationScheduleStore()
    {
        $this->post('/api/evaluations/schedule', [
            'evaluation_id'           => 1,
            'evaluated_id'            => 1,
            'evaluator_id'            => 1,
            'commitments_acomplished' => 12345,
            'commitments_at'          => '2000-01-01 00:00:00',
            'evaluation_acomplished'  => 12345,
            'evaluation_at'           => '2000-01-01 00:00:00',
        ])
            ->seeJson([
                'message' => 'El horario de evaluacion fue creada con exito',
            ]);
    }

    /**
     * testPollTypeIndex
     *
     * prueba a mostrar las evaluaciones
     *
     * JSON
     */

    public function testEvaluationScheduleIndex()
    {
        $this->get('/api/evaluations/schedule')
            ->seeJson([
                'commitments_acomplished' => 12345,
                'commitments_at'          => '2000-01-01 00:00:00',
                'evaluation_acomplished'  => 12345,
                'evaluation_at'           => '2000-01-01 00:00:00',
            ]);
    }

    /**
     * testPollTypeUpdate
     *
     * prueba para actualizar un tipo de encuesta
     *
     * JSON
     */

    public function testEvaluationRollUpdate()
    {
        $this->put('/api/evaluations/schedule/1', [
            'commitments_acomplished' => 54321,
            'commitments_at'          => '2000-01-04 00:00:04',
            'evaluation_acomplished'  => 54321,
            'evaluation_at'           => '2000-01-04 00:00:04',
        ])
            ->seeJson([
                'message' => 'El horario de evaluacion fue actualizada con exito',
            ]);
    }

    /**
     * testEvaluationFunctionShow
     *
     * prueba a mostrar unas determinada funcion de evaluacion.
     *
     * JSON
     */

    public function testEvaluationRollShow()
    {
        $this->get('/api/evaluations/schedule/1')
            ->seeJson([
                'commitments_acomplished' => 54321,
                'commitments_at'          => '2000-01-04 00:00:04',
                'evaluation_acomplished'  => 54321,
                'evaluation_at'           => '2000-01-04 00:00:04',
            ]);
    }

}
