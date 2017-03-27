<?php

namespace App\Modules\Employees\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
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
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'numeric',
            'position_id' => 'required|numeric'
        ];
    }

    /**
     * Response on validation fails
     *
     * @param  array    $errors Validation errors
     *
     * @return Response          JSON With error data
     */
    public function response(array $errors)
    {        
        return response([
            'message' => 'El formularion contiene errores!',
            'errors'  => $errors,
        ], 422);
        
    }
    
    
}
