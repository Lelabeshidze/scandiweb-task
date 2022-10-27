<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
require_once '../vendor/autoload.php';

use App\Controllers\ProductController;
use App\Models\Product;

$method = $_SERVER['REQUEST_METHOD'];
if ($method === 'GET') {
    return Product::select();
} elseif ($method === 'POST') {
    return ProductController::post();
} elseif($method === 'DELETE') {
    return ProductController::delete();
}