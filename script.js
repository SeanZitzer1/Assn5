function validateForm() {
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('rePassword').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const forbiddenUsernames = ["Admin", "Harry", "Potter", "HufflePuff"]; //These are some usernames just to test the function is all 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if (firstName.length < 2 || firstName.length > 50) {
        alert("First name should be between 2 and 50 characters.");
        return false; // Checks if the first name is in the min and max criteria does the same below for the last name as well
    }

    if (lastName.length < 2 || lastName.length > 50) {
        alert("Last name should be between 2 and 50 characters.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;     // Checks if  the email entered is a valid email address
    }

    if (forbiddenUsernames.includes(username)) {
        alert('Username already taken.');
        return false;     // This would check if the username was already taken but we don't have that ability here just yet
    }

    if(!password || !rePassword || !username || !email || !phone) {
        alert('Please fill out all fields.');
        return false;     // Checks if all the fields are filled out
    }

    if (password !== rePassword) {
        alert('Passwords do not match.');
        return false;     // Checks if the passwords entered by the user match
    }

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number in the format ###-###-####.');
        return false;     // Checks if the phone number entered is valid (formatting is also checked by the pattern attribute in HTML normally but I wanted it done here so the pop-up box for errors             matched)
    }

    return true;
}
