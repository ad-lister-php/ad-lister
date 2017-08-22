<?php

include "./../bootstrap.php";

$term = $_REQUEST['value'];

$list = Ad::search($term);

print(json_encode($list));

