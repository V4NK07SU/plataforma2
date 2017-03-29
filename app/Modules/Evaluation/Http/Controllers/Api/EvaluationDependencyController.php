<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Evaluation\Models\EvaluationDependency;
use Illuminate\Http\Request;
use App\Modules\Evaluation\Http\Requests\EvaluationDependeciesCreateRequests;


/**
 * @resource EvaluationDependencyController
 *
 * Recurso compromiso
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 *
 */

class EvaluationDependencyController extends Controller
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

        $evaluationdependency = EvaluationDependency::paginate(10);
        return $evaluationdependency;
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

    public function store(EvaluationDependeciesCreateRequests $request)
    {

        $evaluationdependency = new EvaluationDependency();
        $evaluationdependency->create($request->all());

        return response([
            'message' => 'Dependencia de evaluacion fue creada con exito',
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
        $evaluationdependency = EvaluationDependency::findOrFail($id);

        return $evaluationdependency;
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

    public function update(EvaluationDependeciesCreateRequests $request, $id)
    {
        $evaluationdependency = EvaluationDependency::findOrFail($id);
        $evaluationdependency->update($request->all());

        if ($evaluationdependency) {
            return response([
                'message' => 'Dependencia de evaluacion actualizada con exito',
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
        $evaluationdependency = EvaluationDependency::destroy($id);

        if ($evaluationdependency) {

            return response([
                'message' => 'Dependencia de evaluacion se ha eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
