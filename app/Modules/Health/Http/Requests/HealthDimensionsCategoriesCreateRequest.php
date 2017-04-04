<?php

namespace App\Modules\Health\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @resource HealthDimensionsCategoriesCreateRequest
 *
 * Request para filtrar la información.
 *
 * @author Danny Rojas Reyes <afarable-1997@hotmail.com>
 */

class HealthDimensionsCategoriesCreateRequest extends FormRequest
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
            'title'       => 'string|required|max:128',
            'description' => 'string|required',
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
