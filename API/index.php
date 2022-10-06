<?php
require_once("database.php");

class addProduct
{
    private $SKU;
    private $Name;
    private $Price;
    private $Size;
    private $Weight;
    private $Height;
    private $Length;
    private $Width;

    public function __construct(
        $SKU = 0,
        $Name = "",
        $Price = "",
        $Size = "",
        $Weight = "",
        $Height = "",
        $Length = "",
        $Width = ""
    ) {
        $this->SKU = $SKU;
        $this->Name = $Name;
        $this->Price = $Price;
        $this->Size = $Size;
        $this->Weight = $Weight;
        $this->Height = $Height;
        $this->Length = $Length;
        $this->Width = $Width;
        $this->dbCnx = new PDO(DB_TYPE.":host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PWD,[ PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    }
    public function setSKU($SKU)
    {
        $this->SKU = $SKU;
    }
    public function getSKU($SKU)
    {
        return $this->SKU;
    }
    public function setName($Name)
    {
        $this->Name = $Name;
    }
    public function getName($Name)
    {
        return $this->Name;
    }
    public function setPrice($Price)
    {
        $this->Price = $Price;
    }
    public function getPrice($Price)
    {
        return $this->Price;
    }
    public function setSize($Size)
    {
        $this->Size = $Size;
    }
    public function getSize($Size)
    {
        return $this->Size;
    }
    public function setWeight($Weight)
    {
        $this->Weight = $Weight;
    }
    public function getWeight($Weight)
    {
        return $this->Weight;
    }
    public function setHeight($Height)
    {
        $this->Height = $Height;
    }
    public function getHeight($Height)
    {
        return $this->Height;
    }
    public function setLength($Length)
    {
        $this->Length  = $Length;
    }
    public function getLength($Length)
    {
        return $this->Length;
    }
    public function setWidth($Width)
    {
        $this->Width  = $Width;
    }
    public function getWidth($Width)
    {
        return $this->Width;
    }
    public function insertData()
    {
        try {
            $stm = $this->dbCnx->prepare("INSERT INTO products(
            SKU,
            Name, 
            Price,
            Size ,
            Weight,
            Height,
            Length,
            Width) values(?,?,?,?,?,?,?,?) ");
            $stm->execute([$this->SKU, $this->Name, $this->Price, $this->Size, $this->Weight, $this->Height, $this->Length, $this->Width]);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    public function fetchAll()
    {
        try {
            $stm = $this->dbCnx->prepare("SELECT * FROM products");
            $stm->execute();
            return $stm->fetchAll();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function delete()
    {
        try {
            $stm = $this->dbCnx->prepare("DELETE FROM products WHERE SKU =?");
            $stm->execute([$this->SKU]);
            return $stm->fetchAll();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}
