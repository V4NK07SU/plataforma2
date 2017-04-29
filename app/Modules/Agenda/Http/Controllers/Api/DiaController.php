<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\DiaCreateRequest;
use App\Modules\Agenda\Models\Dia;
use Illuminate\Http\Request;

/**
 *@resource DiaController
 *
 *Recurso de la agenda para ser consumidos
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class DiaController extends Controller
{
    /**
     * index
     *
     * Retorna las respuestas de dia en formato JSON
     * Retorna  en formato JSON
     *
     * @return $dias
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $dias = Dia::paginate(10);
        return $dias;
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
     * Retorna en formato JSON.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DiaCreateRequest $request)
    {

        $dia = new Dia();
        $dia->create($request->all());

        return response([
            'message' => 'los dias se han ingresado con exito',
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
        $dia = Dia::findOrFail($id);

        return $dia;
    }

    /**
     * edit
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
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
    public function update(DiaCreateRequest $request, $id)
    {
        Dia::find($id)->update($request->all());

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
        Dia::destroy($id);

        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }
    public function search ($keyword) {
        return Dia::where('title', 'like', '%' . $keyword . '%')->paginate(10);
    }
}
