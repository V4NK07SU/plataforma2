<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollTypeCreateRequest;
use App\Modules\Polls\Models\PollType;
use Illuminate\Http\Request;

/**
 * @resource PollTypeController
 *
 * Recurso Tipos de encuesta para ser consumidos
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollTypeController extends Controller
{
    /**
     * index
     *
     * Retorna un listado de todos los tipos de encuesta en formato JSON
     * 
     * @return   Response()
     */
    public function index()
    {
        $polltypes = PollType::paginate(10);

        return $polltypes;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Retorna un respuesta en JSON de la validacion de creación de una tipo de encuesta
     * 
     * @param   PollTypeCreateRequest::class $request
     * 
     * @return   Response()
     */

    public function store(PollTypeCreateRequest $request)
    {

        $polltype = new PollType();
        $polltype->create($request->all());

        return response([
            'message' => 'El tipo de encuesta se ha creado con exito',
        ], 200);
    }
 /**
     * show
     *
     * @param  int $id
     *
     * @return JSON Response()
     */
    public function show($id)
    {
        $polltype = PollType::findOrFail($id);

        return response([
            'id'            => $polltype->id,
            'title'         => $polltype->title,
            'description'   => $polltype->description,
           
        ]);
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
     * @param  PollTypeCreateRequest $request
     * 
     * @param  int  $id
     * 
     * @return JSON, response()
     */
    public function update(PollTypeCreateRequest $request, $id)
    {

        $polltype = PollType::findOrFail($id);
        $polltype->update($request->all());

        if ($polltype) {
            return response([
                'message' => 'Tipo de encuesta actualizada con exito',
            ], 200);
        }

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
        $polltype = PollType::destroy($id);

        if ($polltype) {

            return response([
                'message' => 'el tipo de encuesta se he eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);

    }
}
