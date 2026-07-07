// KintsuKai Website Initialization Script
// This file contains common initialization code for all pages

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add any common initialization code here
    console.log('KintsuKai website loaded');
});

// Theme toggle functionality (if needed)
function toggleTheme() {
    const html = document.querySelector('html');
    if (html.classList.contains('light')) {
        html.classList.remove('light');
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme preference
function loadThemePreference() {
    const saved = localStorage.getItem('theme');
    const html = document.querySelector('html');
    if (saved) {
        html.className = saved;
    }
}

// Load theme on page load
loadThemePreference();
