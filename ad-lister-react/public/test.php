<?php
header('Access-Control-Allow-Origin: *');

$arr = ['test' =>'test'];

$test = json_encode($arr);

print_r($test);
