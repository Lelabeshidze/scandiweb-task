<?php
namespace App\Models\ProductTypes;

use App\Models\MainProduct;

class DVD extends MainProduct
{
    protected function validateValue()
    {
        $product = json_decode(file_get_contents('php://input'));
        {
            if ( $product['size']) {
                return "Size was not provided!";
            }
    
            if (is_numeric( $product['size']) && floatval( $product['size'] >= 0)) {
                $product->value = 'Size: ' .  $product['size'] . ' MB';
                return "";
            }
    
            return "Invalid value for size!";
        }
    }
};