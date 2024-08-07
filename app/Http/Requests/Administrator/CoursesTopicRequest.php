<?php

namespace App\Http\Requests\Administrator;

use Illuminate\Http\Response;
use App\Helpers\ResponseHelper;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CoursesTopicRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required',
            'order' => 'required|unique:courses_topics,order,NULL,id,course_id,' . $this->course_id,
            'content' => 'required|min:3',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(ResponseHelper::custome(['status' => false, 'message' => 'Validation errors', 'error' => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY));
    }
}
