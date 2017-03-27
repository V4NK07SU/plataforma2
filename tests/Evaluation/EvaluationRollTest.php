<?php

class EvaluationRollTest extends TestCase
{

    /**
     * testEvaluationStore
     *
     * prueba para crear una evaluacion.
     *
     * JSON .
     */

    public function testEvaluationRollStore()
    {
        $this->post('/api/evaluations/roles', [
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'El roll de evaluacion fue creada con exito',
            ]);
    }

    /**
     * testPollTypeIndex
     *
     * prueba a mostrar las evaluaciones
     *
     * JSON
     */

    public function testEvaluationRollIndex()
    {
        $this->get('/api/evaluations/roles')
            ->seeJson([
                'title'       => 'example',
                'description' => 'example',
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
        $this->put('/api/evaluations/roles/1', [
            'title'       => 'exampleUpdatee',
            'description' => 'exampleUpdatee',
        ])
            ->seeJson([
                'message' => 'El roll fue actualizada con exito',
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
        $this->get('/api/evaluations/roles/1')
            ->seeJson([
                'title'       => 'exampleUpdatee',
                'description' => 'exampleUpdatee',
            ]);
    }

    /**
     * testPollTypeDelete
     *
     * prueba para eliminar una determinada funcion de evaluacion.
     *
     * JSON


    public function testEvaluationRollDelete()
    {
    $this->delete('/api/evaluations/roles/1')
    ->seeJson([
    'message' => 'El roll se ha eliminado con exito',
    ]);
     */
}
