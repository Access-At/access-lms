<?php

namespace App\Services\User;

use App\Helpers\ResponseHelper;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Resources\User\UserResource;

class AuthService
{
    public static function login($data)
    {
        if (!$token = auth()->guard('user')->attempt($data->validated())) {
            return ResponseHelper::unAuthenticated(null, 'Email atau password anda salah!');
        }

        return ResponseHelper::success([
            'user' => self::userDetail(),
            'token' => $token,
        ]);
    }

    public static function me()
    {
        return ResponseHelper::success([
            'user' => self::userDetail(),
        ]);
    }

    public static function refresh()
    {
        $refreshToken = JWTAuth::refresh(JWTAuth::getToken());
        JWTAuth::setToken($refreshToken)->toUser();

        return ResponseHelper::success([
            'user' => self::userDetail(),
            'token' => $refreshToken,
        ]);
    }

    public static function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());

        return ResponseHelper::noContent();
    }

    protected static function userDetail()
    {
        $user = auth()->guard('user')->user();
        $userResourceArray = (new UserResource($user))->toArray(request());

        return array_merge($userResourceArray, ['role' => 'user']);
    }
}
