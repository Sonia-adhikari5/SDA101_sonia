// ...existing code...
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const registerBtn = document.getElementById('registerBtn');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const errorMessages = document.getElementById('errorMessages');

function validateUsername() {
    const val = username.value.trim();
    if (val.length >= 3) {
        usernameError.textContent = 'Looks good';
        usernameError.className = 'valid';
        return true;
    } else {
        usernameError.textContent = 'Username must be at least 3 characters';
        usernameError.className = 'error';
        return false;
    }
}

function validateEmail() {
    const val = email.value.trim();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(val)) {
        emailError.textContent = 'Valid email';
        emailError.className = 'valid';
        return true;
    } else {
        emailError.textContent = 'Enter a valid email (e.g., someone@example.com)';
        emailError.className = 'error';
        return false;
    }
}

function validatePassword() {
    const val = password.value;
    const minLen = val.length >= 8;
    const hasUpper = /[A-Z]/.test(val);
    const hasLower = /[a-z]/.test(val);
    const hasSpecial = /[^A-Za-z0-9]/.test(val);

    const problems = [];
    if (!minLen) problems.push('at least 8 characters');
    if (!hasUpper) problems.push('one uppercase letter');
    if (!hasLower) problems.push('one lowercase letter');
    if (!hasSpecial) problems.push('one special character (e.g., @ # $ %)');

    if (problems.length === 0) {
        passwordError.textContent = 'Strong password';
        passwordError.className = 'valid';
        return true;
    } else {
        passwordError.textContent = 'Password must include: ' + problems.join(', ');
        passwordError.className = 'error';
        return false;
    }
}

function validateConfirmPassword() {
    if (confirmPassword.value === password.value && confirmPassword.value !== '') {
        confirmPasswordError.textContent = 'Passwords match';
        confirmPasswordError.className = 'valid';
        return true;
    } else {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.className = 'error';
        return false;
    }
}

function updateFormValidity() {
    const v1 = validateUsername();
    const v2 = validateEmail();
    const v3 = validatePassword();
    const v4 = validateConfirmPassword();

    const allValid = v1 && v2 && v3 && v4;
    registerBtn.disabled = !allValid;

    // optional central summary (keeps minimal)
    const messages = [];
    if (!v1) messages.push(usernameError.textContent);
    if (!v2) messages.push(emailError.textContent);
    if (!v3) messages.push(passwordError.textContent);
    if (!v4) messages.push(confirmPasswordError.textContent);

    errorMessages.innerHTML = messages.length ? '<ul><li>' + messages.join('</li><li>') + '</li></ul>' : '';
}

username.addEventListener('input', updateFormValidity);
email.addEventListener('input', updateFormValidity);
password.addEventListener('input', updateFormValidity);
confirmPassword.addEventListener('input', updateFormValidity);

// prevent actual submission for demo; handle as needed
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!registerBtn.disabled) {
        // successful registration placeholder
        alert('Form submitted successfully');
        form.reset();
        updateFormValidity();
    }
});