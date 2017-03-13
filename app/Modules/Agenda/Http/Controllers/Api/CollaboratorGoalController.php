<?php

namespace App\Modules\Agenda\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\CollaboratorGoalCreateRequest;
use App\Modules\Agenda\Models\CollaboratorGoal;
use Illuminate\Http\Request;

/**
 *@resource AppoinmentController
 *
 *Recurso de las metas de colaboracion
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class CollaboratorGoalController extends Controller
{
    /**
     *index
     *
     * Retorna las respuestas de los Colaboradores en formato JSON
     * Retorna  en formato JSON
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $collaborators=CollaboratorGoal::paginate(10);
        return $collaborators;
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
     * Retorna en formato JSON las metas de colaboracion.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CollaboratorGoalCreateRequest $request)
    {
        $collaborator= new CollaboratorGoal();
        $collaborator->create($request->all());


        return response([
            'message' => ' se guardado con exito ',
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
        $collaborator= CollaboratorGoal::findOrFail($id);

        return $collaborator;
    }

    /**
     *edit
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
    public function update(CollaboratorGoalCreateRequest $request, $id)
    {
        CollaboratorGoal::find($id)->update($request->all());

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
        CollaboratorGoal::destroy($id);


        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }
}
