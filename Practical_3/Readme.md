# Practical 3 — My Student Profile Webpage
## Objective

The goal of this practical was to create a personal student profile webpage using HTML and CSS. This exercise allowed me to explore:

Structuring content using headings, paragraphs, lists, and images.

Applying styling using CSS for colors, fonts, and layout.

Demonstrating basic box model concepts and layout design.

### Implementation
#### 1. Profile Section

Introduced myself with a heading and descriptive paragraphs about my academic journey, goals, and passion for software development.

Added personal images to give the page a more engaging look.

Code snippet:

<h2>My Student Profile</h2>
<p><h4>Hello, I am Sonia Adhikari, currently pursuing a bachelor's degree in Software Engineering...</h4></p>


#### 2. Class Schedule and To-Do List

Created unordered and ordered lists to display class schedules and a to-do list.

Styled lists for clarity using different bullet types and heading levels.

Code snippet:

<ul>
    <li><h3>Class Schedule</h3>
        <ol>
            <li>DZO101, CSF101, NWC201</li>
            ...
        </ol>
    </li>
</ul>
<ul>
    <li><h3>To do List</h3>
        <ul type="square">
            <li>Complete Assignments</li>
            ...
        </ul>
    </li>
</ul>

##### 3. Box Model and Layout Examples

Demonstrated CSS box model concepts using a container with padding, border, and margin.

Practiced basic layout structuring with multiple div elements.

Code snippet:

<div class="box-model">This is a box</div>

<div class="container">
    <div class="item">Item1</div>
    <div class="item">Item2</div>
    <div class="item">Item3</div>
</div>

#### 4. Styling with CSS

Applied custom styles for headings and div elements using colors, padding, borders, and border-radius.

Experimented with inline styles and classes to understand design consistency.

Code snippet:

h2 { color: pink; }
h3 { color: purple; }
h4 { color: rgba(0, 98, 255, 0.699); }
.box-model {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
    border-radius: 8px;
}

#### Outcome

The webpage successfully presents my personal profile, academic details, and daily tasks in a structured and visually appealing manner. The use of headings, lists, images, and CSS styling enhanced both the readability and aesthetic appeal of the page.