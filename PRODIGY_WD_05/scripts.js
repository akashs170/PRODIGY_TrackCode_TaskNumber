const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
[]

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
