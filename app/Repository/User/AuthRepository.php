<?php 

namespace App\Repository\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthRepository {
    
    public function loginUser(Request $request)
    {
        $validator = Validator::make([
            'email' => 'required',
            'password' => 'required'
        ], [
            'required' => ':attribute wajib diisikan',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 'error',
                'message' => 'Error Validation',
                'data' => $validator
            ], 422);
        }
    }
}