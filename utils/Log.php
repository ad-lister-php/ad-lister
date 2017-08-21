<?php

class Log 
{

	function logMessage($logLevel, $logMessage) {
		$log = date("Y-m-d H:i:s") . " ";
		$log .= $logLevel . $logMessage;
		$_ENV = include __DIR__ . "/../../.env.php";
		require_once "../db_connect.php";

		$query = "INSERT INTO login_attmepts (record)
				VALUE (" . $log . ")";

		$dbc->exec($query);
	}

	function info($message) {
		$this->logMessage("INFO", $message);
	}
	
	function error($message) {
		$this->logMessage("ERROR", $message);
	}
}

?>
