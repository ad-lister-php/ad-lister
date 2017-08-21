<!--Page for an index of advertisements-->
<?php
// session_start();
require __DIR__ . "./../../models/Ad.php";

$ads  = Ad::displayAll();

print(json_encode($ads));

 ?>
