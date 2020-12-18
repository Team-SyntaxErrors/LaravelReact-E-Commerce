<?php
namespace App\Traits;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

trait ImageUpload
{
    /**
     * Verifying image and moving image
     *
     * @param Illuminate\Http\Request $request     Get requested data.
     * @param string                  $field_name  Get field name of image.
     * @param string                  $folder_name Get folder name for moving file.
     * @param integer                 $height      Image height to resize.
     * @param integer                 $width       Image Width to resize.
     * @return object
     */
    public function verifyStore(
        Request $request,
        string $field_name,
        string $folder_name,
        int $height = 300,
        int $width = 300
    ) {
        $position = strpos($request->$field_name, ";");
        $sub_str = substr($request->$field_name, 0, $position);
        $extension = explode("/", $sub_str);
        $allowed = Helper::ImageExtension($extension[1]);
        if ($allowed == "Allowed") {
            $upload_path = "backend_assets/images/" . $folder_name . "/" . time() . "." . $extension[1];
            $image_upload = Image::make($request->$field_name)->resize($height, $width);
            $image_upload->save($upload_path);
            return $upload_path;
        } else {
            $status = 400;
            $response = [
                'errors' => ['project_logo_ext' => $allowed],
                'status' => 400,
            ];
            return response()->json($response, $status);
        }
    }
}
