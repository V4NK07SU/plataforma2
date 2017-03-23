<?php

namespace App\Modules\Evaluation\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EvaluationGlobalCreateRequests extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'period_stars'      => 'required|date',
            'period_ends'       => 'required|date',
            'commitments_stars' => 'required|date',
            'commitments_ends'  => 'required|date',
            'evaluation_stars'  => 'required|date',
            'evaluation_ends'   => 'required|date',
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
