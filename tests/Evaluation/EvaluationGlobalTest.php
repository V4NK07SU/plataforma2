<?php

class EvaluationGlobalTest extends TestCase
{

    /**
     *
     * testStore
     *
     * prueba para crear una hora
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
     * testIndex
     *
     * prueba a mostrar una hora
     */

    public function testEvaluationGlobalIndex()
    {
        $this->get('/api/evaluations/global')
            ->seeJson([
                'period_stars'      => '2000-01-01 00:00:00',
                'period_ends'       => '2000-01-01 00:00:00',
                'commitments_stars' => '2000-01-01 00:00:00',
                'commitments_ends'  => '2000-01-01 00:00:00',
                'evaluation_stars'  => '2000-01-01 00:00:00',
                'evaluation_ends'   => '2000-01-01 00:00:00',
                'type_id'           => 1,
            ]);
    }

    /**
     *
     * testUpdate
     *
     * prueba para actualizar una hora
     */

    public function testEvaluationGlobalUpdate()
    {
        $this->put('/api/evaluations/global/1', [
            'period_stars'      => '2000-01-01 00:00:01',
            'period_ends'       => '2000-01-01 00:00:01',
            'commitments_stars' => '2000-01-01 00:00:01',
            'commitments_ends'  => '2000-01-01 00:00:01',
            'evaluation_stars'  => '2000-01-01 00:00:01',
            'evaluation_ends'   => '2000-01-01 00:00:01',
        ])
            ->seeJson([
                'message' => 'La evaluacion global fue actualizada con exito',
            ]);
    }

    /**
     *
     * testShow
     *
     * prueba para mostrar una hora
     */

    public function testEvaluationGlobalShow()
    {
        $this->get('/api/evaluations/global/1')
            ->seeJson([
                'period_stars'      => '2000-01-01 00:00:01',
                'period_ends'       => '2000-01-01 00:00:01',
                'commitments_stars' => '2000-01-01 00:00:01',
                'commitments_ends'  => '2000-01-01 00:00:01',
                'evaluation_stars'  => '2000-01-01 00:00:01',
                'evaluation_ends'   => '2000-01-01 00:00:01',
            ]);
    }
    /**

     *
     * testDelete
     *
     * prueba para eliminar una hora


    public function testEvaluationGlobalDelete()
    {
    $this->delete('/api/evaluations/global/1')
    ->seeJson([
    'message' => 'La evaluacion global se ha eliminado con exito',
    ]);
    }

     * */

}
