<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Services\Administrator\PagesService;
use App\Http\Requests\Administrator\PagesRequest;

class PagesController extends Controller
{
    public function index()
    {
        return PagesService::getPages();
    }

    public function store(PagesRequest $request)
    {
        return PagesService::storePage($request);
    }

    public function update($id, PagesRequest $request)
    {
        return PagesService::updatePage($id, $request);
    }

    public function destroy($id)
    {
        return PagesService::deletePage($id);
    }
}
