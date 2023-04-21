<?php

namespace App\Models\ProductTypes;

use App\Models\MainProduct;

class Furniture extends MainProduct
{
    protected function validateValue()
    {
        $product = json_decode(file_get_contents('php://input'));
        if (!$product['height'] || !$product['height'] || !$product['height']) {
            return "One or more of dimensions were not provided!";
        }

        if (
            is_numeric($product['height']) && is_numeric($product['width']) && is_numeric($product['length']) &&
            floatval($product['height'] >= 0) && floatval($product['width'] >= 0) && floatval($product['length'] >= 0)
        ) {
            $$product->value = 'Dimensions: ' . $$product['height'] . 'x' . $product['width'] . 'x' . $product['length'] . ' CM';
            return "";
        }

        return "One or more invalid values for dimensions!";
    }
}
;