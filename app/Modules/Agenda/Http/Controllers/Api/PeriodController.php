<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\PeriodCreateRequest;
use App\Modules\Agenda\Models\Period;
use Illuminate\Http\Request;

/**
 *@resource PeriodController
 *
 *Recurso de la agenda para ser consumidos
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class PeriodController extends Controller
{
    /**
     * index
     *
     * Retorna las respuestas de periodo en formato JSON
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $periods = Period::paginate(10);
        return $periods;
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
     * Retorna en formato JSON con los datos de periodo.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PeriodCreateRequest $request)
    {
        $period = new Period();
        $period->create($request->all());

        return response([
            'message' => 'el periodo se han ingresado con exito',
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
        $period = Period::findOrFail($id);

        return $period;
    }

    /**
     * edit
     *
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
    public function update(PeriodCreateRequest $request, $id)
    {
        Period::find($id)->update($request->all());

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
        Period::destroy($id);

        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }

       public function search ($keyword){
        return Period::where('description', 'like','%' . $keyword . '%')
        ->orWhere('start_at', 'like', '%'.$keyword .'%')
        ->orWhere('ends_at', 'like', '%'.$keyword .'%')->paginate(10);
    }

    public function getAll(){
        $period = Period::all();
        return response()->json(['data'=> $period->toArray()]);
    }
}
