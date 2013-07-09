<?php
App::uses('DataValidationException', 'Error/Exception');
App::uses('UnauthorizedAccessAttemptException', 'Error/Exception');

class AppController extends Controller{
	var $components = array(
	    'Auth'=>array('authenticate'=> array('Form'=>array('fields'=>array('username' => 'email', 'password' => 'password')))),
	    'Session',
	    'Email', 'Cookie'
	);
	
	var $appConfigurations;
	var $output;
	var $uses = array('Client');

	function beforeFilter(){
		parent::beforeFilter();
		$this->appConfigurations = Configure::read('App');
		$this->set('appConfigurations', $this->appConfigurations);
		$this->authorize();
		$this->autoRender = false;
		
		if(isset($this->Auth)) {
			if(!$this->Auth->user()) {
				$id = $this->Cookie->read('User.id');
				if($id) {
					$user = $this->User->read(null, $id);
					if($this->Auth->login($user)){
						$this->log("user with id $id logged in", LOG_DEBUG);
						$this->Session->delete('Message.Auth');
					}else{
						$this->Cookie->delete('User.id');
					}
				}else{
					$this->log('User Cookie not sent', LOG_DEBUG);
				}
			}else{
					$this->log('User is logged in', LOG_DEBUG);
					$this->log($this->Auth->user(), LOG_DEBUG);
				}
		}
	}
	
	function authorize(){
		$logged_user = $this->Auth->user();
		if(isset($this->params['prefix']) && $this->params['prefix'] == 'admin'){
			if(empty($logged_user)){
				throw new UnauthorizedAccessAttemptException('You need to be logged in to access the admin resource.');
			}else if(empty($logged_user['admin'])){
				throw new UnauthorizedAccessAttemptException('You are not allowed to access the admin area.');
			}
		}
	}

	/**
	 * Function to send email
	 *
	 * @param array $data An array containing smtp parameter including body
	 * @return boolean Return true if success, false otherwise
	 */
	function _sendEmail($data, $attachment = null) {
		$this->emailConfigurations = Configure::read('Email');
		if(!empty($data)) {
			// Array for configurations
			$configurations = array();
			// Optional, I will use main configuraiton or mail if empty
			if(!empty($data['delivery'])){
				$this->Email->delivery = $data['delivery'];
			} else {
				$this->Email->delivery = $this->emailConfigurations['delivery'];
			}
				
			// If the delivery is smtp, then put the smtp configurations
			if($this->Email->delivery == 'smtp') {
				// Check configurations
				foreach(Configure::read('Email') as $name => $value){
					if(!empty($value)){
						$configurations[$name] = $value;
					}
				}
				$configurations['delivery'] = 'smtp';
				$configurations['sendAs'] = 'both';
				// Put email options
				$this->Email->smtpOptions = $configurations;
			}
				
			// Required parameter, will use app default if not set
			if(!empty($data['from'])){
				$this->Email->from = trim($data['from']);
			} else {
				//$this->Email->from = $configurations['name'].' <'.$configurations['email'].'>';
			}

			// Required parameter, will return false if not set
			if(!empty($data['to'])){
				$this->Email->to = trim($data['to'].'<'.$data['to'].'>');
				$this->set('recipient', $this->Email->to);
			}else{
				$this->log('_sendMail(), the \'to\' parameter cannot be empty');
				return false;
			}

			// Required parameter, will return false if not set
			if(!empty($data['subject'])){
				$this->Email->subject = trim($data['subject']);
			}else{
				$this->log('_sendMail(), the \'subject\' parameter cannot be empty');
				return false;
			}

			// Required parameter, will return false if not set
			if(!empty($data['template'])){
				$this->Email->template = $data['template'];
			}else{
				$this->log('_sendMail(), the \'template\' parameter cannot be empty');
			}

			// Optional, I will use both if main conf/passed data empty
			if(!empty($data['sendAs'])){
				$this->Email->sendAs = $data['sendAs'];
			}else{
				if(!empty($this->emailConfigurations['sendAs'])){
					$this->Email->sendAs = $this->emailConfigurations['sendAs'];
				}else{
					$this->Email->sendAs = 'both';
				}
			}

			// Optional, I will use default if empty
			if(!empty($data['layout'])){
				$this->Email->layout = $data['layout'];
			}else{
				if(!empty($this->emailConfigurations['layout'])) {
					$this->Email->layout = $this->emailConfigurations['layout'];
				}else{
					$this->Email->layout = 'default';
				}
			}

			// Optional, can be empty
			if(!empty($data['cc'])){
				if(is_array($data['cc'])){
					foreach($data['cc'] as $key => $address){
						// Trim address from any whitespace
						$data['cc'][$key] = trim($address);
					}
				}else{
					$this->Email->cc = trim($data['cc']);
				}
			}

			// Optional, can be empty
			if(!empty($data['bcc'])){
				if(is_array($data['bcc'])){
					foreach($data['bcc'] as $key => $address){
						$data['bcc'][$key] = trim($address);
					}
				}else{
					$this->Email->cc = trim($data['bcc']);
				}
			}
			
			//Optional can be empty
			if(!empty($data['replyTo'])){
				$this->Email->replyTo = $data['replyTo'];
			}

			// Set the data to template
			$this->set('data', $data);

			//Set the attachment
			if(!empty($attachment)){
				$this->Email->attachments[] = $attachment;
				$this->Email->filePaths[] = '../tmp/';
			}

			// Send the email
			if($this->Email->send()){
				return true;
			}else{
				if($this->Email->delivery == 'smtp'){
					$this->log(sprintf('_sendMail(), sending email failed. %s', $this->Email->smtpError));
				}else{
					$this->log('_sendMail(), sending email failed.');
				}
				return false;
			}
		}else{
			$this->log('_sendMail(), data parameter required.');
			return false;
		}
	}

	function service_request($url, $data, $method="POST"){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_HEADER, 0);
		if($method=="POST"){
			curl_setopt($ch,CURLOPT_POST,count($data));
			curl_setopt($ch,CURLOPT_POSTFIELDS,$data);
		}
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //Set curl to return the data instead of printing it to the browser.
		curl_setopt($ch, CURLOPT_URL, $url);
		$str = curl_exec($ch);
		curl_close($ch);
		return $str;
	}

	function object_2_array($result)
	{
		$array = array();
		foreach ($result as $key=>$value)
		{
			if (is_object($value))
			{
				$array[$key]=$this->object_2_array($value);
			}
			elseif (is_array($value))
			{
				$array[$key]=$this->object_2_array($value);
			}
			else
			{
				$array[$key]=$value;
			}
		}
		return $array;
	}

	function check_exists($field_name, $value, $Model){
		if(is_array($field_name)){
			$key_field_count = 0;
			$final_res = array();
			foreach($field_name as $field){
				$key = $Model.".".$field;
				$final_res[$key] = $value[$key_field_count];
				$key_field_count++;
			}
			$check_exists = $this->$Model->find('count',array('conditions'=>$final_res,'recursive'=>-1));
		} else {
			$check_exists = $this->$Model->find('count',array('conditions'=>array($Model.'.'.$field_name=>$value),'recursive'=>-1));
		}
		if(!$check_exists){
			$this->output = "No Records found";
		}
		return $check_exists;
	}

	function unsetField($data_array, $key, $field){
		if(isset($data_array[$key][$field])){
			unset($data_array[$key][$field]);
		} else if(isset($data_array[$field])){
			unset($data_array[$field]);
		}
		return $data_array;
	}
	
	function validate_client_api_key($api_key){
		$fields = array('Client.vendor_id');
		$client = $this->Client->find('first',array('conditions'=>array('Client.key'=>$api_key,'Client.is_active'=>1),'recursive'=>-1));
		if($client){
			return true;
		} else {
			return false;
		}
	}
	
	public function _encrypt($value) {
		$type = 'cipher';
		$value = "Q2FrZQ==." . base64_encode(Security::$type($value, Configure::read('Security.salt')));
		return $value;
	}

	function afterFilter(){
		$response = array('status'=>200, 'result'=>$this->output);
		$json_response = json_encode($response);
		echo $json_response;
	}
}

?>