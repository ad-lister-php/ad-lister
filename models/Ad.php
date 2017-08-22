<?php
require_once __DIR__ . '/Model.php';
header('Access-Control-Allow-Origin: *');

/**
 *
 */
class Ad extends Model
{
    protected static $table = 'users_ads';

    /***** Search through user ads table ****/
    public static function search($title)
    {

        self::dbConnect();

        $query = "select * from " . self::$table . " where title like %:title%;";

        $stmt = self::$dbc->prepare($query);

        $stmt->bindValue(':title', $title, PDO::PARAM_STR);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);


        return $results;


    }

    public static function displayAll()
    {
        self::dbConnect();

        $query = "select id,title,seller,price,image from " . self::$table . ";";

        $stmt = self::$dbc->prepare($query);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        return $results;
    }


}

 ?>
