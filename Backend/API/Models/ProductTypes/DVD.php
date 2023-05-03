<?php
namespace App\Models\ProductTypes;

use App\Models\MainProduct;
use App\Models\Product;

class DVD extends MainProduct
{
    public function validateValue()
    {
        $createProduct = new Product();
        $createProduct->createProduct();
        $product = json_decode(file_get_contents('php://input')); {
            if ($product['size']) {
                return "Size was not provided!";
            }

            if (is_numeric($product['size']) && floatval($product['size'] >= 0)) {
                $product->value = 'Size: ' . $product['size'] . ' MB';
                return $createProduct;
            }

            return "Invalid value for size!";
        }
    }
}
;