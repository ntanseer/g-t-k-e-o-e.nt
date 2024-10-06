// me.js
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
// me.js

// Select the toggle button and the body element
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Function to toggle dark mode
function toggleDarkMode() {
  body.classList.toggle('dark-mode');

  // Optional: Save the user's preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');

// Event listener for the toggle button
toggleButton.addEventListener('click', toggleDarkMode);

// Optional: Load the saved theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
});
