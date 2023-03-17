const MenuContainer = document.querySelector('.menu-container');
const MenuOpen = document.querySelector('.open');
const MenuClose = document.querySelector('.close');

const SPMenu = document.querySelector('.navigation-responsive');			
MenuContainer.addEventListener('click', () => {
    MenuOpen.classList.toggle("active");
    MenuClose.classList.toggle("active");
    SPMenu.classList.toggle("active");
});