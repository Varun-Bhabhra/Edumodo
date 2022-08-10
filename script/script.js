const bars = document.querySelector('.fa-bars');
const nav_links = document.querySelector('#nav_links');

bars.addEventListener('click', () => {
    nav_links.classList.toggle('hidden');
});