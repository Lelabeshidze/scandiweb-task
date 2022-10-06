<?php 
// class DbConnect {
//     private $server = 'localhost';
//     private $dbname = 'products';
//     private $user = 'root';
//     private $password = '';
//     public function connect() {
//         try {
//             $connect = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->password);
//             $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//         } catch(\Exception $e) {
//             echo "Database Error: " . $e->getMessage();
//         }
//     }
// }
if(!defined("DB_TYPE")){
    define("DB_TYPE","mysql");
}
if (!defined("DB_HOST")){
    define("DB_HOST","localhost");
}
if(!defined("DB_NAME")){
    define("DB_NAME", "scandiwebtask");  
}
if(!defined("DB_PWD")){
    define("DB_PWD","");
}
if(!defined("DB_USER")){
    define("DB_USER","root");
}
?>