# hydoponic-module-configurator

# Hydroponic Module Configurator

👩🏻‍💻 View an example of this section 

The Hydroponic Module Configurator is a web application that allows users to generate personalized plant suggestions for hydroponic greenhouse systems. By selecting a gender and age group, the app filters a local database and displays plants rich in nutrients tailored to that user group.

I built this project to explore user-centered food production, responsive front-end development, and practical use of JavaScript filtering logic.



🔗 **Live Site:** 



---

## CONTENTS

- [User Experience](#user-experience-ux)
  - [User Stories](#user-stories)
- [Design](#design)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
- [Features](#features)
  - [General Features on Each Page](#general-features-on-each-page)
  - [Future Implementations](#future-implementations)
  - [Accessibility](#accessibility)
- [Technologies Used](#technologies-used)
  - [Languages Used](#languages-used)
  - [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
- [Deployment & Local Development](#deployment--local-development)
  - [Deployment](#deployment)
  - [Local Development](#local-development)
    - [How to Fork](#how-to-fork)
    - [How to Clone](#how-to-clone)
- [Testing](#testing)
- [Credits](#credits)
  - [Code Used](#code-used)
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

👩🏻‍💻 View an example of a completed user experience section ux

### User Stories

- As a first-time visitor, I want to understand immediately what the app does.
- As a user, I want to select gender and age group easily and see customized plant suggestions.
- As a returning user, I want to test various combinations and compare plant recommendations.
- As a developer, I want the interface to work well on all devices.

---

## Design


### Colour Scheme

The color palette is clean, calm and functional – reflecting both the theme of modern hydroponic systems and the clarity of a data-driven configurator.

- **Forest Green (`#006644`)** – used for call-to-action elements like buttons and headers; symbolises growth, plants, and sustainability.
- **White (`#ffffff`)** – background color for main sections; ensures clear separation between content blocks.
- **Light Gray (`#f4f7f9`)** – used as a subtle body background to create visual contrast and reduce eye strain.

All color combinations were checked manually to ensure readability and pass WCAG contrast requirements.

### Typography

- The font stack uses **Arial, sans-serif**, a widely supported and readable system font.
- Font sizes are consistent and accessible across devices.
- Headings (`<h1>`, `<h2>`) are used semantically to define hierarchy, helping screen readers and improving SEO.

### Layout

- The layout is **single-column** and fully **responsive**, ensuring usability on both desktop and mobile.
- The **two dropdowns** (gender and age group) are aligned **side-by-side on larger screens** and stack vertically on smaller screens using CSS Flexbox and media queries.
- The **"Show Plant Suggestions"** button is clearly separated from the inputs to support touch interaction and visual clarity.

### Components

- The main interactive elements are two `<select>` dropdowns and a button, supported by dynamic content generation.
- Output results appear in a visually distinct `<section>` with padding and card-style list items.
- The site structure uses semantic tags: `<header>`, `<main>`, `<section>`, and `<footer>`.

### Imagery

- No external images are used, keeping the interface clean and fast-loading.
- Visual focus is on interactive elements and readability.

## Features


### General Features on Each Page

- Clear header and footer
- Introduction section
- Side-by-side dropdowns for gender and age group
- Suggestion button with input validation
- Results display with plant names and nutrients

### Future Implementations

- Nutrient calculator
- Save/load configurations via localStorage
- Filter by allergies or diet
- Export QR-coded planting list

### Accessibility

- Semantic HTML elements
- Labels for form inputs
- Color contrast meets WCAG 2.1 AA
- Works on all screen sizes
- Keyboard-friendly navigation

---

## Technologies Used


### Languages Used

- HTML5
- CSS3
- JavaScript (ES6)

### Frameworks, Libraries & Programs Used

- Git & GitHub
- VS Code
- Coolors (for color palette)
- Amiresponsive (for device previews)

---

## Deployment & Local Development

👩🏻‍💻 View an example of a completed Deployment & Local Development section [here](https://github.com/kera-cudmore/TheQuizArms#Deployment)

### Deployment

Deployed via GitHub Pages:
1. Go to repository > Settings > Pages
2. Select `main` branch and `/root` folder
3. Site published at:  


### Testing

Testing was performed manually. See TESTING.md for more.

1. Dropdown logic works

2. Suggestions show only if both inputs selected

3. Error shown if inputs missing

4. Responsive on all screen sizes

5. No JavaScript or console errors

## Credits

### Code Used

- The JavaScript `.filter()` method and general array iteration were guided by:
  - [MDN Web Docs – Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [W3Schools – JavaScript Array filter()](https://www.w3schools.com/jsref/jsref_filter.asp)
- HTML5 validation tips were referenced from:
  - [W3C Validator](https://validator.w3.org/)
- CSS layout ideas inspired by:
  - [CSS-Tricks – Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Accessibility best practices referenced from:
  - [WebAIM – Introduction to Web Accessibility](https://webaim.org/intro/)
  - [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)

### Content

All written content was created by the developer. The project is original and intended to simulate a real-world product configurator.

### Media

No media files (images, audio, video) were used in this version. A screenshot of the responsive site will be generated via [Amiresponsive](https://ui.dev/amiresponsive).

### Acknowledgments

Thanks to:
- The Code Institute community and mentors
- GitHub Copilot and ChatGPT for helping with code completion and refactoring support
- Stack Overflow for general troubleshooting
