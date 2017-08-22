<?php

include "./../bootstrap.php";

$term = Model::escape($_REQUEST['value']);

$list = Ad::search($term);

print(json_encode($list));

