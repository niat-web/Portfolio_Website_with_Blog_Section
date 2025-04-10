// script.js
 

 // Dark Mode Toggle
 const darkModeToggle = document.getElementById('darkModeToggle');
 const body = document.body;
 

 darkModeToggle.addEventListener('click', () => {
  const theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  body.dataset.theme = theme;
  localStorage.setItem('theme', theme); // Store theme preference
 

  // Update icon based on theme
  if (theme === 'dark') {
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  } else {
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  }
 });
 

 // Check for stored theme preference
 const storedTheme = localStorage.getItem('theme');
 if (storedTheme) {
  body.dataset.theme = storedTheme;
  if (storedTheme === 'dark') {
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  }
 }
 

 // Blog Post Form Submission
 const blogPostForm = document.getElementById('blogPostForm');
 const blogPostsContainer = document.getElementById('blogPosts');
 

 blogPostForm.addEventListener('submit', function(event) {
  event.preventDefault();
 

  // Form Input Values
  const postTitle = document.getElementById('postTitle').value;
  const postContent = document.getElementById('postContent').value;
 

  // Form Validation
  let isValid = true;
  if (!postTitle) {
  document.getElementById('postTitle').classList.add('is-invalid');
  isValid = false;
  } else {
  document.getElementById('postTitle').classList.remove('is-invalid');
  }
 

  if (!postContent) {
  document.getElementById('postContent').classList.add('is-invalid');
  isValid = false;
  } else {
  document.getElementById('postContent').classList.remove('is-invalid');
  }
 

  if (!isValid) {
  return;
  }
 

  // Create Blog Post Element
  const blogPostDiv = document.createElement('div');
  blogPostDiv.classList.add('blog-post');
  blogPostDiv.innerHTML = `
  <h3>${postTitle}</h3>
  <p>${postContent}</p>
  `;
 

  // Add Blog Post to Container
  blogPostsContainer.appendChild(blogPostDiv);
 

  // Clear Form Inputs
  document.getElementById('postTitle').value = '';
  document.getElementById('postContent').value = '';
 });
 

 // Contact Form Submission
 const contactForm = document.getElementById('contactForm');
 

 contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
 

  // Form Input Values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
 

  // Form Validation
  let isValid = true;
  if (!name) {
  document.getElementById('name').classList.add('is-invalid');
  isValid = false;
  } else {
  document.getElementById('name').classList.remove('is-invalid');
  }
 

  if (!email || !validateEmail(email)) {
  document.getElementById('email').classList.add('is-invalid');
  isValid = false;
  } else {
  document.getElementById('email').classList.remove('is-invalid');
  }
 

  if (!message) {
  document.getElementById('message').classList.add('is-invalid');
  isValid = false;
  } else {
  document.getElementById('message').classList.remove('is-invalid');
  }
 

  if (!isValid) {
  return;
  }
 

  // Simulate Submission (replace with actual submission logic)
  alert('Form submitted successfully!');
 

  // Clear Form Inputs
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
 });
 

 // Email Validation Function
 function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
 }
 

 // Core Concepts (Demonstration)
 // Primitive Types
 const myString = "Hello";
 const myNumber = 42;
 const myBoolean = true;
 const myNull = null;
 let myUndefined;
 const mySymbol = Symbol("description");
 

 // Type Conversion and Coercion
 const numString = "10";
 const num = Number(numString); // Type conversion
 const sum = 5 + numString; // Type coercion (5 + "10" = "510")
 const sum2 = 5 + Number(numString); // Explicit conversion for correct addition
 

 // Template Literals
 const name = "John";
 const greeting = `Hello, ${name}!`;
 

 // Variable Scoping
 function exampleScope() {
  let localVar = "local";
  if (true) {
  let blockVar = "block";
  console.log(localVar); // Accessible
  console.log(blockVar); // Accessible
  }
  console.log(localVar); // Accessible
  //console.log(blockVar); // Not accessible (out of scope)
 }
 

 exampleScope();
 

 // Control Flow (Demonstration)
 // Conditionals
 const age = 20;
 if (age >= 18) {
  console.log("You are an adult.");
 } else {
  console.log("You are a minor.");
 }
 

 const day = "Monday";
 switch (day) {
  case "Monday":
  console.log("It's Monday!");
  break;
  case "Tuesday":
  console.log("It's Tuesday!");
  break;
  default:
  console.log("It's another day.");
 }
 

 const isMember = true;
 const discount = isMember ? 0.1 : 0; // Ternary operator
 console.log(`Discount: ${discount}`);
 

 // Logical Operators
 const hasLicense = true;
 const hasCar = true;
 if (hasLicense && hasCar) {
  console.log("You can drive.");
 }
 

 // Error Handling
 try {
  // Code that might throw an error
  if (age < 0) {
  throw new Error("Age cannot be negative.");
  }
 } catch (error) {
  console.error("Error:", error.message);
 } finally {
  console.log("Finally block executed.");
 }
 

 // User Input & Math (Demonstration - Integrated with form validation)
 // Arrays & Objects (Demonstration)
 // Arrays
 const numbers = [1, 2, 3, 4, 5];
 

 // CRUD Operations
 numbers.push(6); // Create
 console.log(numbers);
 console.log(numbers[0]); // Read
 numbers[0] = 10; // Update
 console.log(numbers);
 numbers.splice(2, 1); // Delete
 console.log(numbers);
 

 // map(), filter(), reduce()
 const doubled = numbers.map(num => num * 2);
 console.log(doubled);
 const evenNumbers = numbers.filter(num => num % 2 === 0);
 console.log(evenNumbers);
 const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
 console.log(sumOfNumbers);
 

 // Spread/Rest Operators
 const newNumbers = [...numbers, 7, 8]; // Spread
 console.log(newNumbers);
 

 function sumAll(...args) { // Rest
  return args.reduce((acc, num) => acc + num, 0);
 }
 console.log(sumAll(1, 2, 3));
 

 // Objects
 const person = {
  name: "Alice",
  age: 30,
  city: "New York"
 };
 

 // CRUD Operations
 person.job = "Developer"; // Create
 console.log(person);
 console.log(person.name); // Read
 person.age = 31; // Update
 console.log(person);
 delete person.city; // Delete
 console.log(person);
 

 // Object Methods
 const keys = Object.keys(person);
 console.log(keys);
 const values = Object.values(person);
 console.log(values);
 

 // Functions & Events (Demonstration - Integrated with form submission)
 // Named/Arrow Functions
 function add(a, b) {
  return a + b;
 }
 

 const multiply = (a, b) => a * b;
 

 // Callbacks
 function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
 }
 

 function sayGoodbye() {
  console.log("Goodbye!");
 }
 

 greet("Bob", sayGoodbye);
 

 // DOM Manipulation (Demonstration - Integrated with form submission and blog post creation)
 // Forms & Storage (Demonstration - Integrated with form submission and dark mode)