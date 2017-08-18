<?php

class Log 
{
	private $filename;
	private $handle;

	function __construct($prefix = "log") {
		$this->filename = $prefix  . "-" . date("Y-m-d") . ".log";
		$this->handle = fopen($this->filename, "a");
	}

	function __destruct() {
		fclose($this->handle);
	}

	function logMessage($logLevel, $logMessage) {
		$log = date("Y-m-d H:i:s") . " ";
		$log .= "[" .$logLevel . "] " . $logMessage . PHP_EOL;
		fwrite($this->handle, $log);
	}

	function info($message) {
		$this->logMessage("INFO", $message);
	}
	
	function error($message) {
		$this->logMessage("ERROR", $message);
	}
}

?>
