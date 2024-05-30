function validateForm() {
    const username = document.getElementsByName('username')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;

    // Validate username: no special characters
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
        alert('Username should not contain special characters.');
        return false;
    }

    // Validate email: standard email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

       // Validate password: at least one uppercase letter, one number, and one special character
       const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
       if (!passwordRegex.test(password)) {
           alert('Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.');
           return false;
       }

    return true;
}
