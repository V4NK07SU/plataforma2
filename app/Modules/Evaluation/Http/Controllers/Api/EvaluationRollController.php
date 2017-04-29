<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Modules\Evaluation\Models\EvaluationRoll;
use App\Modules\Evaluation\Http\Requests\EvaluationRolesCreateRequests;


/**
 * @resource EvaluationRollController
 *
 * Recurso roles
 *
 * @author David Felipe Bustos <david_bustos17@hotmail.com>
 *
 */

class EvaluationRollController extends Controller
{
    /**
     * index
     *
     * lista los datos de la tabla evaluation_roles
     *
     * @return Response()
     */

    public function index()
    {

        $evaluationroll = EvaluationRoll::paginate(10);
        return $evaluationroll;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * guarda los datos den la tabla evaluation_roles
     *
     * @param   Requests $request
     *
     * @return  JSON Response()
     */

    public function store(EvaluationRolesCreateRequests $request)
    {

        $evaluationroll = new EvaluationRoll();
        $evaluationroll->create($request->all());

        return response([
            'message' => 'El roll de evaluacion fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra los registros guardados en la tabla evaluation_roles
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $evaluationroll = EvaluationRoll::findOrFail($id);

        return $evaluationroll;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la tabla evaluation_roles.
     *
     * @param  Requests  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(EvaluationRolesCreateRequests $request, $id)
    {
        $evaluationroll = EvaluationRoll::findOrFail($id);
        $evaluationroll->update($request->all());

        if ($evaluationroll) {
            return response([
                'message' => 'El roll fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos en la tabla evaluation_roles.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $evaluationroll = EvaluationRoll::destroy($id);

        if ($evaluationroll) {

            return response([
                'message' => 'El roll se ha eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }


        public function search($keyword)
        {
            return EvaluationRoll::where('title','like','%' . $keyword . '%')
            ->orwhere('description','like','%' . $keyword . '%')->paginate(10);
        }
    }

