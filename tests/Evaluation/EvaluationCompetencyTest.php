<?php

class EvaluationCompetencyTest extends TestCase
{
    /**
     * testEvaluationStore
     *
     * prueba para crear una evaluacion.
     *
     * JSON .
     */

    public function testEvaluationCompetenciesStore()
    {
        $this->post('/api/evaluations/competencies', [
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'la competencia fue creada con exito',
            ]);
    }

    /**
     * testPollTypeIndex
     *
     * prueba a mostrar las evaluaciones
     *
     * JSON
     */

    public function testEvaluationCompetenciesIndex()
    {
        $this->get('/api/evaluations/competencies')
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

    public function testEvaluationCompetenciesUpdate()
    {
        $this->put('/api/evaluations/competencies/1', [
            'title'       => 'exampleUpdatee',
            'description' => 'exampleUpdatee',
        ])
            ->seeJson([
                'message' => 'la competencia fue actualizada con exito',
            ]);
    }

    /**
     * testEvaluationFunctionShow
     *
     * prueba a mostrar unas determinada funcion de evaluacion.
     *
     * JSON
     */

    public function testEvaluationCompetenciesShow()
    {
        $this->get('/api/evaluations/competencies/1')
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


    public function testEvaluationCompetenciesDelete()
    {
    $this->delete('/api/evaluations/competencies/1')
    ->seeJson([
    'message' => 'la competencia fue eliminado con exito',
    ]);
     */
}
