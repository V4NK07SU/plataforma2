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
 * Recurso dependencia 
 * @author David Felipe Bustos <david_bustos17@hotmail.com>
 *
 */

class EvaluationDependencyController extends Controller
{
    /**
     * index
     *
     * lista los datos de la tabla evaluation_dependencies
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
     * guarda los datos en la tabla evaluation_dependencies
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
     * muestra los datos de la tabla evaluation_dependencies
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
     * Actualiza los campos especificados en la tabla evaluation_dependencies.
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
     * Remueve el campo especificado de la base de datos en la tabla evaluation_dependencies.
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
