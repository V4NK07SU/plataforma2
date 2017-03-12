<?php

namespace App\Modules\Polls\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @resource PollRiskVariableCreateRequest
 *
 * Request para validacion
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollRiskVariableCreateRequest extends FormRequest
{
    /**
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
     * rules
     *
     * Toma las reglas de valudación para aplicar a los request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'       => 'required|min:3',
            'description' => 'required|string|min:3',
        ];
    }
    /**
     * Respuesta en formato JSON SI existen errores en el request
     */
    public function response(array $errors)
    {
        return response([
            'message' => 'El formulario contiene errores',
            'errors'  => $errors,
        ], 422);
    }

}
