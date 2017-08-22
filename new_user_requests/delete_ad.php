<?php

include __DIR__ . "../bootstrap.php";

$ad = Ad::find($_REQUEST['id']);

if ($ad) {
	delete($ad['id']);
	$successful['success'] = true;
}
else {
	$successful['success'] = false;
}

print(json_encode($succesful));

?>
