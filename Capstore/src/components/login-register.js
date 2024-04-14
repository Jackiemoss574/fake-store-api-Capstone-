// login-register.js

// Function to handle user login
function loginUser(usernameOrEmail, password) {
    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: usernameOrEmail,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    })
    .then(data => {
        // Store authentication token in local storage
        localStorage.setItem('authToken', data.token);
        // Redirect user to dashboard or home page
        window.location.href = 'dashboard.html'; // Replace 'dashboard.html' with the desired destination after login
    })
    .catch(error => {
        // Handle login error
        console.error('Login error:', error.message);
        // Display error message to user
        alert('Login failed. Please check your credentials and try again.');
    });
}

// Function to handle user registration
function registerUser(fullName, email, password, confirmPassword) {
    // Validate password strength
    if (!isPasswordStrong(password)) {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Send registration request to the server
    fetch('https://fakestoreapi.com/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName: fullName,
            email: email,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        return response.json();
    })
    .then(data => {
        // Registration successful
        alert('Registration successful!');
        // You can redirect the user to another page or perform any other action here
    })
    .catch(error => {
        // Handle registration errors
        alert('Registration failed. Please try again later.');
        console.error('Registration error:', error);
    });
}

// Function to check password strength
function isPasswordStrong(password) {
    // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
}

// Add event listener to registration form
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve form input values
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    // Call the registerUser function with form input values
    registerUser(fullName, email, password, confirmPassword);
});

// Add event listener to login form
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve form input values
    const usernameOrEmail = document.getElementById('username-email').value;
    const password = document.getElementById('password').value;
    // Call the loginUser function with form input values
    loginUser(usernameOrEmail, password);
});

// Function to handle toggling between login and register forms
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

// Call showLoginForm on page load to display the login form by default
document.addEventListener('DOMContentLoaded', showLoginForm);
