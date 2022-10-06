<?php
if(isset($_POST['save'])){
require_once("index.php");
$sc = new addProduct();
$sc->setSKU($_POST['SKU']);
$sc->setName($_POST['Name']);
$sc->setPrice($_POST['Price']);
$sc->setSize($_POST['Size']);
$sc->setWeight($_POST['Weight']);
$sc->setHeight($_POST['Height']);
$sc->setLength($_POST['Length']);
$sc->setWidth($_POST['Width']);
$sc->insertData();
}


?>