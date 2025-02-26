console.log('  /\\_/\\  (\n' +
    ' ( ^.^ ) _)\n' +
    '   \\"/  (\n' +
    ' ( | | )\n' +
    '(__d b__)\n' +
    'braden was here :)')


document.addEventListener("DOMContentLoaded", function () {
  setupSlideshow();
  setupHamburgerMenu();
  setupLogoHeartEffect();
});

// Slideshow Functionality
let slideIndex = 0;
const slides = [
  { imageSrc: '/img/slideshowimgs/DJ_HardLogic.jpg', submittedBy: 'DJ_HardLogic' },
  { imageSrc: '/img/slideshowimgs/PerAsperaSys.jpg', submittedBy: 'PerAsperaSys' },
  { imageSrc: '/img/slideshowimgs/Slystr.jpg', submittedBy: 'Slystr' },
  { imageSrc: '/img/slideshowimgs/AnnasJiyu.jpg', submittedBy: 'AnnasJiyu' },
  { imageSrc: '/img/slideshowimgs/PureWhiteMk7.jpg', submittedBy: 'PureWhiteMk7' },
  { imageSrc: '/img/slideshowimgs/Slystr1.jpg', submittedBy: 'Slystr' },
  { imageSrc: '/img/slideshowimgs/DJ_HardLogic1.jpg', submittedBy: 'DJ_HardLogic' },
  { imageSrc: '/img/slideshowimgs/WERTECHS.jpg', submittedBy: 'WERTECHS' },
  { imageSrc: '/img/slideshowimgs/BucketOfGondor.jpg', submittedBy: 'BucketOfGondor' },
  { imageSrc: '/img/slideshowimgs/AnnasJiyu1.jpg', submittedBy: 'AnnasJiyu' },
  { imageSrc: '/img/slideshowimgs/JangiGabmeister.jpg', submittedBy: 'JangiGabmeister' }
];

let slideInterval;

function setupSlideshow() {
  if (!document.querySelector('.slideshow-container')) return;

  showSlides();
  startSlideInterval();

  document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
  document.querySelector('.next').addEventListener('click', () => moveSlide(1));
}

function showSlides() {
  const slidesContainer = document.querySelector('.slides');
  slidesContainer.innerHTML = '';

  slides.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.classList.add('slide');
    if (index === slideIndex) {
      slideElement.style.display = 'block';
    }

    const imageElement = document.createElement('img');
    imageElement.src = slide.imageSrc;
    imageElement.alt = `Slide ${index + 1}`;
    imageElement.classList.add('slide-img');

    const submittedByElement = document.createElement('p');
    submittedByElement.classList.add('submitted-by');
    submittedByElement.textContent = `Submitted By: ${slide.submittedBy}`;

    slideElement.appendChild(imageElement);
    if (slide.submittedBy !== 'n/a') {
      slideElement.appendChild(submittedByElement);
    }

    slidesContainer.appendChild(slideElement);
  });
}

function moveSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlides();
  resetSlideInterval();
}

function startSlideInterval() {
  slideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
  }, 5000);
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  startSlideInterval();
}

// Hamburger Menu Toggle
function setupHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
}

// Logo Click Effect
function setupLogoHeartEffect() {
  const logo = document.getElementById('logo');

  if (!logo) return;

  let heartTimeout;

  logo.addEventListener('click', function () {
    clearTimeout(heartTimeout);

    document.querySelectorAll('.heart').forEach(heart => heart.remove());

    const heart = document.createElement('div');
    heart.innerHTML = '<3';
    heart.classList.add('heart');
    document.body.appendChild(heart);

    positionHeart(heart);

    heartTimeout = setTimeout(() => heart.remove(), 2000);
  });
}

function positionHeart(heart) {
  const rect = heart.getBoundingClientRect();
  heart.style.top = `calc(50% - ${rect.height / 2}px)`;
  heart.style.left = `calc(50% - ${rect.width / 2}px)`;
}
