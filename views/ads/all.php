<?php

include './../bootstrap.php';

$ads = Ad::displayAll();

print(json_encode($ads));

 ?>
