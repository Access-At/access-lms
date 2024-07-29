<?php

namespace App\Services\Administrator;

use App\Helpers\ResponseHelper;
use Illuminate\Http\JsonResponse;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Repository\Administrator\AuthRepository;

class AuthService
{
    protected $authRepository;

    public function __construct(
        AuthRepository $authRepository
    ) {
        $this->authRepository = $authRepository;
    }

    public function login(array $data): JsonResponse
    {
        if (!$token = auth()->guard('admin')->attempt($data)) {
            return ResponseHelper::unAuthenticated(null, 'Email atau password anda salah!');
        }

        return ResponseHelper::success([
            'user' => auth()->guard('admin')->user(),
            'token' => $token,
        ]);
    }

    public function me(): JsonResponse
    {
        return ResponseHelper::success([
            'user' => auth()->guard('admin')->user(),
        ]);
    }

    public function refresh(): JsonResponse
    {
        $refreshToken = JWTAuth::refresh(JWTAuth::getToken());
        JWTAuth::setToken($refreshToken)->toUser();

        return ResponseHelper::success([
            'user' => auth()->guard('admin')->user(),
            'token' => $refreshToken,
        ]);
    }

    public function logout(): JsonResponse
    {
        JWTAuth::invalidate(JWTAuth::getToken());

        return ResponseHelper::noContent();
    }
}
