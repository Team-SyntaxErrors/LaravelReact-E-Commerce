<?php

namespace App\Jobs;

use App\ProductTag;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SaveProductTagJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Request variable.
     *
     * @var array
     */
    private $request;

    /**
     * Product variable.
     *
     * @var array
     */
    private $product;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($product)
    {
        $this->request = request()->all();
        $this->product = $product;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if ($this->request['tags'][0]) {
            $data = [];
            foreach ($this->request['tags'] as $value) {
                $data[] = [
                    'product_id' => $this->product['product_id'],
                    'tags'       => $value,
                ];
            }
            ProductTag::insert($data);
        }
    }
}
