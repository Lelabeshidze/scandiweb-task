<?php

namespace App\Core;

use PDO;

include(__DIR__ . '../../Config/Config.php');
class DbConnect
{

    public function connect()
    {
        try {
            $connPdo = new PDO(DBDRIVE . ': host=' . DBHOST . '; dbname=' . DBNAME, DBUSER, DBPASS);
            $connPdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return  $connPdo;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}
