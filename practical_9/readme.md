# Practical 9 — SDA101: Form Validation

## Overview
In Practical 9, the focus was on **client-side form validation using JavaScript**. This exercise allowed me to implement real-time validation for a registration form, providing instant feedback to users and ensuring data integrity before submission.

### Features Implemented
1. **Username Validation**
   - Minimum 3 characters required.
   - Real-time feedback shown below the input.

2. **Email Validation**
   - Ensures input follows a valid email format using a regular expression.
   - Displays immediate feedback for valid or invalid input.

3. **Password Validation**
   - Must have at least 8 characters, one uppercase letter, one lowercase letter, and one special character.
   - Shows which criteria are missing dynamically.

4. **Confirm Password Validation**
   - Checks if confirm password matches the password.
   - Provides feedback in real-time.

5. **Dynamic Form Submission**
   - The "Register" button is disabled until all fields are valid.
   - Central summary of validation errors displayed above the form.

6. **Event Handling**
   - Uses `input` events to update form validity in real-time.
   - Handles form submission with `preventDefault()` to simulate successful submission without sending data.

