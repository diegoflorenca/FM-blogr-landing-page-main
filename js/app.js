// Open and close mobile submenu
const toggleSubmenu = (menuItem) => {
  const checkActive = document.querySelector(`.${menuItem}.active-menu`);
  const span = document.querySelector(`.span-${menuItem}`);
  if (checkActive) {
    checkActive.classList.remove('active-menu');
    span.style.transform = 'rotate(0deg)';
  } else {
    const activeMenu = document.querySelector(`.${menuItem}`);
    activeMenu.classList.add('active-menu');
    span.style.transform = 'rotate(180deg)';
  }
};