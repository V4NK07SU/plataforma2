<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\HorasCreateRequest;
use App\Modules\Agenda\Models\Hora;
use Illuminate\Http\Request;

/**
 *@resource HoraController
 *
 *Recurso de la agenda para ser consumidos
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class HoraController extends Controller
{
    /**
     * index
     *
     * Retorna las respuestas de la hora en formato JSON     * 
     * 
     * @return  $horas
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $horas = Hora::paginate(10);
        return $horas;

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
     *
     * Store
     *
     * Retorna un respuesta en JSON de la validacion de creación de una tipo de encuesta
     * @param   HorasCreateRequest::class $request
     * @return  JSON Response()
     */

    public function store(HorasCreateRequest $request)
    {

        $hora = new Hora();
        $hora->create($request->all());

        return response([
            'message' => 'las horas se han ingresado con exito',
        ], 200);
    }

    /**
     * show
     * Muestra un recurso especificado.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $hora = Hora::findOrFail($id);

        return $hora;
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
     * Update
     * Actualiza los registros especificados
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(HorasCreateRequest $request, $id)
    {
        Hora::find($id)->update($request->all());

        return response([
            'message' => 'se actualizo con exito',
        ], 200);
    }

    /**
     * Remueve el campo especificado de la base de datos.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Hora::destroy($id);

        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }
}
