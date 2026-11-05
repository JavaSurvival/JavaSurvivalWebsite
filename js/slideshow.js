// Home page slideshow. Make sure slides-data.js is loaded first!

let slideIndex = 0;
let slideInterval;
let slides = j3; // change this to change slideshow preset (see slides-data.js)

function setupSlideshow() {
    if (!document.querySelector('.slideshow-container')) return;
    showSlides();
    startSlideInterval();
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
}

function showSlides() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.innerHTML = slides.map((slide, index) => `
        <div class="slide" style="display: ${index === slideIndex ? 'block' : 'none'}">
            <img src="${slide.imageSrc}" alt="Slide ${index + 1}" class="slide-img">
            ${slide.submittedBy !== 'n/a' ? `<p class="submitted-by">Submitted By: ${slide.submittedBy}</p>` : ''}
        </div>`).join('');
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

document.addEventListener("DOMContentLoaded", setupSlideshow);