<?php

namespace App\Models\ProductTypes;

use App\Models\MainProduct;
use App\Models\Product;

class Furniture extends MainProduct
{
    public function validateValue()
    {
        $createProduct = new Product();
        $createProduct->createProduct();
        $product = json_decode(file_get_contents('php://input'));
        if (!$product['height'] || !$product['height'] || !$product['height']) {
            return "One or more of dimensions were not provided!";
        }

        if (
            is_numeric($product['height']) && is_numeric($product['width']) && is_numeric($product['length']) &&
            floatval($product['height'] >= 0) && floatval($product['width'] >= 0) && floatval($product['length'] >= 0)
        ) {
            $$product->value = 'Dimensions: ' . $$product['height'] . 'x' . $product['width'] . 'x' . $product['length'] . ' CM';
            return $createProduct;
        }

        return "One or more invalid values for dimensions!";
    }
}
;