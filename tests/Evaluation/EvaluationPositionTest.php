<?php

/**
 * @resource EvaluationPositionController
 *
 * Recurso compromiso
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 *
 */

class EvaluationPositionTest extends TestCase
{

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
     * prueba para crear el nivel de una evaluacion. (Relacion)
     *
     * JSON.
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
     * prueba para crear una evaluacion.
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
     * testPollTypeIndex
     *
     * prueba a mostrar las evaluaciones
     *
     * JSON
     */

    public function testEvaluationPositionIndex()
    {
        $this->get('/api/evaluations/positions')
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

    public function testEvaluationPositionUpdate()
    {
        $this->put('/api/evaluations/positions/1', [
            'title'       => 'exampleUpdatee',
            'description' => 'exampleUpdatee',
        ])
            ->seeJson([
                'message' => 'Posicion de evaluacion fue actualizada con exito',
            ]);
    }

    /**
     * testEvaluationFunctionShow
     *
     * prueba a mostrar unas determinada funcion de evaluacion.
     *
     * JSON
     */

    public function testEvaluationPositionShow()
    {
        $this->get('/api/evaluations/positions/1')
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


    public function testEvaluationFunctionDelete()
    {
    $this->delete('/api/evaluations/positions/1')
    ->seeJson([
    'message' => 'Posicion de evaluacion eliminada con exito',
    ]);
     */

}
