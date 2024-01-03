function submitReset() {
    const password1 = document.getElementById('passwordInput1').value;
    const password2 = document.getElementById('passwordInput2').value;
    if (password1 !== password2) {
      alert('Passwords do not match. Please re-enter.');
      return;
    }
  
    fetch('/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: password1 }),
    })
    .then(response => {
      if (response.ok) {
        alert('Password reset successful.');
      } else {
        alert('Failed to reset password. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  }
  