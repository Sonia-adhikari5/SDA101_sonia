# README.md — Practical 4 SDA
Practical 4 — Tables and Lists Webpage
Objective

The goal of this practical was to gain hands-on experience with HTML tables, lists, and CSS styling. This assignment focused on:

## Displaying structured data in tables.

Creating ordered and unordered lists for events.

Enhancing webpage aesthetics using CSS styling.

Understanding the importance of semantic HTML for readability and organization.

## Implementation
### 1. Semester Grades Table

Created a table to display grades for different activities and assessments.

Included headers for module, activity, full marks, marks obtained, percentage, and grade.

Applied border-collapse to ensure the table borders look clean.

Code snippet:

<table border="1">
    <tr>
        <th>Module</th>
        <th>Activity</th>
        <th>Full Marks</th>
        <th>Marks Obtained</th>
        <th>Total Percentage</th>
        <th>Grade</th>
    </tr>
    <tr>
        <td>SDA101</td>
        <td>Figma Design</td>
        <td>15</td>
        <td>7</td>
        <td>46.67%</td>
        <td>C -</td>
    </tr>
</table>

### 2. Upcoming College Events List

Used ordered lists (<ol>) for listing events and nested unordered lists (<ul>) for event details like time and location.

Applied CSS for better readability and interactivity with hover effects.

Code snippet:

<ol class="events-list">
    <li>
        <span class="event-title">Freshers' Orientation</span>
        <ul class="event-details">
            <li>Time: 9:00 AM - 12:00 PM</li>
            <li>Location: Main Auditorium</li>
        </ul>
    </li>
</ol>

### 3. CSS Styling

Styled headings, tables, and lists for better visual presentation.

Implemented hover effects on events to improve interactivity.

Used counters to display custom markers for each event.

Applied box-shadow and border-radius for a modern card-like design.

Code snippet:

.events-list > li {
    background: #fff;
    padding: 20px 30px 20px 60px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(44,62,80,0.08);
}
.events-list > li:hover { background: #eaf6ff; }

## Outcome

The webpage now effectively displays student grades in a clean table format and upcoming college events in an interactive list. CSS styling enhanced readability, usability, and visual appeal, making the content both organized and engaging.