<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollCampaingCreateRequest;
use App\Modules\Polls\Models\PollCampaing;
use Illuminate\Http\Request;

/**
 * @resource PollCampaingController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollCampaingController extends Controller
{

    /**
     * index
     *
     * Retorna las respuestas de las encustas en formato JSON

     * @return   Response()
     */

    public function index()
    {
        $pollcampaing = PollCampaing::paginate(10);
        return $pollcampaing;
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
     * @param   PollCampaingCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(PollCampaingCreateRequest $request)
    {
        $pollcampaing = new PollCampaing();
        $pollcampaing->create($request->all());

        return response([
            'message' => 'El campaña de la encuesta se ha creado con exito',
        ]);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla poll_campaing
     * 
     * @param  int $id
     *
     * @return JSON Response()
     */
    
    public function show($id)
    {
        $pollcampaing = PollCampaing::findOrFail($id);

        return response([
            'id'            => $pollcampaing->id,
            'max_questions' => $pollcampaing->max_questions,
            'start_at'      => $pollcampaing->start_at,
            'finish_at'     => $pollcampaing->finish_at,
            'user_id'       => $pollcampaing->user_id,
        ]);
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los registros especificados.
     * @param  PollCampaingCreateRequest $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollCampaingCreateRequest $request, $id)
    {
        $pollcampaing = PollCampaing::findOrFail($id);
        $pollcampaing->update($request->all());

        if ($pollcampaing) {
            return response([
                'message' => 'Campaña de encuesta fue actualizada con exito',
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
     * @return JSON Respons()
     */

    public function destroy($id)
    {
        $pollcampaing = PollCampaing::destroy($id);

        if ($pollcampaing) {

            return response([
                'message' => 'el tipo de encuesta se he eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
