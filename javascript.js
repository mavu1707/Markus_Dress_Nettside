const hamburgerMenu = document.querySelector('.hamburger-menu')
const fullScreenMenu = document.querySelector('.full-screen-menu')

function toggleMenu() {
  const bars = document.querySelectorAll('.bar')
  bars.forEach(bar => bar.classList.toggle('change'))

  if (fullScreenMenu.style.display === "flex") {
    fullScreenMenu.style.display = "none"
    hamburgerMenu.classList.remove('active')
  } else {
    fullScreenMenu.style.display = "flex"
    hamburgerMenu.classList.add('active')
  }
}

hamburgerMenu.addEventListener('click', toggleMenu)
