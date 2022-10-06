<?php 
require_once("index.php");
$record = new addProduct();
if(isset($_GET['SKU']) &&  isset($_GET['req'])){
    if($_GET['req'] == "delete"){
        $record->setSKU($_GET['SKU']);
        $record->delete();
    }
}

?>