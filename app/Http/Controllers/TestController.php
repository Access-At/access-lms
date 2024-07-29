<?php

namespace App\Http\Controllers;

use App\Exceptions\CustomeException;

class TestController extends Controller
{
    public function index()
    {
        $this->exep();
    }

    public function exep()
    {
        throw CustomeException::notFound('Kursus');
    }
}
