<?php
class User extends AppModel{

	var $name = 'User';
	
	var $hasMany = array(
			'MailSent'=>array(
					'className'=>'Mail', 
					'foreignKey'=>'sender_id'
					),
			'MailReceived'=>array(
					'className'=>'Mail',
					'foreignKey'=>'recipient_id'
					)
			);
}