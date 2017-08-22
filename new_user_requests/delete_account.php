<?php

require "../models/User.php";
require "../models/Ad.php";

$user = User::find($this->id);

if ($user) {
	$ads = Ad:all();
	foreach ($ads as $ad) {
		if ($user->username == $ad->seller) {
			$ad->delete();
		}
	}
	$user->delete();
	$successful['success'] = true;
}
else {
	$successful['success'] = false;
}

print (json_encode($succesful));

?>