<?php

namespace App\Helpers;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;

class UploadFileHelper
{
    public static function uploadFile(Request $request, ?string $id = null, ?string $repositoryClass = null)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['imageUrl'] = self::processImage($request->file('image'), 'images');
        }

        if ($id) {
            // Dynamically resolve repository
            $repository = app()->make($repositoryClass);

            // Remove old image if updating
            $existingCategory = $repository->findById($id);
            if ($existingCategory && isset($existingCategory->imageUrl)) {
                Storage::disk('public')->delete($existingCategory->imageUrl);
            }
        }

        return $data;
    }

    protected static function processImage(UploadedFile $file, string $dir)
    {
        // create new manager instance with desired driver
        $manager = new ImageManager(new Driver);

        // Generate a unique file name
        $filename = 'LMS-ACCESS-0x' . hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();

        // read image from filesystem then compress them :)
        $image = $manager->read($file);
        $image = $image->resize(300, 300);
        $image->toJpeg(80)->save(storage_path(self::pathStorage($dir, $filename)));

        // Prepare data with imageUrl
        return self::pathPublic($dir, $filename);
    }

    private static function pathPublic($dir, $filename): string
    {
        return "uploads/{$dir}/{$filename}";
    }

    private static function pathStorage($dir, $filename): string
    {
        return "app/public/uploads/{$dir}/{$filename}";
    }
}
