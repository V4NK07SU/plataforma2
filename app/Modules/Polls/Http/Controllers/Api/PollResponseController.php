<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollResponseCreateRequests;
use App\Modules\Polls\Models\PollResponse;
use Illuminate\Http\Request;

/**
 * @resource PollResponseController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollResponseController extends Controller
{

    /**
     * index
     *
     * Retorna las respuestas de las encustas en formato JSON
     *
     * @return   Response()
     */

    public function index()
    {
        $pollresponse = PollResponse::paginate(10);

        return $pollresponse;
    }

    public function create()
    {
        //
    }

    /**
     * store
     * Retorna en formato JSON una respuesta para guardar las respuestas de las encustas
     *
     * @param   PollResponseCreateRequests $request
     *
     * @return  JSON Response()
     */
    
    public function store(PollResponseCreateRequests $request)
    {
        $pollresponse = new PollResponse();
        $pollresponse->create($request->all());

        return response([
            'message' => 'la respuesta fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla poll_responses
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $pollresponse = PollResponse::findOrFail($id);

        return response([
            'id'               => $pollresponse->id,
            'user_id'          => $pollresponse->user_id,
            'poll_id'          => $pollresponse->poll_id,
            'poll_question_id' => $pollresponse->poll_question_id,
            'response'         => $pollresponse->response,
            'responded_date'   => $pollresponse->responded_date,

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los registros especificados.
     *
     * @param  PollResponseCreateRequests $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollResponseCreateRequests $request, $id)
    {
        $pollresponse = PollResponse::findOrFail($id);
        $pollresponse->update($request->all());

        if ($pollresponse) {
            return response([
                'message' => 'La respuesta de encuesta fue actualizada con exito',
            ], 200);
        }
    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function destroy($id)
    {
        $pollresponse = PollResponse::destroy($id);

        if ($pollresponse) {

            return response([
                'message' => 'La respuesta de encuesta se he eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
