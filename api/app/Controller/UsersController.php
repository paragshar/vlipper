<?php
class UsersController extends AppController{
	
	var $name = 'Users';
	var $uses = array('User', 'Mail', 'Friend');
	
	function beforeFilter(){
		$this->Auth->allow('login', 'add');
		parent::beforeFilter();
	}
	
	function login(){
		if(empty($this->data['User'])){
			throw new DataValidationException("Credentials required to login");
		}
		if ($this->Auth->login()) {
			$user = $this->Auth->user();
			if(!empty($this->data['User']['remember_me'])){
				setcookie('CakeCookie[User][id]', $this->_encrypt($this->Auth->user('id')), strtotime('+30 days', time()), '/','', false, false);
			}
			$this->output = $user;
		} else {
			throw new DataValidationException("Incorrect credentials");
		}
	}
	
	function add(){
		if(!empty($this->request->data)){
			if(empty($this->data['User']['password']))
				$this->request->data['User']['password'] = Security::hash(Configure::read('Security.salt').rand());
			else
				$this->request->data['User']['password'] = Security::hash(Configure::read('Security.salt').$this->data['User']['password']);
			
			if($this->User->save($this->request->data)){
				$this->output = "success";
			}else{
				$this->output = array_merge($this->User->invalidFields());
				throw new DataValidationException($this->output);
			}
		}else{
			throw new DataValidationException('Post data required to create user');
		}
	}
	
	function associates(){
		$user = $this->Auth->user();
		$user_id = empty($user['User']) ? $user['id'] : $user['User']['id'];
		$fields = array('Mail.sender_id');
		$distinct_senders = $this->Mail->find('all', array('fields'=>$fields, 'conditions'=>array('Mail.recipient_id'=>$user_id)));
		$fields = array('Mail.recipient_id');
		$distinct_recipients = $this->Mail->find('all', array('fields'=>$fields, 'conditions'=>array('Mail.sender_id'=>$user_id)));
		$associates = array();
		foreach($distinct_recipients as $recipient){
			$recipient_id = $recipient['Mail']['recipient_id'];
			if(!in_array($recipient_id, $associates))
				array_push($associates, $recipient_id);
		}
		
		foreach($distinct_senders as $sender){
			$sender_id = $sender['Mail']['sender_id'];
			if(!in_array($sender_id, $associates)){
				array_push($associates, $sender_id);
			}
		}
		$this->output = $associates;
	}
	
	function friends($search = ''){
		$user = $this->Auth->user();
		$user_id = empty($user['User']) ? $user['id'] : $user['User']['id'];
		$friends = $this->User->query("select users.id, users.name, users.email, friends.approved from users, friends where friends.user_id = $user_id and users.id = friends.friend_id and (users.email like '$search%' OR users.name like 'search%')");
		usort($friends, array(&$this, 'friend_sorter'));
		$this->output = $friends;
	}
	
	function friend_requests(){
		$user = $this->Auth->user();
		$user_id = empty($user['User']) ? $user['id'] : $user['User']['id'];
		$query = "select users.id, users.name, users.email, users.about_me, users.web, users.location, friends.approved from users, friends where friends.approved = 0 and friends.friend_id = $user_id and users.id = friends.user_id";
		$friends = $this->User->query($query);
		$this->log($friends, LOG_DEBUG);
		usort($friends, array(&$this, 'friend_sorter'));
		$this->output = $friends;
	}
	
	function friend_sorter($obj1, $obj2){
		$name1 = $obj1['users']['name'];
		$name2 = $obj2['users']['name'];
		return strcmp($name1, $name2);
	}
	
	function add_friend(){
		$user = $this->Auth->user();
		$user_id = empty($user['User']) ? $user['id'] : $user['User']['id'];
		$friend_asked_to_be_added = $this->User->find('first', array('conditions'=>array('email'=>$_REQUEST['email'])));
		if(!empty($friend_asked_to_be_added)){
			//check if he is already in firiends list
			$friend = $this->Friend->find('first', array('conditions'=>array('user_id'=>$user_id, 'friend_id'=>$friend_asked_to_be_added['User']['id'])));
			if(!empty($friend)){
				//friend is already added.
				$this->output = 'Friend already added';
			}else{
				$data = array('Friend'=>array('user_id'=>$user_id, 'friend_id'=>$friend_asked_to_be_added['User']['id']));
				$this->Friend->save($data);
				$this->output = $this->Friend->getLastInsertId();
			}
		}else{
			//sent invitation to email to join vlipper.
			$this->output = 'Invitation sent to friend to join vlipper';
		}
		
		
	}
	
	
	function approve_friend(){
		$user = $this->Auth->user();
		$user_id = empty($user['User']) ? $user['id'] : $user['User']['id'];
		$this->Friend->updateAll(array('approved'=>1), array('user_id'=>$_REQUEST['friend_id'], 'friend_id'=>$user_id));
		$data = array('Friend'=>array('user_id'=>$user_id, 'friend_id'=>$_REQUEST['friend_id'], 'approved'=>1));
		$this->Friend->save($data);
	}
	
	function profile(){
		$user = $this->Auth->user();
		$user_id = empty($user['User']) ? $user['id'] : $user['User']['id'];
		$this->output = $this->User->find('first', array('conditions'=>array('id'=>$user_id)));
	}
	
	function edit(){
		$this->log($_REQUEST, LOG_ERROR);
		$this->log($_FILES, LOG_ERROR);
		$user = $this->Auth->user();
		$user_id = empty($user['User']) ? $user['id'] : $user['User']['id'];
		$user = $this->User->find('first', array('conditions'=>array('id'=>$user_id), 'recursive'=>-1));
		if(!empty($_POST['name']))
			$user['User']['name'] = $_POST['name'];
		if(!empty($_POST['location']))
			$user['User']['location'] = $_POST['location'];
		if(!empty($_POST['web']))
			$user['User']['web'] = $_POST['web'];
		if(!empty($_POST['about_me']))
			$user['User']['about_me'] = $_POST['about_me'];
		$this->User->save($user);
		if(!empty($_FILES["media"]["tmp_name"]) && !empty($_FILES["media"]["name"]))
			move_uploaded_file($_FILES["media"]["tmp_name"] , "/var/www/vlipper/app/webroot/img/".$_FILES["media"]["name"]);
	}
}