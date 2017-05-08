<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollItemsCreateRequest;
use App\Modules\Polls\Models\PollItem;
use App\Modules\Polls\Models\Poll;
use Illuminate\Http\Request;

/**
 * @resource PollItemsController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollItemsController extends Controller
{

    /**
     * index
     *
     * Retorna las respuestas de las encustas en formato JSON
     *
     * @return   Response()
     */

    public function index()
    {
        $pollitem = PollItem::with('poll')->paginate(10);
        return $pollitem;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Retorna en formato JSON una respuesta para guardar las respuestas de las encustas
     *
     * @param   PollItemsCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(PollItemsCreateRequest $request)
    {
        $pollitem = new PollItem();
        $pollitem->create($request->all());

        return response([
            'message' => 'El item de la encuesta se ha creado con exito',
        ]);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla poll_item
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $pollitem = PollItem::findOrFail($id);

        return response([
            'id'          => $pollitem->id,
            'poll_id'     => $pollitem->poll_id,
            'title'       => $pollitem->title,
            'description' => $pollitem->description,
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
     * @param  PollItemsCreateRequest $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollItemsCreateRequest $request, $id)
    {
        $pollitem = PollItem::findOrFail($id);
        $pollitem->update($request->all());

        if ($pollitem) {
            return response([
                'message' => 'El item de la encuesta ha sido actualizado con exito',
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
        $pollitem = PollItem::destroy($id);

        if ($pollitem) {

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

     public function search($keyword){
        return PollItem::where('title', 'like', '%' . $keyword . '%')
        ->orWhere('description', 'like', '%' . $keyword . '%')->paginate(10);
    }

    public function getAll()
    {
        $pollItem = PollItem::all();
        return response()->json(['data' => $pollItem->toArray()]);
    }

}
