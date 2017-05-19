<?php

namespace App\Modules\Health\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @resource HealthHistoryCreateRequest
 *
 * Request para filtrar la información.
 *
 * @author Danny Rojas Reyes <afarable-1997@hotmail.com>
 */

class HealthHistoryCreateRequest extends FormRequest
{
    /**
     * authorize
     *
     * Determina si el usuario esta autorizado.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * rules
     *
     * Validaciones para el request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'date'            => 'string|date',
            'observations'    => 'string|required',
            'reason'          => 'string|required',
            'tracing'         => 'string|required',
            'professional_id' => 'numeric|required|exists:users,id',
        ];
    }
    /**
     * response
     *
     * Respuesta en formato JSON SI existen errores en el request
     *
     * @param  array  $errors
     *
     * @return JSON response()
     */

    public function response(array $errors)
    {
        return response([
            'message' => 'El formulario contiene errores',
            'errors'  => $errors,
        ], 422);
    }
}
