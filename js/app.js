const dropdowns = document.querySelectorAll('.dropdown');
const btnMobile = document.querySelector('#btn-mobile');

const openDropdown = (event) => {
  event.currentTarget.classList.add('active');
};

const closeDropdown = (event) => {
  event.currentTarget.classList.remove('active');
};

const toggleSubmenu = (event) => {
  event.currentTarget.classList.toggle('active');
};

const toggleMenu = () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
  btnMobile.classList.toggle('active');
};

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('mouseover', openDropdown);
  dropdown.addEventListener('mouseout', closeDropdown);
  dropdown.addEventListener('touchstart', toggleSubmenu);
});

btnMobile.addEventListener('touchstart', toggleMenu);
