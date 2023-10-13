const hamburgerMenu = document.querySelector('.hamburger-menu');
const fullScreenMenu = document.querySelector('.full-screen-menu');

function toggleMenu() {
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => bar.classList.toggle('change'));

  if (fullScreenMenu.classList.contains('active')) {
    fullScreenMenu.classList.remove('active');
  } else {
    fullScreenMenu.classList.add('active');
  }
}

hamburgerMenu.addEventListener('click', toggleMenu);
