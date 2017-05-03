<?php

namespace App\Modules\Evaluation\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Evaluation\Http\Requests\EvaluationCompetenciesCreateRequests;
use App\Modules\Evaluation\Models\EvaluationCompetencies;
use Illuminate\Http\Request;

/**
 * @resource EvaluationCompetenciesController
 *
 * Recurso competencias
 *
 * @author David Felipe Bustos <david_bustos17@hotmail.com>
 *
 */

class EvaluationCompetenciesController extends Controller
{
    /**
     * index
     *
     * lista los datos de la tabla evaluation_competencies
     *
     * @return Response()
     */

    public function index()
    {

        $evaluationcompetencies = EvaluationCompetencies::paginate(10);
        return $evaluationcompetencies;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * guarda datos en la tabla evaluation_competencies
     *
     * @param   Requests $request
     *
     * @return  JSON Response()
     */

    public function store(EvaluationCompetenciesCreateRequests $request)
    {

        $evaluationcompetencies = new EvaluationCompetencies();
        $evaluationcompetencies->create($request->all());

        return response([
            'message' => 'la competencia fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muesta los datos de la tabla evaluation_competencies
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $evaluationcompetencies = EvaluationCompetencies::findOrFail($id);

        return $evaluationcompetencies;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados de la tabla evaluation_competencies.
     *
     * @param  Requests  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(EvaluationCompetenciesCreateRequests $request, $id)
    {
        $evaluationcompetencies = EvaluationCompetencies::findOrFail($id);
        $evaluationcompetencies->update($request->all());

        if ($evaluationcompetencies) {
            return response([
                'message' => 'la competencia fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la tabla evaluation_competencies.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $evaluationcompetencies = EvaluationCompetencies::destroy($id);

        if ($evaluationcompetencies) {

            return response([
                'message' => 'la competencia fue eliminado con exito',
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
            return EvaluationCompetencies::where('title','like','%' . $keyword . '%')
            ->orwhere('description','like','%' . $keyword . '%')->paginate(10);
        }
}
