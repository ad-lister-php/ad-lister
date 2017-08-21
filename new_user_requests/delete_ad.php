<?php

require_once __DIR__ . "../models/Ad.php";

$ad = Ad::find($this->id);

if ($ad) {
	delete($this->id);
	$successful['success'] = true;
}
else {
	$successful['success'] = false;
}

print(json_encode($succesful));

?>
