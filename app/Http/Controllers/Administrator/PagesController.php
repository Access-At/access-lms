<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Services\Administrator\PagesService;
use App\Http\Requests\Administrator\PagesRequest;

class PagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PagesService::getAllPages();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PagesRequest $request)
    {
        return PagesService::storePage($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return PagesService::getPages($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PagesRequest $request, string $id)
    {
        return PagesService::updatePage($id, $request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return PagesService::deletePage($id);
    }
}
