<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollRiskVariableCreateRequest;
use App\Modules\Polls\Models\PollRiskVariable;
use Illuminate\Http\Request;

/**
 * @resource PollRiskVariableController
 *
 * Recurso de la agenda para ser consumidos
 *
 * @author Danny Rojas Reyes , afarable-1996@hotmail.com
 */

class PollRiskVariableController extends Controller
{
    /**
     * index
     *
     * Retorna las respuestas de los riskVariable en formato JSON
     *
     * @return   Response()
     */

    public function index()
    {
        $riskvariables = PollRiskVariable::paginate(10);
        return $riskvariables;
    }

    /**
     * create
     *
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
     * Retorna en formato JSON con las variables de riesgo.
     *
     * @param   PollRiskVariableCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(PollRiskVariableCreateRequest $request)
    {
        $riskvariable = new PollRiskVariable();
        $riskvariable->create($request->all());

        return response([
            'message' => 'la variable se ha ingresado con exito',
        ], 200);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla poll_risk_variable
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $riskvariable = PollRiskVariable::findOrFail($id);

        return $riskvariable;
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
     * @param  PollRiskVariableCreateRequest $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollRiskVariableCreateRequest $request, $id)
    {
        PollRiskVariable::find($id)->update($request->all());

        return response([
            'message' => 'la variable se actualizo con exito',
        ], 200);
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
        PollRiskVariable::destroy($id);

        return response([
            'message' => 'la variable se elimino con exito',
        ], 200);
    }
}
