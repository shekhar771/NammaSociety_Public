

function showId() {
    var userId = document.getElementById('userIdInput').value;
    var password = document.getElementById('passwordInput').value;
    var userIdError = document.getElementById('userIdError');
    var passwordError = document.getElementById('passwordError');

    userIdError.innerHTML = '';
    passwordError.innerHTML = '';
// for required field prompt
    if (userId.trim() === '') {
        userIdError.innerHTML = '*Required';
    }

    if (password.trim() === '') {
        passwordError.innerHTML = '*Required';
    }

    if (userId.trim() !== '' && password.trim() !== '') {
        // for checking it credential matches, we have given dummy values
        if (userId === 'Saroja_9827' && password === '12345678') {
            // will redirect to the nect page as of now this message
            alert('Login Successful');
        } else {
            alert('ID or password does not match. Please try again.');
        }
    }
}
