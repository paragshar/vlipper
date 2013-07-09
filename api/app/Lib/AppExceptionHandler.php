<?php
class AppExceptionHandler {
	public static function handle(Exception $exception) {
		CakeLog::write(LOG_ERROR, $exception->getMessage());
		CakeLog::write(LOG_ERROR, $exception->getTraceAsString());
		echo json_encode(array('status'=>$exception->getCode(), 'result'=>json_decode($exception->getMessage())));
	}
}