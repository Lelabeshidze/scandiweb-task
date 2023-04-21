<?php
namespace App\Models\ProductTypes;

use App\Models\MainProduct;
use App\Models\Product;

class Invalid extends MainProduct
{
    protected function validateValue()
    {
        return "Validity of value couldn't be confirmed due to the product type being invalid!";
    }
}