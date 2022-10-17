<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM products";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE SKU = :SKU";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':SKU', $path[3]);
            $stmt->execute();
            $products = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($products);
        break;

    case "POST":


        
        $product = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO products(SKU, productType,Name, Price, Size, Weight, Height, Length, Width) VALUES(:SKU,:productType,:Name,:Price,:Size,:Weight, :Height,:Length,:Width)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':SKU', $product->SKU);
        $stmt->bindParam(':productType', $product->productType);
        $stmt->bindParam(':Name', $product->Name);
        $stmt->bindParam(':Price', $product->Price);
        $stmt->bindParam(':Size', $product->Size);
        $stmt->bindParam(':Weight', $product->Weight);
        $stmt->bindParam(':Height', $product->Height);
        $stmt->bindParam(':Length', $product->Length);
        $stmt->bindParam(':Width', $product->Width);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;


    case "DELETE":

        $sql = "DELETE FROM products WHERE SKU = :SKU";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':SKU', $path[3]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
