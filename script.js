// Optional: Add any JavaScript functionality if needed
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scroll to sections
    const links = document.querySelectorAll('.nav-links a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
});
