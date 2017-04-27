<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Evaluation\Http\Requests\EvaluationFunctionCreateRequests;
use App\Modules\Evaluation\Models\EvaluationFunction;
use Illuminate\Http\Request;

/**
 * @resource EvaluationFunctionController
 *
 * Recurso tabla funcion 
 *
 * @author David Felipe Bustos <david_bustos17@hotmail.com>
 *
 */

class EvaluationFunctionController extends Controller
{
    /**
     * index
     *
     * lista los datos de la tabla evaluation_functions
     *
     * @return Response()
     */

    public function index()
    {

        $evaluationfunction = EvaluationFunction::paginate(10);
        return $evaluationfunction;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * guarda los datos en la tabla evaluation_functions
     *
     * @param   Requests $request
     *
     * @return  JSON Response()
     */

    public function store(EvaluationFunctionCreateRequests $request)
    {

        $evaluationfunction = new EvaluationFunction();
        $evaluationfunction->create($request->all());

        return response([
            'message' => 'Funcion de evaluacion creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra los datos de la tabla evaluation_functions
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $evaluationfunction = EvaluationFunction::findOrFail($id);

        return $evaluationfunction;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la tabla evaluation_functions.
     *
     * @param  Requests  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(EvaluationFunctionCreateRequests $request, $id)
    {
        $evaluationfunction = EvaluationFunction::findOrFail($id);
        $evaluationfunction->update($request->all());

        if ($evaluationfunction) {
            return response([
                'message' => 'La funcion de evaluacion fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos en la tabla evaluation_functions.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $evaluationfunction = EvaluationFunction::destroy($id);

        if ($evaluationfunction) {

            return response([
                'message' => 'la funcion de evaluacion fue eliminada con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
