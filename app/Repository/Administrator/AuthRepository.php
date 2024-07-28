<?php 

namespace App\Repository\Adminstrator;

use App\Helpers\StatusJson;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;

class AuthRepository {
    
    public function loginUser($request)
    {
        $validator = Validator::make([
            'email' => 'required',
            'password' => 'required'
        ], [
            'required' => ':attribute wajib diisikan',
        ]);

        if($validator->fails()){
            StatusJson::validatorError($validator);
        }

        $credentials = $request->only('email', 'password');

        if(!$token = auth()->guard('admin')->attempt($credentials)){
            StatusJson::unauthorized('Unauthorized');
        }
        StatusJson::authWithToken(auth()->guard('admin')->user(), $token);
    }

    public function getUser()
    {
        return response()->json([
            'success' => true,
            'user'    => auth()->guard('admin')->user()
        ], 200);
    }
    
    /**
     * refreshToken
     *
     * @param  mixed $request
     * @return void
     */
    public function refreshToken(Request $request)
    {
        $refreshToken = JWTAuth::refresh(JWTAuth::getToken());
        JWTAuth::setToken($refreshToken)->toUser();

        $request->headers->set('Authorization','Bearer '.$refreshToken);
        StatusJson::authWithToken(auth()->guard('admin')->user(), $refreshToken);

    }
    
    /**
     * logout
     *
     * @return void
     */
    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json([
            'success' => true,
        ], 200);

    }
}