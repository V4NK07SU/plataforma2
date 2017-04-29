<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\ServiceCreateRequest;
use App\Modules\Agenda\Models\Service;
use Illuminate\Http\Request;

/**
 *@resource ServiceController
 *
 *Recurso de la agenda para ser consumidos
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class ServiceController extends Controller
{
    /**
     * index
     *
     * Retorna las respuestas de los servicios en formato JSON
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $services = Service::paginate(10);
        return $services;

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
     * crea datos en la tabla servicio.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ServiceCreateRequest $request)
    {
        $service = new Service();
        $service->create($request->all());

        return response([
            'message' => 'los servicios se han ingresado con exito',
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
        $service = Service::findOrFail($id);

        return $service;
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
    public function update(ServiceCreateRequest $request, $id)
    {
        Service::find($id)->update($request->all());

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
        Service::destroy($id);

        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }
    public function search ($keyword) {
        return Service::where('title', 'like', '%' . $keyword . '%')
        ->orWhere('description', 'like', '%' . $keyword . '%')->paginate(10);
    }
}
