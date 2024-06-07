document.addEventListener("DOMContentLoaded", function() {
    // إضافة تفاعل بسيط هنا إذا كنت بحاجة
// Add your login scripts here
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate login credentials
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Mock validation: assume any non-empty input is valid
    if (username && password) {
        // If valid, redirect to index.html
        window.location.href = 'index.html';
    } else {
        // If invalid, display error message or handle accordingly
        alert('Invalid username or password. Please try again.');
    }
});
