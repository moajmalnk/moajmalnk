<?php
// Get the screenshot data from the POST request
$screenshotData = $_POST['screenshot'];

// Remove the data URI scheme (e.g., "data:image/png;base64,") from the screenshot data
list($type, $screenshotData) = explode(';', $screenshotData);
list(, $screenshotData)      = explode(',', $screenshotData);

// Decode the base64-encoded screenshot data
$screenshotData = base64_decode($screenshotData);

// Specify the directory to save the screenshots
$directory = 'assets/img/screenshot/';

// Generate a unique filename for the screenshot (you can customize the filename as per your requirement)
$filename = $directory . 'screenshot_' . uniqid() . '.png';

// Save the screenshot to the specified directory
file_put_contents($filename, $screenshotData);

// Respond with a success message or any other response as needed
echo 'Screenshot saved successfully.';
?>
