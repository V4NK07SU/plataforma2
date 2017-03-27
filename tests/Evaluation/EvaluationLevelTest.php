<?php

/**
 * @resource PollTypeTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationLevelTest extends TestCase
{

    /**
     * testEvaluationStore
     *
     * prueba para crear una evaluacion.
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
     * testPollTypeIndex
     *
     * prueba a mostrar las evaluaciones
     *
     * JSON
     */

    public function testEvaluationLevelIndex()
    {
        $this->get('/api/evaluations/levels')
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

    public function testEvaluationLevelUpdate()
    {
        $this->put('/api/evaluations/levels/1', [
            'title'       => 'exampleUpdatee',
            'description' => 'exampleUpdatee',
        ])
            ->seeJson([
                'message' => 'El nivel de evaluacion fue actualizado con exito',
            ]);
    }

    /**
     * testEvaluationFunctionShow
     *
     * prueba a mostrar unas determinada funcion de evaluacion.
     *
     * JSON
     */

    public function testEvaluationLevelShow()
    {
        $this->get('/api/evaluations/levels/1')
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


    public function testEvaluationLevelDelete()
    {
    $this->delete('/api/evaluations/levels/1')
    ->seeJson([
    'message' => 'el nivel de evaluacion se ha eliminado con exito',
    ]);
     */

}
