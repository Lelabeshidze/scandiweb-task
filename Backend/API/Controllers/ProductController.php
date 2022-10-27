<?php

namespace App\Controllers;

use App\Models\Product;

class ProductController
{
    public static  function get()
    {
        return Product::select();
    }
    public static function post()
    {
        return Product::createProduct();
    }
    public static function delete()
    {
        return Product::deleteProduct();
    }
}
