<?php

namespace App\Http\Controllers;

use App\Services\AuthService;
use App\Http\Requests\AuthRequest;

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
