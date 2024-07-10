document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove the 'active' class from all sections
            sections.forEach(section => section.classList.remove('active'));

            // Get the target section ID from data-section attribute
            const targetSection = this.getAttribute('data-section');

            // Add the 'active' class to the target section
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // Show the first section by default
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }
});