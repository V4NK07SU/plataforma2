<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Evaluation\Http\Requests\EvaluationCompetenciesResponsesCreateRequests;
use App\Modules\Evaluation\Models\EvaluationCompetencyResponse;
use Illuminate\Http\Request;

/**
 * @resource EvaluationCompetencyResponseController
 *
 * Recurso respuesta de competencia
 *
 * @author David Felipe Bustos <david_bustos17@hotmail.com>
 *
 */

class EvaluationCompetencyResponseController extends Controller
{
    /**
     * index
     *
     * lista los datos de la tabla evaluation_competencies_responses
     *
     * @return Response()
     */

    public function index()
    {
        $evaluationcompetencyanswer = EvaluationCompetencyResponse::paginate(10);
        return $evaluationcompetencyanswer;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * guarda los datos en la tabla evaluation_competencies_responses
     *
     * @param   Requests $request
     *
     * @return  JSON Response()
     */

    public function store(EvaluationCompetenciesResponsesCreateRequests $request)
    {

        $evaluationcompetencyanswer = new EvaluationCompetencyResponse();
        $evaluationcompetencyanswer->create($request->all());

        return response([
            'message' => 'la respuesta de la competencia fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra los datos de la tabla evaluation_competencies_responses
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $evaluationcompetencyanswer = EvaluationCompetencyResponse::findOrFail($id);

        return $evaluationcompetencyanswer;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la tabla evaluation_competencies_responses.
     *
     * @param  Requests  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(EvaluationCompetenciesResponsesCreateRequests $request, $id)
    {
        $evaluationcompetencyanswer = EvaluationCompetencyResponse::findOrFail($id);
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
     * Remueve el campo especificado de la base de datos en la tabla evaluation_competencies_responses.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $evaluationcompetencyanswer = EvaluationCompetencyResponse::destroy($id);

        if ($evaluationcompetencyanswer) {

            return response([
                'message' => 'el Respuesta de competencia se ha eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
