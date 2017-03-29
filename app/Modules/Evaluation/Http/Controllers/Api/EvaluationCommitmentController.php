<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Modules\Evaluation\Models\EvaluationCommitment;
use App\Modules\Evaluation\Http\Requests\EvaluationCommitmentCreateRequest;



/**
 * @resource EvaluationCommitmentController
 *
 * Recurso compromiso
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 *
 */

class EvaluationCommitmentController extends Controller
{
    /**
     * index
     *
     * Retorna los compromisos en formato JSON
     *
     * @return Response()
     */

    public function index()
    {

        $evaluationcommitment = EvaluationCommitment::paginate(10);
        return $evaluationcommitment;
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

    public function store(EvaluationCommitmentCreateRequest $request)
    {

        $evaluationcommitment = new EvaluationCommitment();
        $evaluationcommitment->create($request->all());

        return response([
            'message' => 'el compromiso fue creado con exito',
        ], 200);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla compromiso
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $evaluationcommitment = EvaluationCommitment::findOrFail($id);

        return $evaluationcommitment;
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
     * @param  PollAnswerCreateRequests  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(EvaluationCommitmentCreateRequest $request, $id)
    {
        $evaluationcommitment = EvaluationCommitment::findOrFail($id);
        $evaluationcommitment->update($request->all());

        if ($evaluationcommitment) {
            return response([
                'message' => 'EL compromiso de evaluacion fue actualizado con exito',
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
        $evaluationcommitment = EvaluationCommitment::destroy($id);

        if ($evaluationcommitment) {

            return response([
                'message' => 'el compromiso eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
