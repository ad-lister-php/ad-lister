<?php

include './../../bootsrap.php';

$ads = Ad::displayAll();

print(json_encode($ads));

 ?>
