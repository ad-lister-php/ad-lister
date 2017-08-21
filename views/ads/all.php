<!--Page for an index of advertisements-->
<?php
session_start();
require "../../models/Ad.php";

$ads  = Ad::displayAll();

print(json_encode($ads));

 ?>
