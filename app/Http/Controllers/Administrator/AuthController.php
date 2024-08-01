<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Requests\AuthRequest;
use App\Http\Controllers\Controller;
use App\Services\Administrator\AuthService;

class AuthController extends Controller
{
    public function login(AuthRequest $request)
    {
        return AuthService::login($request);
    }

    public function getUser()
    {
        return AuthService::me();
    }

    public function refreshToken()
    {
        return AuthService::refresh();
    }

    public function logout()
    {
        return AuthService::logout();
    }
}
