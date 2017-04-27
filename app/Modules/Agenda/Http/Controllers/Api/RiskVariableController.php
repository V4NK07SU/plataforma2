<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\RiskVariableCreateRequest;
use App\Modules\Agenda\Models\RiskVariable;
use Illuminate\Http\Request;

/**
 *@resource RiskVariableController
 *
 *Recurso de la agenda para ser consumidos
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class RiskVariableController extends Controller
{
    /**
     * index
     *
     * Retorna las respuestas de los riskVariable en formato JSON
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $riskvariables = RiskVariable::paginate(10);
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
     * Retorna en formato JSON con las variables de riesgo.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RiskVariableCreateRequest $request)
    {
        $riskvariable = new RiskVariable();
        $riskvariable->create($request->all());

        return response([
            'message' => 'la variable de riesgo se ha ingresado con exito',
        ], 200);
    }

    /**
     * show
     *
     * Muestra un recurso especificado.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $riskvariable = RiskVariable::findOrFail($id);

        return $riskvariable;
    }

    /**
     * edit
     *
     * Show the form for editing the specified resource.
     *
     *
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update
     *
     * Actualiza los registros especificados
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RiskVariableCreateRequest $request, $id)
    {
        RiskVariable::find($id)->update($request->all());

        return response([
            'message' => 'se actualizo con exito',
        ], 200);
    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        RiskVariable::destroy($id);

        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }
}
