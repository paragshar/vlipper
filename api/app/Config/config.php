<?php
	date_default_timezone_set('Asia/Calcutta');

    $config = array(       
        'App' => array(
            'yc_services'            => 'http://three.yourcabs.org/yc_services/',  
    		'USER_INACTIVITY_TIME'   => '300',        
        ),
        'Email' => array(
            'delivery' => 'smtp',
            'sendAs'   => 'both',
            'host'     => 'ssl://smtp.gmail.com',
            'port'     => 465,
            'timeout'  => 60,
            'name' => 'Vino Finder',
            'email' => 'noreply@yourcabs.com',
            'username' => 'noreply@yourcabs.com',
            'password' => 'cabs321'
        ),
        'Sms' => array(
            'userid' => '2000072265',
            'password' => 'cabs321',
        	'url' => 'http://enterprise.smsgupshup.com/GatewayAPI/rest?method=SendMessage&msg_type=TEXT&userid=2000072265&auth_scheme=plain&password=cabs321&v=1.1&format=text',        	
        ),
    );
?>
