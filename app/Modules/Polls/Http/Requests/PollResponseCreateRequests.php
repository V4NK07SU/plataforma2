<?php

namespace App\Modules\Polls\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @resource PollResponseCreateRequests
 *
 * Request para validacion de la creacion de un PollResponseCreateRequests
 *
 * @autor Danny Rojas Reyes, @rojasknight
 *
 */

class PollResponseCreateRequests extends FormRequest
{

    /**
     *
     *authorize
     *
     * Determina si el usuario esta autorizado para hacer este request.
     *
     * @return bool
     */

    public function authorize()
    {
        return true;
    }

    /**
     *
     * rules
     *
     * Toma las reglas de valudación para aplicar a los request.
     *
     * @return array
     */

    public function rules()
    {
        return [
            'response'       => 'required|string|min:3|max:45',
            'responded_date' => 'required|date',
        ];
    }

    /**
     * Respuesta en formato JSON SI existen errores en el request
     * @param  array  $errors
     * @return JSON Response()
     */

    public function response(array $errors)
    {
        return response([
            'message' => 'el formulario contiene errores',
            'errors'  => $errors,
        ], 422);
    }
}
