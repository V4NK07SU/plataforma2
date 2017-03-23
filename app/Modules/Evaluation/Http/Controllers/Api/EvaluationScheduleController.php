<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Evaluation\Http\Requests\EvaluationScheduleCreateRequests;
use App\Modules\Evaluation\Models\EvaluationSchedule;
use Illuminate\Http\Request;

/**
 * @resource EvaluationScheduleController
 *
 * Recurso compromiso
 *
 * @author David Felipe Bustos <david_bustos17@hotmail.com>
 *
 */

class EvaluationScheduleController extends Controller
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

        $evaluationschedule = EvaluationSchedule::paginate(10);
        return $evaluationschedule;
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

    public function store(EvaluationScheduleCreateRequests $request)
    {

        $evaluationschedule = new EvaluationSchedule();
        $evaluationschedule->create($request->all());

        return response([
            'message' => 'El horario de evaluacion fue creada con exito',
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
        $evaluationschedule = EvaluationSchedule::findOrFail($id);

        return $evaluationschedule;
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

    public function update(EvaluationScheduleCreateRequests $request, $id)
    {
        $evaluationschedule = EvaluationSchedule::findOrFail($id);
        $evaluationschedule->update($request->all());

        if ($evaluationschedule) {
            return response([
                'message' => 'El horario de evaluacion fue actualizada con exito',
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
        $evaluationschedule = EvaluationSchedule::destroy($id);

        if ($evaluationschedule) {

            return response([
                'message' => 'El horario de evaluacion fue eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
