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
 * Recurso compromiso
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 *
 */

class EvaluationFunctionController extends Controller
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
     * Retorna en formato JSON una respuesta para guardar las respuestas de las encustas
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
     * Retorna un campo determinado de la tabla respuesta de compromiso
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
     * Actualiza los campos especificados en la base de datos.
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
     * Remueve el campo especificado de la base de datos.
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
