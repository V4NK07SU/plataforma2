<?php

class EvaluationCompetencyAnswerTest extends TestCase
{

    /**
     * testEvaluationStore
     *
     * prueba para crear una evaluacion. (Relacion)
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
     * testEvaluationStore
     *
     * prueba para crear una evaluacion.
     *
     * JSON .
     */

    public function testEvaluationCompetenciesAnswerStore()
    {
        $this->post('/api/evaluations/competency/answers', [
            'description'   => 'example',
            'competency_id' => 1,
            'value'         => 1234,
        ])
            ->seeJson([
                'message' => 'la respuesta de la competencia fue creada con exito',
            ]);
    }

    /**
     * testPollTypeIndex
     *
     * prueba a mostrar las evaluaciones
     *
     * JSON
     */

    public function testEvaluationCompetenciesAnswerIndex()
    {
        $this->get('/api/evaluations/competency/answers')
            ->seeJson([
                'description'   => 'example',
                'competency_id' => 1,
                'value'         => 1234,
            ]);
    }

    /**
     * testPollTypeUpdate
     *
     * prueba para actualizar un tipo de encuesta
     *
     * JSON
     */

    public function testEvaluationCompetenciesAnswerUpdate()
    {
        $this->put('/api/evaluations/competency/answers/1', [
            'description' => 'exampleUpdatee',
            'value'       => 4321,
        ])
            ->seeJson([
                'message' => 'La respuesta de competencia fue actualizada con exito',
            ]);
    }

    /**
     * testEvaluationFunctionShow
     *
     * prueba a mostrar unas determinada funcion de evaluacion.
     *
     * JSON
     */

    public function testEvaluationCompetenciesAnswerShow()
    {
        $this->get('/api/evaluations/competency/answers/1')
            ->seeJson([
                'description' => 'exampleUpdatee',
                'value'       => 4321,
            ]);
    }

    /**
     * testPollTypeDelete
     *
     * prueba para eliminar una determinada funcion de evaluacion.
     *
     * JSON


    public function testEvaluationCompetenciesAnswerDelete()
    {
    $this->delete('/api/evaluations/competency/answers/1')
    ->seeJson([
    'message' => 'el Respuesta de compromiso eliminado con exito',
    ]);
     */
}
