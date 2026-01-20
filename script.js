const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // This toggles the 'active' class on the ul
    navLinks.classList.toggle('active');
});
