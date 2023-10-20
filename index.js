const features = document.getElementById('features')
const compagny = document.getElementById('compagny')

const featuresDropdown = document.getElementById('features-dropdown')
const compagnyDropdown = document.getElementById('compagny-dropdown')

const featuresArrow = document.querySelector('.features-arrow')
const compagnyArrow = document.querySelector('.compagny-arrow')

const hamburger = document.querySelector('.btn-hamburger')
const btnClose = document.querySelector('.btn-close')
const primaryNav = document.querySelector('.primary-nav')
const bgNav = document.querySelector('.nav-bg')

features.addEventListener('click', () => {
  featuresDropdown.classList.toggle('active');
  featuresArrow.classList.toggle('active');
})

compagny.addEventListener('click', () => {
  compagnyDropdown.classList.toggle('active');
  compagnyArrow.classList.toggle('active');
})

hamburger.addEventListener('click', () => {
  primaryNav.classList.add('active')
  bgNav.classList.add('active')
  document.body.classList.add('no-scroll');
})

btnClose.addEventListener('click', () => {
  primaryNav.classList.remove('active')
  bgNav.classList.remove('active')
  document.body.classList.remove('no-scroll');
})

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 100);
});
