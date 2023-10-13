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

/*let hamburger= document.getElementById("hamburger")
let fullScreenMenu = document.querySelector('.full-screen-menu')

function toggleMenu() {
  let bars = document.querySelectorAll('.bar')
  bars.forEach(bar => bar.classList.toggle('change'))

  if (fullScreenMenu.style.display === "flex") {
    fullScreenMenu.style.display = "none"
    hamburger.classList.remove('active')
  } else {
    fullScreenMenu.style.display = "flex"
    hamburger.classList.add('active')
  }
}

hamburger.addEventListener('click', toggleMenu)*/
