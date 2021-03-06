<?php

namespace App\Modules\Evaluation\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @resource EvaluationFunctionCreateRequests
 *
 * Request para validacion de la creacion de un EvaluationFunction
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class EvaluationFunctionCreateRequests extends FormRequest
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
     * Toma las reglas de validación para aplicar a los request.
     *
     * @return array
     */

    public function rules()
    {
        return [
            'title'       => 'required|string|min:5|max:45',
            'description' => 'required|string|min:5|max:45',
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
