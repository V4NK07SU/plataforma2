<?php

class EvaluationDependencyTest extends TestCase
{
    /**
     * testEvaluationStore
     *
     * prueba para crear una evaluacion.
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
     * testPollTypeIndex
     *
     * prueba a mostrar las evaluaciones
     *
     * JSON
     */

    public function testEvaluationDependencyIndex()
    {
        $this->get('/api/evaluations/dependencies')
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

    public function testEvaluationDependencyUpdate()
    {
        $this->put('/api/evaluations/dependencies/1', [
            'title'       => 'exampleUpdatee',
            'description' => 'exampleUpdatee',
        ])
            ->seeJson([
                'message' => 'Dependencia de evaluacion actualizada con exito',
            ]);
    }

    /**
     * testEvaluationFunctionShow
     *
     * prueba a mostrar unas determinada funcion de evaluacion.
     *
     * JSON
     */

    public function testEvaluationDependencyShow()
    {
        $this->get('/api/evaluations/dependencies/1')
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


    public function testEvaluationDependencyDelete()
    {
    $this->delete('/api/evaluations/dependencies/1')
    ->seeJson([
    'message' => 'Dependencia de evaluacion se ha eliminado con exito',
    ]);
     */

}
