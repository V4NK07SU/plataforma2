<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Modules\Evaluation\Http\Requests\EvaluationPositionsCreateRequests;
use App\Modules\Evaluation\Models\EvaluationPosition;

/**
 * @resource EvaluationPositionController
 *
 * Recurso posicion 
 *
 * @author David Felipe Bustos <david_bustos17@hotmail.com>
 *
 */ 

class EvaluationPositionController extends Controller
{
    /**
     * index
     *
     * lista los datos de la tabla evaluation_positions
     *
     * @return Response()
     */

    public function index()
    {

        $evaluationposition = EvaluationPosition::paginate(10);
        return $evaluationposition;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * guarda los datos en la tabla evaluation_positions
     *
     * @param   Requests $request
     *
     * @return  JSON Response()
     */

    public function store(EvaluationPositionsCreateRequests $request)
    {

        $evaluationposition = new EvaluationPosition();
        $evaluationposition->create($request->all());

        return response([
            'message' => 'Posicion de evaluacion fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra los datos de la tabla evaluation_positions
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $evaluationposition = EvaluationPosition::findOrFail($id);

        return $evaluationposition;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la tabla evaluation_positions.
     *
     * @param  Requests  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(EvaluationPositionsCreateRequests $request, $id)
    {
        $evaluationposition = EvaluationPosition::findOrFail($id);
        $evaluationposition->update($request->all());

        if ($evaluationposition) {
            return response([
                'message' => 'Posicion de evaluacion fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos en la tabla evaluation_positions.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $evaluationposition = EvaluationPosition::destroy($id);

        if ($evaluationposition) {

            return response([
                'message' => 'Posicion de evaluacion eliminada con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
