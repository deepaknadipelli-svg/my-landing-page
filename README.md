# Unbundl Assignment Reference Document

---

**Project: Build a Responsive Landing Page from Figma Design (Beginner-Friendly Guide)**

### 1. Objective

To create a pixel-perfect, fully responsive landing page using only **HTML, CSS, and Vanilla JavaScript (Use only JavaScript Do not use any other frameworks like ReactJS)**, based on a real Figma design.

This assignment tests your ability to:

- Accurately translate a design into clean, semantic code
- Make the page work perfectly on mobile, tablet, and desktop
- Add basic interactivity (e.g., mobile menu, smooth scroll)
- Deploy the final result online

You only need to implement **any 6 sections** from the provided Figma file.

**Figma Link (Community Access):**

[https://www.figma.com/design/sm9DHhMwT84hL3vv3Rxkkg/Test-Assignment?node-id=4-1423
&t=LfmzHBrjezvkcVoH-1](https://www.figma.com/design/sm9DHhMwT84hL3vv3Rxkkg/Test-Assignment?node-id=4-1423)

### 2. Technical Requirements

| Item | Requirement / Recommendation |
| --- | --- |
| Code Editor | VS Code (free) – recommended |
| Browser | Google Chrome (for DevTools) |
| Design Tool | Figma account (free) – to inspect the design |
| Version Control | Git + GitHub (mandatory for deployment) |
| Deployment Platform | GitHub Pages (free & easiest) OR Vercel/Netlify |
| Allowed Technologies | HTML5, CSS3 (or SCSS → compiled to CSS), Vanilla JavaScript only – NO React, Tailwind, Bootstrap, etc. |
| Images/Assets | Export from Figma (right-click → Export → PNG/SVG @2x) |

### 3. Step-by-Step Instructions

### Step 1: Preparation & Planning

1. Open the Figma link and duplicate the file to your drafts (top-right button).
2. Explore all sections and **choose any 6** you feel confident building. Recommended easy ones for beginners:
    - Hero Section
    - Features / Services
    - About Us
    - Testimonials
    - Pricing Table
    - Footer
3. For each chosen section, note:
    - Font families & sizes
    - Colors (use the color panel on the right)
    - Spacing (hold Alt/Option to see distances)
    - Breakpoints (switch between Desktop → Tablet → Mobile)

### Step 2: Set Up Project Folder

```bash
my-landing-page/
├── index.html
├── css/
│   └── style.css         (or main.scss if you use SCSS)
├── js/
│   └── script.js
├── images/
│   └── (all exported assets)
└── README.md
```

### Step 3: Create Basic HTML Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Landing Page Title</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Your 6 sections will go here -->

    <script src="js/script.js"></script>
</body>
</html>
```

### Step 4: Build One Section at a Time (Recommended Order)

1. **Navigation Bar** (with mobile hamburger menu)
2. **Hero Section**
3. **Section 2** (e.g., Features)
4. **Section 3**
5. **Section 4**
6. **Footer**

**Pro Tip:** Build desktop version first, then make it responsive with media queries.

### Step 5: Make It Responsive

Use mobile-first or desktop-first approach. Example (mobile-first):

```css
/* Mobile (default) */
.container { max-width: 100%; padding: 0 20px; }

/* Tablet */
@media (min-width: 768px) {
    .container { max-width: 720px; margin: 0 auto; }
}

/* Desktop */
@media (min-width: 1024px) {
    .container { max-width: 1000px; }
}

@media (min-width: 1440px) {
    .container { max-width: 1200px; }
}
```

### Step 6: Add Basic JavaScript Interactivity

Common requirements:

```jsx
// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('show');
});

// Smooth scroll for anchor links (optional but nice)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
```

### Step 7: Test Responsiveness

- Use Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)
- Test on real phone if possible

### Step 8: Deploy with GitHub Pages (Easiest Method)

1. Push your code to a GitHub repository
2. Go to repository → Settings → Pages
3. Under "Source", select branch "main" and folder "/ (root)"
4. Click Save → Your site will be live in 1–2 minutes at:https://yourusername.github.io/repository-name/

### 4. Project Structure (Recommended)

```
my-landing-page/
├── index.html                  ← Single HTML file
├── css/
│   └── style.css               ← All styles (or use main.scss)
├── js/
│   └── script.js               ← Mobile menu + any interactivity
├── images/                     ← All exported PNG/SVG from Figma
├── favicon.ico                 ← Optional but professional
└── README.md                   ← Include live link + screenshots
```

### 5. Example Code Snippets (Do NOT copy entire sections)

### Example: Mobile Hamburger Menu (HTML + CSS + JS)

```html
<!-- HTML -->
<header class="header">
    <div class="logo">Brand</div>
    <nav class="nav-menu">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
    </nav>
    <div class="menu-btn">
        <span></span>
        <span></span>
        <span></span>
    </div>
</header>
```

```css
/* CSS - Hamburger animation */
.menu-btn span {
    display: block;
    width: 25px;
    height: 3px;
    background: #333;
    margin: 5px;
    transition: all 0.3s;
}
.menu-btn.open span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
.menu-btn.open span:nth-child(2) { opacity: 0; }
.menu-btn.open span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }
```

### Example: Simple Grid for Features

```css
.features-grid {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr;
}
@media (min-width: 768px) {
    .features-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### Final Deliverables (What You Must Submit)

1. **Live deployed URL** (GitHub Pages / Vercel / Netlify) – MANDATORY
2. GitHub repository link (public)
3. (Optional but impressive) Add 2–3 screenshots in [README.md](http://readme.md/)

### Bonus Points (Not Required but Will Impress)

- Use CSS custom properties (`-primary-color: #0066ff;`)
- Add subtle hover animations
- Use proper alt text for images (accessibility)
- Include a small "Back to top" button

**You have 48 hours. Start simple, make it work, then make it beautiful.**

---

Good luck !!