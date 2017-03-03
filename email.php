<?php

	// only process post requests
	if($_SERVER["REQUEST_METHOD"] == "POST") {
		//get the form fields and remove whitespace.
		$name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" ", " "),$name);
		$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
		$phone = strip_tags(trim($_POST["phone"]));
		$category = $_POST["category"];
		$message = trim($_POST["message"]);

	// check name and email data
	if (empty($name) OR empty($email) OR !filter_var($email,FILTER_VALIDATE_EMAIL)) {
		echo "Oops! There was a problem with your submission.";
		exit;
	}

	// create phpmailer
	require_once('PHPMailer_5.2.4/class.phpmailer.php');

	$mail = new PHPMailer();

	$body =
	"FROM: " . $name . "\n" .
	"EMAIL: " . $email . "\n" .
	"PHONE NO: " . $phone . "\n" .
	"APP CATEGORY: " . $category . "\n" .
	"MESSAGE: " . $message;

	$mail->IsSMTP(); // set mailer to use SMTP
	$mail->Host = "";  // specify smtp server
	$mail->SMTPAuth = true;     // turn on SMTP authentication
	$mail->SMTPSecure = "ssl";
	$mail->Port = ; // smtp port
	$mail->Username = "";  // SMTP username
	$mail->Password = ""; // SMTP password

	$mail->SetFrom(''); // Sender's email
	$mail->AddAddress(""); // Receiver email 1
	$mail->WordWrap = 80;
	$mail->IsHTML(true);

	$mail->Subject = "You've got a message from " . $name;
	$mail->MsgHTML($body);

	// error msg occured if the email could not be sent
	if(!$mail->Send())
	{
	   echo "Message could not be sent. <p>"; // error msg
	   echo "Mailer Error: " . $mail->ErrorInfo;
	   exit;
	} else {
	// else, call response code 200(success)
    http_response_code(200);
    echo "Thank you for your message, we'll get back to you soon!";
    }
    }
?>
