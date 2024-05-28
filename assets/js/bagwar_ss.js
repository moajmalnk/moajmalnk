document.getElementById('downloadCV').addEventListener('click', function () {
    takeScreenshot();
});

function takeScreenshot() {
    html2canvas(document.body).then(function (canvas) {
        // Convert canvas to image
        var screenshot = canvas.toDataURL('image/png');

        // Send screenshot data to the server
        saveScreenshot(screenshot);
    });
}

function saveScreenshot(screenshotData) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'assets/php/save_screenshot.php'); // Corrected file path
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Screenshot saved successfully.');
        } else {
            console.error('Error saving screenshot:', xhr.statusText);
        }
    };
    xhr.send('screenshot=' + encodeURIComponent(screenshotData));
}
