<?php

namespace App\Controllers;


abstract class ProductController
{

    abstract protected function select();
    abstract protected function createProduct();
    abstract protected function deleteProduct();
}