<?php

namespace App\Modules\Agenda\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AgendaScheduleCreateRequest extends FormRequest
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
            'agenda_id' => 'required',
            'schelude_id'=>'required',
        ], 422;
    }
}
