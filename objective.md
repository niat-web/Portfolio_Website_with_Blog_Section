# Portfolio_Website_with_Blog_Section

## Objective
This project implements a basic portfolio website with a blog section and contact form. Key functionalities include a dark/light mode toggle using local storage for persistence, a dynamic blog post creation system with form validation, and a contact form with email validation. It utilizes JavaScript for DOM manipulation, event handling, form validation, and basic data storage. The code demonstrates fundamental JavaScript concepts such as variable scoping, control flow, data types, array and object manipulation and more.

## Output
<iframe src="https://niat-web.github.io/Portfolio_Website_with_Blog_Section/" height="1000" width="300" title="Portfolio_Website_with_Blog_Section"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript

## Features to Implement
- Dark/Light Mode Toggle: Allows users to switch between dark and light themes.
- Blog Post Creation: Enables users to create and display blog posts dynamically.
- Contact Form: Provides a form for users to send messages.

## UI Enhancements
- Form Validation: Implements client-side validation for blog post and contact forms.
- Dynamic Blog Post Display: Displays blog posts in a visually appealing manner.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement Dark Mode Toggle | A button that switches between dark and light themes, with the selected theme persisted using local storage. |
| Create Blog Post Form | A form allowing users to input a title and content for a blog post. |
| Validate Blog Post Form | Input fields are checked for emptiness and invalid class is added if empty. |
| Display Blog Posts Dynamically | Blog posts are dynamically added to the blog posts container upon form submission. |
| Implement Contact Form | A form with fields for name, email, and message. |
| Validate Contact Form | Checks email format and non-empty fields |
| Handle Contact Form Submission | Form submission will trigger a validation check and a simulated alert |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to update the website theme (dark/light mode), create and add blog posts to the container, and apply visual feedback for form validation. |
| Event Handling | Used to capture form submissions and clicks on the dark mode toggle, triggering appropriate actions. |
| Local Storage | Used to persist the user's theme preference (dark or light mode) across sessions. |
| Form Validation | Implemented to ensure that required form fields (name, email, message for contact form and title, content for blog post form) are filled in correctly before submission.  |
| Arrays | Used for demonstration of CRUD operations, map(), filter(), reduce(), and spread/rest operators. |
| Objects | Used for demonstration of CRUD operations and object methods like Object.keys() and Object.values(). |
| Functions | Used to encapsulate reusable code blocks, including form validation, DOM manipulation, and email validation. Both named and arrow functions are demonstrated. |
| Variable Scoping | Demonstrated using `let` keyword and the concept of block scope. |
| Control Flow | Demonstrated using `if/else` statements, `switch` statements, and the ternary operator. |
| Error Handling | Demonstrated using `try/catch/finally` blocks to handle potential errors. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| Local Storage API | `localStorage.setItem()`, `localStorage.getItem()` | Used to store and retrieve the user's theme preference, allowing the website to remember the selected theme across sessions. |