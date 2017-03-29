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
 * Recurso compromiso
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 *
 */

class EvaluationCompetencyResponseController extends Controller
{
    /**
     * index
     *
     * Retorna las respuestas de de competencia en formato JSON
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
     * Retorna en formato JSON la respuesta de la competencia
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
     * Retorna un campo determinado de la tabla respuesta de competencia
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
     * Actualiza los campos especificados en la base de datos.
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
     * Remueve el campo especificado de la base de datos.
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
