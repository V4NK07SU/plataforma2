<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollUserCreateRequest;
use App\Modules\Polls\Models\User;
use Illuminate\Http\Request;

/**
 * @resource PollTypeController
 *
 * Recurso Tipos de encuesta para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 */

class PollUserController extends Controller
{
    /**
     * index
     *
     * Retorna un listado de todos los usuarios en formato JSON
     *
     * @return   Response()
     */
    public function index()
    {
        $users = User::paginate(10);

        return $users;
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
     * @param   PollUserCreateRequest $request
     *
     * @return   Response()
     */

    public function store(PollUserCreateRequest $request)
    {

        $users = new User();
        $users->create($request->all());

        return response([
            'message' => 'El usuario se ha creado con exito',
        ], 200);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla users
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $users = User::findOrFail($id);

        return response([
            'id'         => $users->id,
            'first_name' => $users->first_name,
            'last_name'  => $users->last_name,
            'email'      => $users->email,

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
     * @param  PollUserCreateRequest $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */
    public function update(PollUserCreateRequest $request, $id)
    {

        $users = User::findOrFail($id);
        $users->update($request->all());

        if ($users) {
            return response([
                'message' => 'El usuario se ha actualizado con exito',
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
        $users = User::destroy($id);

        if ($users) {

            return response([
                'message' => 'El usuario se he eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el usuario no ha sido eliminado',
            'id'      => $id,
        ], 401);

    }
}
