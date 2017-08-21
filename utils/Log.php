<?php
require_once "../models/Model.php";
class Log extends Model
{
	protected static $table = 'login_attempts';
	public static function logMessage($logLevel, $logMessage) {
		self::dbConnect();
		$log = date("Y-m-d H:i:s") . " ";
		$log .= $logLevel . $logMessage;

		$query = "
		insert into " . self::$table . "(record)
		VALUE ("."'". $log ."'".")";

		$stmt = self::$dbc->prepare($query);
		$stmt->execute();
	}

	public static function info($message) {
		self::logMessage("INFO", $message);
	}

	public static function error($message) {
		self::logMessage("ERROR", $message);
	}
}

?>
