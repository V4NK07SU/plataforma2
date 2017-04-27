<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Evaluation\Http\Requests\EvaluationLevelsCreateRequests;
use App\Modules\Evaluation\Models\EvaluationLevel;
use Illuminate\Http\Request;

/**
 * @resource EvaluationLevelController
 *
 * Recurso mivel
 *
 * @author David Felipe Bustos <david_bustos17@hotmail.com>
 *
 */

class EvaluationLevelController extends Controller
{
    /**
     * index
     *
     * lista los datos de la tabla evaluation_levels
     *
     * @return Response()
     */

    public function index()
    {

        $evaluationlevel = EvaluationLevel::paginate(10);
        return $evaluationlevel;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * guarda los datos en la tabla evaluation_levels
     *
     * @param   Requests $request
     *
     * @return  JSON Response()
     */

    public function store(EvaluationLevelsCreateRequests $request)
    {

        $evaluationlevel = new EvaluationLevel();
        $evaluationlevel->create($request->all());

        return response([
            'message' => 'El nivel de evaluacion fue creado con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra los datos de la tabla evaluation_levels
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $evaluationlevel = EvaluationLevel::findOrFail($id);

        return $evaluationlevel;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la tabla evaluation_levels.
     *
     * @param  Requests  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(EvaluationLevelsCreateRequests $request, $id)
    {
        $evaluationlevel = EvaluationLevel::findOrFail($id);
        $evaluationlevel->update($request->all());

        if ($evaluationlevel) {
            return response([
                'message' => 'El nivel de evaluacion fue actualizado con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos en la tabla evaluation_levels.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $evaluationlevel = EvaluationLevel::destroy($id);

        if ($evaluationlevel) {

            return response([
                'message' => 'el nivel de evaluacion se ha eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
