<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Evaluation\Http\Requests\EvaluationCompetencyAnswerCreateRequests;
use App\Modules\Evaluation\Models\EvaluationCompetencyAnswer;
use Illuminate\Http\Request;

/**
 * @resource EvaluationCompetencyAnswerController
 *
 * Recurso respuesta de competencia
 *
 * @author David Felipe Bustos <david_bustos17@hotmail.com>
 *
 */

class EvaluationCompetencyAnswerController extends Controller
{
    /**
     * index
     *
     * lista los datos de la tabla evaluation_competency_answers
     *
     * @return Response()
     */

    public function index()
    {

        $evaluationcompetencyanswer = EvaluationCompetencyAnswer::paginate(10);
        return $evaluationcompetencyanswer;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * guarda los datos en la tabla evaluation_competency_answers
     *
     * @param   Requests $request
     *
     * @return  JSON Response()
     */

    public function store(EvaluationCompetencyAnswerCreateRequests $request)
    {

        $evaluationcompetencyanswer = new EvaluationCompetencyAnswer();
        $evaluationcompetencyanswer->create($request->all());

        return response([
            'message' => 'la respuesta de la competencia fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra los datos de la tabla evaluation_competency_answers
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $evaluationcompetencyanswer = EvaluationCompetencyAnswer::findOrFail($id);

        return $evaluationcompetencyanswer;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la tabla evaluation_competency_answers.
     *
     * @param  Requests  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(EvaluationCompetencyAnswerCreateRequests $request, $id)
    {
        $evaluationcompetencyanswer = EvaluationCompetencyAnswer::findOrFail($id);
        $evaluationcompetencyanswer->update($request->all());

        if ($evaluationcompetencyanswer) {
            return response([
                'message' => 'La respuesta de competencia fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos en la tabla evaluation_competency_answers.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $evaluationcompetencyanswer = EvaluationCompetencyAnswer::destroy($id);

        if ($evaluationcompetencyanswer) {

            return response([
                'message' => 'el Respuesta de compromiso eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
