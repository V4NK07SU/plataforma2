<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Evaluation\Http\Requests\EvaluationCommitmentAnswerCreateRequests;
use App\Modules\Evaluation\Models\EvaluationCommitmentAnswer;
use Illuminate\Http\Request;

/**
 * @resource EvaluationCommitmentAnswerController
 *
 * Recurso respuestas del as preguntas 
 *
 * @author David Felipe Bustos <david_bustos17@hotmail.com>
 *
 */

class EvaluationCommitmentAnswerController extends Controller
{
    /**
     * index
     *
     * Retorna un listado de respuestas de las preguntas para los compromisos
     *
     * @return Response()
     */

    public function index()
    {

        $evaluationcommitmentanswer = EvaluationCommitmentAnswer::paginate(10);
        return $evaluationcommitmentanswer;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Guarda un registro en la base de datos  el a tabla
     *
     * @param   Requests $request
     *
     * @return  JSON Response()
     */

    public function store(EvaluationCommitmentAnswerCreateRequests $request)
    {

        $evaluationcommitmentanswer = new EvaluationCommitmentAnswer();
        $evaluationcommitmentanswer->create($request->all());

        return response([
            'message' => 'la respuesta compromiso fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra los datos de la tabla evaluation_commitments_answers
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $evaluationcommitmentanswer = EvaluationCommitmentAnswer::findOrFail($id);

        return $evaluationcommitmentanswer;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos en la    tabla evaluation_commitments_answers.
     *
     * @param  Requests  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(EvaluationCommitmentAnswerCreateRequests $request, $id)
    {
        $evaluationcommitmentanswer = EvaluationCommitmentAnswer::findOrFail($id);
        $evaluationcommitmentanswer->update($request->all());

        if ($evaluationcommitmentanswer) {
            return response([
                'message' => 'La respuesta fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos en la tabla evaluation_commitments_answers.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $evaluationcommitmentanswer = EvaluationCommitmentAnswer::destroy($id);

        if ($evaluationcommitmentanswer) {

            return response([
                'message' => 'el Respuesta de compromiso eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}
