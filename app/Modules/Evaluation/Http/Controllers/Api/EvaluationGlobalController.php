<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Evaluation\Http\Requests\EvaluationGlobalCreateRequests;
use App\Modules\Evaluation\Models\EvaluationGlobal;
use Illuminate\Http\Request;

/**
 * @resource EvaluationGlobalController
 *
 * Recurso para tener la fecha y hora de creacion de las tablas 
 *
 * @author David Felipe Bustos <david_bustos17@hotmail.com>
 *
 */

class EvaluationGlobalController extends Controller
{
    /**
     * index
     *
     * lista los datos de la tabla evaluation_global
     *
     * @return Response()
     */

    public function index()
    {
  
        $evaluationglobal = EvaluationGlobal::paginate(10);
        return $evaluationglobal;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * guarda los registros en la tabla evaluation_global
     *
     * @param   Requests $request
     *
     * @return  JSON Response()
     */

    public function store(EvaluationGlobalCreateRequests $request)
    {

        $evaluationglobal = new EvaluationGlobal();
        $evaluationglobal->create($request->all());

        return response([
            'message' => 'La evaluacion global fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra los datos guardados en la tabla evaluation_global
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $evaluationglobal = EvaluationGlobal::findOrFail($id);

        return $evaluationglobal;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la tabla evaluation_global.
     *
     * @param  Requests  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(EvaluationGlobalCreateRequests $request, $id)
    {
        $evaluationglobal = EvaluationGlobal::findOrFail($id);
        $evaluationglobal->update($request->all());

        if ($evaluationglobal) {
            return response([
                'message' => 'La evaluacion global fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la tabla evaluation_global.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $evaluationglobal = EvaluationGlobal::destroy($id);

        if ($evaluationglobal) {

            return response([
                'message' => 'La evaluacion global se ha eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
