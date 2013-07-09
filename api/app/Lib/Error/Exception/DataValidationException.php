<?php

class DataValidationException extends HttpException {
	protected $_messageTemplate = 'Controller class %s could not be found.';

	public function __construct($data, $code = 400) {
		parent::__construct(json_encode($data), $code);
	}
}