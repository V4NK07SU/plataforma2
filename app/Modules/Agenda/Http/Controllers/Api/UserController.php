<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\UserCreateRequest;
use App\Modules\Agenda\Models\User;
use Illuminate\Http\Request;

/**
 *@resource UserController
 *
 *Recurso de la agenda para ser consumidos
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class UserController extends Controller
{
    /**
     * index
     *
     * Retorna las respuestas de los usuarios en formato JSON
     * 
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::paginate(10);
        return $users;
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
     *store
     * 
     * Retorna en formato JSON una respuesta para guardar las respuestas.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserCreateRequest $request)
    {
        $user = new User();
        $user->create($request->all());

        return response([
            'message' => 'el usuario  se ha ingresado con exito',
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
        $user = User::findOrFail($id);

        return $user;
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
     * 
     * Actualiza los registros especificados
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserCreateRequest $request, $id)
    {
        User::find($id)->update($request->all());

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
        User::destroy($id);

        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }
}
