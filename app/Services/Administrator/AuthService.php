<?php

namespace App\Services\Administrator;

use App\Helpers\ResponseHelper;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\AuthRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthService
{
    public static function login($data)
    {
        if (!$token = auth()->guard('admin')->attempt($data->validated())) {
            return ResponseHelper::unAuthenticated(null, 'Email atau password anda salah!');
        }

        return ResponseHelper::success([
            'user' => auth()->guard('admin')->user(),
            'token' => $token,
        ]);
    }

    public static function me()
    {
        return ResponseHelper::success([
            'user' => auth()->guard('admin')->user(),
        ]);
    }

    public static function refresh()
    {
        $refreshToken = JWTAuth::refresh(JWTAuth::getToken());
        JWTAuth::setToken($refreshToken)->toUser();

        return ResponseHelper::success([
            'user' => auth()->guard('admin')->user(),
            'token' => $refreshToken,
        ]);
    }

    public static function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());

        return ResponseHelper::noContent();
    }
}
