<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollSubquestionsResponsesCreateRequest;
use App\Modules\Polls\Models\PollSubquestionResponses;
use Illuminate\Http\Request;

/**
 * @resource PollSubquestionsResponsesController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 */

class PollSubquestionsResponsesController extends Controller
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
        $pollsubquestionresponse = PollSubquestionResponses::paginate(10);
        return $pollsubquestionresponse;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * store
     *
     * Retorna en formato JSON una respuesta para guardar las respuestas de las encustas
     *
     * @param   PollSubquestionsResponsesCreateRequest $request
     *
     * @return  JSON Response()
     */
    public function store(PollSubquestionsResponsesCreateRequest $request)
    {

        $pollsubquestionresponse = new PollSubquestionResponses();
        $pollsubquestionresponse->create($request->all());

        return response([
            'message' => 'La respuesta de la subcuestion en la encuesta se ha creado con exito',
        ]);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla poll_subquestions_responses
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $pollsubquestionresponse = PollSubquestionResponses::findOrFail($id);

        return response([
            'id'             => $pollsubquestionresponse->id,
            'user_id'        => $pollsubquestionresponse->user_id,
            'poll_id'        => $pollsubquestionresponse->poll_id,
            'subquestion_id' => $pollsubquestionresponse->subquestion_id,
            'response'       => $pollsubquestionresponse->response,
            'responded_date' => $pollsubquestionresponse->responded_date,
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
     *
     * @param  PollSubquestionsResponsesCreateRequest $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollSubquestionsResponsesCreateRequest $request, $id)
    {
        $pollsubquestionresponse = PollSubquestionResponses::findOrFail($id);
        $pollsubquestionresponse->update($request->all());

        if ($pollsubquestionresponse) {
            return response([
                'message' => 'La respuesta de la subpregunta en la encuesta fue actualizada con exito',
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
        $pollsubquestionresponse = PollSubquestionResponses::destroy($id);

        if ($pollsubquestionresponse) {

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
