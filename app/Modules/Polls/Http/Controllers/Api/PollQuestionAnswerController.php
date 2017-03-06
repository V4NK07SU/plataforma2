<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollQuestionAnswerCreateRequest;
use App\Modules\Polls\Models\PollQuestionAnswer;
use Illuminate\Http\Request;

/**
 * @resource PollQuestionAnswerController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollQuestionAnswerController extends Controller
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
        $pollquestionanswer = PollQuestionAnswer::paginate(10);
        return $pollquestionanswer;
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
     * @param   PollQuestionAnswerCreateRequest $request
     *
     * @return  JSON Response()
     */
    public function store(PollQuestionAnswerCreateRequest $request)
    {
        $pollquestionanswer = new PollQuestionAnswer();
        $pollquestionanswer->create($request->all());

        return response([
            'message' => 'La respuesta de la pregunta  se ha creado con exito',
        ]);
    }

    /**
     * show
     *
     * @param  int $id
     *
     * @return JSON Response()
     
    public function show($id)
    {
        $pollquestionanswer = PollQuestionAnswer::findOrFail($id);

        return response([
            'id'               => $pollquestionanswer->id,
            'poll_question_id' => $pollquestionanswer->poll_question_id,
            'poll_answer_id'   => $pollquestionanswer->poll_answer_id,
            'user_id'          => $pollquestionanswer->user_id,
            'poll_id'          => $pollquestionanswer->poll_id,
            'answered_date'    => $pollquestionanswer->answered_date,
        ]);
    }

    /**
     *
     * update
     *
     * Actualiza los registros especificados.
     * @param  PollTypeCreateRequest $request
     * @param  int  $id
     * @return JSON, response()
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
     * @param  PollQuestionAnswerCreateRequest $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollQuestionAnswerCreateRequest $request, $id)
    {
        $pollquestionanswer = PollQuestionAnswer::findOrFail($id);
        $pollquestionanswer->update($request->all());

        if ($pollquestionanswer) {
            return response([
                'message' => 'La Respuesta de la pregunta en la encuesta fue actualizada con exito',
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

        $pollquestionanswer = PollQuestionAnswer::destroy($id);

        if ($pollquestionanswer) {

            return response([
                'message' => 'La Respuesta de la pregunta se he eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
    
}
