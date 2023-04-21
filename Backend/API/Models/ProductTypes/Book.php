<?php
namespace App\Models\ProductTypes;

use App\Models\MainProduct;
use App\Models\Product;

class Book extends MainProduct
{
    protected function validateValue()
    {
        $product = json_decode(file_get_contents('php://input'));
        if (!$product['weight']) {
            return "Weight was not provided!";
        }

        if (is_numeric($product['weight']) && floatval($product['weight'] >= 0)) {
            $product->value = 'Weight: ' . $product['weight'] . ' KG';
            return "";
        }

        return "Invalid value for weight!";
    }
}