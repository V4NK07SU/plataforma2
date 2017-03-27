<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollCreateRequests;
use App\Modules\Polls\Models\Poll;
use Illuminate\Http\Request;

/**
 * @resource PollController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollController extends Controller
{

    /**
     * index
     *
     * Retorna las respuestas de las encustas en formato JSON
     *
     * @return  Response()
     */

    public function index()
    {
        $poll = Poll::paginate(10);
        return $poll;
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
     * @param   PollCreateRequests $request
     *
     * @return  JSON Response()
     */

    public function store(PollCreateRequests $request)
    {
        $poll = new Poll();
        $poll->create($request->all());

        return response([
            'message' => 'la encuesta fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla polls
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $poll = Poll::findOrFail($id);

        return response([
            'id'            => $poll->id,
            'title'         => $poll->title,
            'description'   => $poll->description,
            'poll_types_id' => $poll->poll_types_id,
            'user_id'       => $poll->user_id,
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
     * @param  PollCreateRequests $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollCreateRequests $request, $id)
    {
        $poll = Poll::findOrFail($id);
        $poll->update($request->all());

        if ($poll) {
            return response([
                'message' => 'Encuesta actualizada con exito',
            ], 200);
        }
    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos e.
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function destroy($id)
    {
        $poll = Poll::destroy($id);

        if ($poll) {
            return response([
                'message' => 'La encuesta se he eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
