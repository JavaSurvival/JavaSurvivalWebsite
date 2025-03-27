console.log('  /\\_/\\  (\n' +
    ' ( ^.^ ) _)\n' +
    '   \\"/  (\n' +
    ' ( | | )\n' +
    '(__d b__)\n\n' +
    'braden was here :)')

// SVG handling
function newTabArrowSVG() {
    return `
            <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                      stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
        `;
}

function downloadArrowSVG() {
    return `
            <svg width="" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.78 4.22a.75.75 0 0 1 0 1.06L6.56 10.5h3.69a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 1.5 0v3.69l5.22-5.22a.75.75 0 0 1 1.06 0Z"
                      stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
        `;
}

// Check if 'newTabArrow' exists before setting
const newTabArrowElements = document.querySelectorAll('.newTabArrow');
newTabArrowElements.forEach(element => {
    element.innerHTML = newTabArrowSVG();
});

// Check if 'downloadArrow' exists before setting
const downloadArrowElements = document.querySelectorAll('.downloadArrow');
downloadArrowElements.forEach(element => {
    element.innerHTML = downloadArrowSVG();
});

// Slideshow / Heart handling
document.addEventListener("DOMContentLoaded", function () {
    setupSlideshow();
    // setupLogoHeartEffect();
});

// Slideshow Presets
const j2Slides = [
    {imageSrc: '/img/slideshowimgs/j2/DJ_HardLogic.jpg', submittedBy: 'DJ_HardLogic'},
    {imageSrc: '/img/slideshowimgs/j2/PerAsperaSys.jpg', submittedBy: 'PerAsperaSys'},
    {imageSrc: '/img/slideshowimgs/j2/Slystr.jpg', submittedBy: 'Slystr'},
    {imageSrc: '/img/slideshowimgs/j2/AnnasJiyu.jpg', submittedBy: 'AnnasJiyu'},
    {imageSrc: '/img/slideshowimgs/j2/PureWhiteMk7.jpg', submittedBy: 'PureWhiteMk7'},
    {imageSrc: '/img/slideshowimgs/j2/Slystr1.jpg', submittedBy: 'Slystr'},
    {imageSrc: '/img/slideshowimgs/j2/DJ_HardLogic1.jpg', submittedBy: 'DJ_HardLogic'},
    {imageSrc: '/img/slideshowimgs/j2/WERTECHS.jpg', submittedBy: 'WERTECHS'},
    {imageSrc: '/img/slideshowimgs/j2/BucketOfGondor.jpg', submittedBy: 'BucketOfGondor'},
    {imageSrc: '/img/slideshowimgs/j2/AnnasJiyu1.jpg', submittedBy: 'AnnasJiyu'},
    {imageSrc: '/img/slideshowimgs/j2/JangiGabmeister.jpg', submittedBy: 'JangiGabmeister'}
];

const j3Slides = [
    {}
]

// Thank you to aspera for providing these wonderful images!
const christmasSlides = [
    {imageSrc: '/img/slideshowimgs/christmas/christmas.jpg', submittedBy: 'n/a'},
    {imageSrc: '/img/slideshowimgs/christmas/christmas1.jpg', submittedBy: 'n/a'},
    {imageSrc: '/img/slideshowimgs/christmas/christmas2.jpg', submittedBy: 'n/a'},
    {imageSrc: '/img/slideshowimgs/christmas/christmas3.jpg', submittedBy: 'n/a'},
    {imageSrc: '/img/slideshowimgs/christmas/christmas4.jpg', submittedBy: 'n/a'}
];

const js3ComingSoon = [
    {imageSrc: '/img/j2/joke/js3cs1920x1080.jpg', submittedBy: 'n/a'}
]

// Slideshow Functionality
let slideIndex = 0;
let slideInterval;
let slides = j2Slides; // Change this to quickly update slideshow preset

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

/*
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
}*/
