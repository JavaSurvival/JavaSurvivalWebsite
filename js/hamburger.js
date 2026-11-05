// Hamburger / dropdown menu behavior.
// Must be loaded AFTER components.js: the menu elements are created by the
// injected header, and DOMContentLoaded listeners run in the order they were added.

function setupHamburger() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown');

    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('active');
        dropdownMenu.classList.toggle('active');
    });
    document.addEventListener("click", function (event) {
        if (!hamburgerMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
            hamburgerMenu.classList.remove('active');
            dropdownMenu.classList.remove("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", setupHamburger);