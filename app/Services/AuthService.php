<?php

namespace App\Services;

use App\Helpers\ResponseHelper;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Resources\User\UserResource;

class AuthService
{
    public static function login($data)
    {
        if (!$token = self::userLogin($data)) {
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
        $user = auth()->guard('admin')->user() ?? auth()->guard('user')->user() ?? auth()->guard('trainer')->user();
        $userResourceArray = (new UserResource($user))->toArray(request());

        $role = auth()->guard('admin')->user() !== null ? 'admin' :
                 (auth()->guard('trainer')->user() !== null ? 'trainer' : 'user');

        return array_merge($userResourceArray, ['role' => $role]);
    }

    protected static function userLogin($data)
    {
        if ($token = auth()->guard('admin')->attempt($data->validated())) {
            return $token;
        }

        if ($token = auth()->guard('user')->attempt($data->validated())) {
            return $token;
        }

        if ($token = auth()->guard('trainer')->attempt($data->validated())) {
            return $token;
        }

        return false;
    }
}
