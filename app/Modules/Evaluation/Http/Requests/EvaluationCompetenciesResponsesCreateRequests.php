<?php

namespace App\Modules\Evaluation\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EvaluationCompetenciesResponsesCreateRequests extends FormRequest
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
            'evaluation_id' => 'numeric|required|exists:evaluation_global,id',
            'competency_id' => 'numeric|required|exists:evaluation_competencies,id',
            'answer_id'     => 'numeric|required|exists:evaluation_competency_answers,id',
            'evaluated_id'  => 'numeric|required|exists:evaluation_user_position,id',
            'evaluator_id'  => 'numeric|required|exists:evaluation_user_position,id',
            'rol_id'        => 'numeric|required|exists:evaluation_roles,id',
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
