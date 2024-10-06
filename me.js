// me.js

// Select the toggle button and the body element
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Function to toggle dark mode
function toggleDarkMode() {
    body.classList.toggle('dark-mode');

    // Update button text based on the current theme
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
}

// Event listener for the toggle button
if (toggleButton) {
    toggleButton.addEventListener('click', toggleDarkMode);
} else 

// Load the saved theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = '☀️ Light Mode';
    } else {
        toggleButton.textContent = '🌙 Dark Mode';
    }

    // Optional: Detect system preference if no preference is saved
    if (!savedTheme) {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (prefersDarkScheme.matches) {
            body.classList.add('dark-mode');
            toggleButton.textContent = '☀️ Light Mode';
        }
    }
});
