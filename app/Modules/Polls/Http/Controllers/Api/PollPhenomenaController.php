<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollPhenomenaCreateRequest;
use App\Modules\Polls\Models\PollPhenomena;
use Illuminate\Http\Request;

/**
 * @resource PollPhenomenaController
 *
 * Recurso de la agenda para ser consumidos
 *
 * @author Danny Rojas Reyes , afarable-1997@hotmail.com
 */

class PollPhenomenaController extends Controller
{

    /**
     * index
     *
     * Retorna las respuestas de las Phenomena en formato JSON
     *
     * @return   Response()
     */

    public function index()
    {

        $phenomenas = PollPhenomena::paginate(10);
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
     * @param   PollPhenomenaCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(PollPhenomenaCreateRequest $request)
    {
        $phenomena = new PollPhenomena();
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
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $phenomena = PollPhenomena::findOrFail($id);

        return $phenomena;
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
     * @param  PollPhenomenaCreateRequest $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollPhenomenaCreateRequest $request, $id)
    {
        PollPhenomena::find($id)->update($request->all());

        return response([
            'message' => 'el fenomeno se ha actualizado con exito',
        ], 200);
    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos.
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function destroy($id)
    {
        PollPhenomena::destroy($id);

        return response([
            'message' => 'el fenomeno se ha eliminado con exito',
        ], 200);
    }
}
