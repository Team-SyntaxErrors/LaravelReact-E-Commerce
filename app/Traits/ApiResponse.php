<?php

namespace App\Traits;

use Illuminate\Http\Response;

trait ApiResponse
{
    /**
     * Success Response Function
     *
     * @param mixed  $data    Value.
     * @param string $message Success message.
     * @param mixed  $code    Success response status code.
     * @return object
     */
    protected function successResponse($data, string $message = null, $code = Response::HTTP_OK)
    {
        return response()->json([
            'status'  => 'Success',
            'message' => $message,
            "code"    => $code,
            'data'    => $data,
        ], $code);
    }

    /**
     * Error response function
     *
     * @param string $message Error message.
     * @param mixed  $code    Error response status code.
     * @return object
     */
    protected function errorResponse(string $message = null, $code = Response::HTTP_BAD_REQUEST)
    {
        return response()->json([
            'status'  => 'Error',
            'message' => $message,
            "code"    => $code,
            'data'    => null,
        ], $code);
    }
}
