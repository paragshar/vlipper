<?php
class Friend extends AppModel{
	
	var $name = 'Friend';
	var $belongsTo = array('User');
}