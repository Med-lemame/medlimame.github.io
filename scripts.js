document.addEventListener("DOMContentLoaded", function() {
    // إضافة تفاعل بسيط هنا إذا كنت بحاجة
    // Toggle visibility of hidden sections
document.getElementById('toggle-courses').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('courses').classList.toggle('hidden-section');
});

document.getElementById('toggle-portfolio').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('portfolio').classList.toggle('hidden-section');
});
