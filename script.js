
const humburger = document.querySelector('.humburger');
const nav = document.querySelector('.nav-menu');
const act = document.querySelector('.act');

humburger.addEventListener('click', () => {
    toggleMenu();
});

act.addEventListener('click', () => {
    // Check if the .act element is already active
    if (act.classList.contains('active')) {
        toggleMenu();
    }
});

function toggleMenu() {
    nav.classList.toggle('active');
    act.classList.toggle('active');
}

