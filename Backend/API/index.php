<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
require_once '../vendor/autoload.php';


use App\Models\Product;


$method = $_SERVER['REQUEST_METHOD'];
if ($method === 'GET') {

    $products = new Product();
    $products->select();
    return $products;
} elseif ($method === 'POST') {
    $createProduct = new Product();
    $createProduct->createProduct();
    return $createProduct;
} elseif ($method === 'DELETE') {
    $deleteProduct = new Product();
    $deleteProduct->deleteProduct();
    return $deleteProduct;
}