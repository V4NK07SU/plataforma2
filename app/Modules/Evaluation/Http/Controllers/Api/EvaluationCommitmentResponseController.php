<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Modules\Evaluation\Models\EvaluationCommitmentResponse;
use App\Modules\Evaluation\Http\Requests\EvaluationCommitmentsResponsesCreateRequests;


/**
 * @resource EvaluationCommitmentResponseController
 *
 * Recurso compromiso
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 *
 */

class EvaluationCommitmentResponseController extends Controller
{
    /**
     * index
     *
     * Retorna las respuestas del compromiso en formato JSON
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
     * Retorna en formato JSON 
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
     * Retorna un campo determinado de la tabla respuesta de compromiso
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
     * Actualiza los campos especificados en la base de datos.
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
     * Remueve el campo especificado de la base de datos.
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
