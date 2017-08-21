<?php

$_ENV = include __DIR__ . "/../../.env.php";
require_once "../db_connect.php";

$dbc->exec("DROP TABLE IF EXISTS login_attmepts");

$query = "CREATE TABLE login_attempts (
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		record VARCHAR(128),
		PRIMARY KEY (id)
		)";

$dbc->exec($query);
