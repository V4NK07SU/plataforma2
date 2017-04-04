<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Evaluation\Http\Requests\EvaluationCommitmentsResponsesCreateRequests;
use App\Modules\Evaluation\Models\EvaluationCommitmentResponse;
use Illuminate\Http\Request;

/**
 * @resource EvaluationCommitmentResponseController
 *
 * Recurso respuestas del compromiso
 *
 *@author David Felipe Bustos <david_bustos17@hotmail.com>
 */

class EvaluationCommitmentResponseController extends Controller
{
    /**
     * index
     *
     * Retorna una lista con los datos de evaluation_commitments_responses
     *
     * @return Response()
     */

    public function index()
    {

        $evaluationcommitmentresponse = EvaluationCommitmentResponse::paginate(10);
        return $evaluationcommitmentresponse;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * guarda datos en la tabla evaluation_commitments_responses
     *
     * @param   Requests $request
     *
     * @return  JSON Response()
     */

    public function store(EvaluationCommitmentsResponsesCreateRequests $request)
    {

        $evaluationcommitmentresponse = new EvaluationCommitmentResponse();
        $evaluationcommitmentresponse->create($request->all());

        return response([
            'message' => 'las respuesta del compromiso fue creado con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra los datos de la tabla evaluation_commitments_responses
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $evaluationcommitmentresponse = EvaluationCommitmentResponse::findOrFail($id);

        return $evaluationcommitmentresponse;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos la tabla evaluation_commitments_responses.
     *
     * @param  Requests  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(EvaluationCommitmentsResponsesCreateRequests $request, $id)
    {
        $evaluationcommitmentresponse = EvaluationCommitmentResponse::findOrFail($id);
        $evaluationcommitmentresponse->update($request->all());

        if ($evaluationcommitmentresponse) {
            return response([
                'message' => 'La respuesta de compromiso fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos en la tabla evaluation_commitments_responses.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $evaluationcommitmentresponse = EvaluationCommitmentResponse::destroy($id);

        if ($evaluationcommitmentresponse) {

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
