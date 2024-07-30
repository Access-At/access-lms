<?php

namespace App\Http\Controllers;

use App\Exceptions\CustomeException;
use App\Exceptions\CustomException;
use App\Models\Category;
use Illuminate\Support\Benchmark;

class TestController extends Controller
{
    public function index()
    {
        $idCategori = "b288c8b0-4dd5-11ef-bdc6-38f9d359c241";

        // test bechmark
        Benchmark::dd(
            [
                'get Category skernario 1' => fn () => Category::where('id', $idCategori)->first(),
                'get Category skernario 2' => fn () => Category::find($idCategori) // lebih gacor

            ]
        );

    }

    public function exep()
    {
        throw CustomException::notFound('Kursus');
    }


}
