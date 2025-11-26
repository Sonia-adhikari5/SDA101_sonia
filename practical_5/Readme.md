# Practical 5 — Hostel Room Maintenance Form
## Objective

The purpose of this practical was to develop a fully functional and well-styled HTML form for collecting hostel room maintenance requests. Key learning goals included:

Structuring forms with HTML input types for different data.

Validating input using attributes like required, minlength, maxlength, and placeholders.

Grouping form fields into sections for better organization.

Enhancing the form’s appearance and usability with CSS styling.

Applying responsive design principles to ensure the form works on mobile devices.

## Implementation
### 1. Form Structure

Divided the form into three main sections:

Student Information: Full name, student ID, email, phone number.

Room Information: Block, room number, floor number.

Issue Details: Type, urgency, and description of the maintenance issue.

HTML snippet:

<label for="name">Full Name:</label>
<input type="text" id="name" name="name" required minlength="2" maxlength="50" placeholder="Enter your full name">

<label for="issue-type">Issue Type:</label>
<select id="issue-type" name="issue-type" required>
    <option value="">Select Issue Type</option>
    <option value="Plumbing">Plumbing</option>
    <option value="Electrical">Electrical</option>
    <option value="Furniture">Furniture</option>
    <option value="Cleaning">Cleaning</option>
    <option value="Other">Other</option>
</select>

### 2. Input Validation

Used HTML attributes to enforce rules:

required ensures no empty submissions.

minlength and maxlength control text input length.

type="email" ensures a valid email format.

type="number" ensures numeric input for room and floor numbers.

Radio buttons provide a clear way to select urgency/priority.

### 3. CSS Styling

Applied modern design principles for clean, user-friendly forms:

Box shadows and border-radius to create a card-like effect.

Consistent color palette for text, headings, and input focus states.

Flexbox and Grid used for responsive layout in the page container.

Smooth hover effects for buttons and inputs to improve interactivity.

CSS snippet:

form {
	background: #fff;
	max-width: 500px;
	margin: 40px auto;
	padding: 32px 28px;
	border-radius: 12px;
	box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

input[type="text"], input[type="email"], textarea, select {
	width: 100%;
	padding: 10px 12px;
	border-radius: 6px;
	border: 1px solid #cfd8dc;
	background: #f9fafb;
}

input[type="submit"] {
	background: #5b9df9;
	color: #fff;
	padding: 12px 0;
	border-radius: 6px;
	cursor: pointer;
}

### 4. Responsive Design

Form adjusts to smaller screens:

Input fields and sections stack vertically.

Padding and margins reduce for mobile devices.

CSS Grid and Flexbox ensure form maintains proper alignment and spacing.

## Outcome

The final form allows students to submit hostel maintenance requests easily, with clear instructions and validations. CSS styling makes the form visually appealing, user-friendly, and responsive across devices.