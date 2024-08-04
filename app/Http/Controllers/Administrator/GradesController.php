<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Services\Administrator\GradesService;
use App\Http\Requests\Administrator\GradesRequest;

class GradesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return GradesService::getAllGrades();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(GradesRequest $request)
    {
        return GradesService::storeGrade($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return GradesService::getGrade($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(GradesRequest $request, string $id)
    {
        return GradesService::updateGrade($id, $request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return GradesService::deleteGrade($id);
    }
}
