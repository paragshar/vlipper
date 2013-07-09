<?php
class MailsController extends AppController{
	
	var $name = 'Mails';
	var $uses = array('Mail', 'User', 'MailRecipient');
	
	function beforeFilter(){
		parent::beforeFilter();
	}
	
	function inbox(){
		$user = $this->Auth->user();
		$user_id = empty($user['User']) ? $user['id'] : $user['User']['id'];
		$this->log('getting inbox mails for user_id : '.$user_id, LOG_DEBUG);
		$fields = array('Mail.*', 'Sender.name', 'Sender.id', 'Sender.email');
		$mails = $this->Mail->find('all', array('fields'=>$fields, 'conditions'=>array('Recipient.id'=>$user_id, 'deleted_for_recipient !='=>1), 'recursive'=>0, 'order'=>'Mail.created DESC'));
		$this->output = $mails;
	}
	
	function sent_mails(){
		$user = $this->Auth->user();
		$user_id = empty($user['User']) ? $user['id'] : $user['User']['id'];
		$fields = array('Mail.*', 'Recipient.name', 'Recipient.id');
		$mails = $this->Mail->find('all', array('fields'=>$fields, 'conditions'=>array('Sender.id'=>$user_id, 'deleted_for_sender !='=>1), 'recursive'=>0, 'order'=>'Mail.created DESC'));
		$this->output = $mails;
	}
	
	function send(){
		$this->log($_REQUEST['to'], LOG_DEBUG);
		$this->log($_REQUEST['subject'], LOG_DEBUG);
		$user = $this->Auth->user();
		$user_id = empty($user['User']) ? $user['id'] : $user['User']['id'];
		
		$data = array();
		
		$data['Mail']['sender_id'] = $user_id;
		if(!empty($_REQUEST['subject']))
			$data['Mail']['subject'] = $_REQUEST['subject'];
		else
			$data['Mail']['subject'] = 'No Subject';
		
		$recipient = $this->User->find('first', array('conditions'=>array('id'=>$_REQUEST['to'])));
		if(!empty($recipient)){
			$data['Mail']['recipient_id'] = $recipient['User']['id'];
			$this->Mail->save($data);
			$mail_id = $this->Mail->getLastInsertId();
		
			//save video
			$name = $mail_id.'.MOV';
			move_uploaded_file($_FILES["media"]["tmp_name"] , "/var/www/vlipper/app/webroot/img/media/".$name);
		}
		$this->output = 'success';
	}
	
	function delete_from_inbox($mail_id){
		$user = $this->Auth->user();
		$user_id = empty($user['User']) ? $user['id'] : $user['User']['id'];
		$this->Mail->updateAll(array('deleted_for_recipient'=>1), array('Mail.id'=>$mail_id, 'Mail.recipient_id'=>$user_id));
		$this->output = 'success';
	}
	
	function delete_from_outbox($mail_id){
		$user = $this->Auth->user();
		$user_id = empty($user['User']) ? $user['id'] : $user['User']['id'];
		$this->Mail->updateAll(array('deleted_for_sender'=>1), array('Mail.id'=>$mail_id, 'Mail.sender_id'=>$user_id));
		$this->output = 'success';
	}
}
