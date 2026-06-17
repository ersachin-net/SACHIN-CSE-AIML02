// Functionality can be added here
document.addEventListener('DOMContentLoaded', () => {
    console.log("FitLife Landing Page Loaded Successfully");

    // Example: Smooth scroll for navigation links
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`Navigating to ${e.target.innerText}...`);
        });
    });
});