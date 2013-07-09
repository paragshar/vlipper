<?php
class Mail extends AppModel{
	
	var $name = 'Mail';
	var $belongsTo = array(
			'Sender'=>array(
					'className'=>'User', 
					'foreignKey'=>'sender_id'
					),
			'Recipient'=>array(
					'className'=>'User',
					'foreignKey'=>'recipient_id'
					)
			);
}