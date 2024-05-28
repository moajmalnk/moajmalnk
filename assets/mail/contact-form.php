<?php
// Get form input data
$conName = isset($_POST['conName']) ? $_POST['conName'] : '';
// $conLName = isset($_POST['conLName']) ? $_POST['conLName'] : '';
$conEmail = isset($_POST['conEmail']) ? $_POST['conEmail'] : '';
$conPhone = isset($_POST['conPhone']) ? $_POST['conPhone'] : '';
$conService = isset($_POST['conService']) ? $_POST['conService'] : '';
$conMessage = isset($_POST['conMessage']) ? $_POST['conMessage'] : '';

// Set recipient email address
$recipient = "moajmal@hackschool.io";

// Construct the email subject
$subject = "New message from $conName";

// Construct the email body
$message = "You have a new message from your Ajmal Nk website Contact Form\n";
$message .= "=============================\n\n";
$message .= "Full Name: $conName\n";
$message .= "Email: $conEmail\n";
$message .= "Phone: $conPhone\n";
$message .= "Service: $conService\n";
$message .= "Message: $conMessage\n";

// Set additional email headers
$headers = "From: $conName <$conEmail>\r\n";
$headers .= "Reply-To: $conEmail\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Attempt to send the email
if (mail($recipient, $subject, $message, $headers)) {
    // Email sent successfully
    echo "Y";
} else {
    // Email sending failed
    echo "N";
}
?>
