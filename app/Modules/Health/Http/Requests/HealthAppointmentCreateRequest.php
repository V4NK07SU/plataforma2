<?php

namespace App\Modules\Health\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HealthAppointmentCreateRequest extends FormRequest
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

            'appointment_status'=> 'required',
            'user_id'=> 'numeric|required|exists:users,id',
            'appointment_start' => 'required',
            'appointment_end' => 'required',

            //
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
