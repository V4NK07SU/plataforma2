<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\AgendaCreateRequest;
use App\Modules\Agenda\Models\Agenda;
use Illuminate\Http\Request;

/**
 *@resource AgendaController
 *
 *Recurso de la agenda para ser consumidos
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class AgendaController extends Controller
{
    /**
     *
     * index
     *
     * Retorna las respuestas de la agenda en formato JSON
     * Retorna  en formato JSON
     *
     * @param   $[empty] [empty]
     * @return  JSON Response()
     */
    public function index()
    {
        $agendas = Agenda::paginate(10);
        return $agendas;
    }

    /**
     *
     *Se muestra el formulario para crear un nuevo recurso
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store.
     *
     *Retorna formato JSON
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AgendaCreateRequest $request)
    {
        $agenda = new Agenda();
        $agenda->create($request->all());

        return Response([
            'message' => 'la agenda esta lista',
        ], 200);
    }

    /**
     * show
     *
     * muestra los datos de agenda
     *
     *
     * @param  int  $id
     *
     * @return $agenda
     */
    public function show($id)
    {
        $agenda = Agenda::findOrFail($id);

        return $agenda;
    }

    /**
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
     * Update.
     *
     * Actualiza los registros especificados
     *
     * @param  \Illuminate\Http\Request  $request     *
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AgendaCreateRequest $request, $id)
    {
        Agenda::find($id)->update($request->all());

        return response([
            'message' => 'se actualizo con exito',
        ], 200);
    }

    /**
     * Destroy.
     *
     * Remueve el campo especifico de la base de datos
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Agenda::destroy($id);

        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }
      public function search ($keyword) {
        return Agenda::where('user_id', 'like', '%' . $keyword . '%')
        ->orWhere('service_id', 'like', '%' . $keyword . '%')
        ->orWhere('period_id', 'like', '%' . $keyword . '%')
        ->orWhere('observacion', 'like', '%' . $keyword . '%')->paginate(10);
    }
    public function getAll (){
        $agenda = Agenda::all();

        return response()->json(['data'=> $agenda->toArray()]);

    }
}
