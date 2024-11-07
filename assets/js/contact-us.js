// JavaScript to toggle the mobile menu
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav__list');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
});
