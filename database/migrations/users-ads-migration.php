<?php

$_ENV = include __DIR__ . "/../../.env.php";
require_once "../db_connect.php";

$dbc->exec("DROP TABLE IF EXISTS users_ads");

$query = "CREATE TABLE users_ads (
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		seller INT UNSIGNED,
		title VARCHAR(128),
		price INT UNSIGNED,
		description TEXT,
		image VARCHAR(128),
		PRIMARY KEY (id),
		FOREIGN KEY (seller) REFERENCES users (id)
		)";

$dbc->exec($query);
