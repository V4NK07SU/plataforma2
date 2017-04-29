<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\PhenomenaCreateRequest;
use App\Modules\Agenda\Models\Phenomena;
use Illuminate\Http\Request;
/**
 *@resource PhenomenaController
 *
 *Recurso de la agenda para ser consumidos
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class PhenomenaController extends Controller
{
    /**
     * index
     *
     * Retorna las respuestas de los Phenomena en formato JSON
     * 
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $phenomenas = Phenomena::paginate(10);
        return $phenomenas;
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
     * Retorna en formato JSON una respuesta para guardar las respuestas.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PhenomenaCreateRequest $request)
    {
        $phenomena = new Phenomena();
        $phenomena->create($request->all());

        return response([
            'message' => 'el fenomeno se ha ingresado con exito',
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
        $phenomena = Phenomena::findOrFail($id);

        return $phenomena;
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
    public function update(PhenomenaCreateRequest $request, $id)
    {
        Phenomena::find($id)->update($request->all());

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
        Phenomena::destroy($id);

        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }
    public function search ($keyword) {
        return Phenomena::where('title', 'like', '%' . $keyword . '%')
        ->orWhere('description', 'like', '%' . $keyword . '%')->paginate(10);
    }

}
