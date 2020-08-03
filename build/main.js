const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    links.forEach((item) => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    links.forEach((link) => link.classList.remove('open'));

    showMenu = false;
  }
};

hamburger.addEventListener('click', toggleMenu);

links.forEach((link) => link.addEventListener('click', toggleMenu));
