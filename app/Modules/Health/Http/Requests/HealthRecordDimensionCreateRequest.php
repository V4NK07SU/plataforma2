<?php

namespace App\Modules\Health\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @resource HealthRecordDimensionCreateRequest
 *
 * Request para filtrar la información.
 *
 * @author Danny Rojas Reyes <afarable-1997@hotmail.com>
 */

class HealthRecordDimensionCreateRequest extends FormRequest
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
            'record_id'    => 'numeric|exists:health_record,id',
            'dimemsion_id' => 'numeric|exists:health_record,health_dimensions,id',
            'observations' => 'string|required',
            'value'        => 'numeric|required',
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
