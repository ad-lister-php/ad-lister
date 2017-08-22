<?php

include "./../bootstrap.php";

$ad = Ad::find($_REQUEST['id']);

if ($ad) {
	Ad::delete($ad['id']);
	$successful['success'] = true;
}
else {
	$successful['success'] = false;
}

print(json_encode($successful));

?>
