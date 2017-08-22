<?php

include __DIR__ . "../bootstrap.php";

$ad = Ad::find(Auth::id());

if ($ad) {
	delete($ad['id']);
	$successful['success'] = true;
}
else {
	$successful['success'] = false;
}

print(json_encode($succesful));

?>
