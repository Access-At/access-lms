<?php

namespace App\Http\Controllers\Administrator;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Administrator\CoursesRequest;
use App\Services\Administrator\CoursesService;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CoursesService::getAll();
    }
    public function listTrash()
    {
        return CoursesService::listTrash();
    }

   
    public function store(CoursesRequest $request)
    {
        return CoursesService::insert($request);
    }

    public function duplicate(string $id)
    {
        return CoursesService::duplicateId($id);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return CoursesService::findById($id);
    }

    public function update(CoursesRequest $request, string $id)
    {
        return CoursesService::update($id, $request);
    }

    public function trash(string $id)
    {
        return CoursesService::deleteSoft($id);
    }

    public function restore(string $id)
    {
        return CoursesService::restoreSoft($id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return CoursesService::delete($id);
    }
}
