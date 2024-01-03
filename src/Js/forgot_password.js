function sendEmail() {
    // Get the entered email and OTP
    var email = document.getElementById('emailIdInput').value;
    var otp = document.getElementById('otpInput').value;

    // Check if the email is empty
    if (email.trim() === '') {
        alert('Email is required. Please enter a valid email address.');
        return;
    }

    // Check if the OTP is empty
    if (otp.trim() === '') {
        alert('OTP is required. Please enter the received OTP.');
        return;
    }

    //make an AJAX request to the server to send the email and verify the OTP
    
    // For demonstration purposes, added an alert indicating the email and OTP values
    alert('Sending email to ' + email + ' with OTP: ' + otp);
}