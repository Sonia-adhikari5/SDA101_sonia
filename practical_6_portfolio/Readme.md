# Practical 6 — Personal Portfolio Website
## Objective

The goal of this practical was to create a responsive personal portfolio website using HTML, CSS, Flexbox, and Grid layouts. Key objectives included:

Structuring a multi-section webpage for portfolio presentation.

Using Flexbox for navigation menus and skills card layouts.

Implementing CSS Grid to organize main content sections and portfolio projects.

Applying responsive design principles to ensure accessibility across devices.

Styling components with modern CSS techniques including hover effects, transitions, and gradients.

## Implementation
### 1. Navigation Bar (Flexbox)

The navigation bar includes the logo, menu items, and social links.

Flexbox ensures the logo, navigation menu, and social links align properly and distribute space evenly.

HTML snippet:

<nav class="navbar">
    <div class="logo">Portfolio</div>
    <ul class="nav-menu">
        <li><a href=>Home</a></li>
        <li><a href=>About</a></li>
        <li><a href=>Portfolio</a></li>
        <li><a href=>Contact</a></li>
    </ul>
    <div class="nav-social">
        <a href=>GitHub</a>
        <a href=>LinkedIn</a>
    </div>
</nav>

### 2. Page Layout (CSS Grid)

Main content is divided into Hero, About, Skills, and Portfolio sections.

CSS Grid defines areas for each section and allows for consistent spacing and alignment.

CSS snippet:

.page-container {
    
    display: grid;
    grid-template-areas:
        "hero"
        "about"
        "skills"
        "portfolio";
    grid-template-rows: auto;
    gap: 2rem;
}
.hero { grid-area: hero; }
.about { grid-area: about; }
.skills { grid-area: skills; }
.portfolio { grid-area: portfolio; }

### 3. Skills Section (Flexbox)

Skills are displayed as cards inside a flex container that wraps for responsiveness.

Each card has a hover effect that lifts the card and changes border color.

CSS snippet:

.skills-container {

    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.skill-card {

    flex: 1 1 250px;
    background: #f4f4f4;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    border: 2px solid #ddd;
    transition: transform 0.2s, border-color 0.2s;
}
.skill-card:hover {

    transform: translateY(-5px);
    border-color: #2575fc;
}

### 4. Portfolio Gallery (CSS Grid)

Projects are displayed in a responsive grid that adapts to screen size.

Each project card includes an image and title, with a hover effect to elevate the card slightly.

CSS snippet:

.gallery {

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.project {

    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    padding: 1rem;
    text-align: center;
    transition: transform 0.2s;
}
.project:hover {
    transform: translateY(-5px);
}

### 5. Responsive Design

Navigation items stack vertically on smaller screens.

Skills cards switch to a vertical layout.

Portfolio grid adjusts to single-column layout for mobile devices.

## Outcome

The final portfolio demonstrates a professional, responsive, and visually appealing website showcasing personal projects, skills, and professional links. Using Flexbox and Grid made layouts clean and adaptive, improving user experience on both desktop and mobile devices.