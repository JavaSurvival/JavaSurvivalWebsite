console.log('  /\\_/\\  (\n' +
    ' ( ^.^ ) _)\n' +
    '   \\"/  (\n' +
    ' ( | | )\n' +
    '(__d b__)\n\n' +
    'braden was here :)')

// Headers
// header links to about page
function aboutPageHeader() {
    return `
    <header>
        <div class="container">
            <nav class="left-nav">
            <ul>
                <!--Links to the left of the icon-->
                <li><a href="/about">About</a></li>
                <li><a href="https://forums.javasurvival.com" target="_blank">Forums<span class="newTabArrow"></span></a></li>
                </ul>
            </nav>
            <div class="logo" id="logo">
                <img src="/img/j3/jsicon.jpg" alt="Logo">
            </div>
            <nav class="right-nav">
                <ul>
                    <!--Links to the right of the icon-->
                    <li><a href="https://map.javasurvival.com" target="_blank">World Map<span class="newTabArrow"></span></a></li>
                    <li><a href="/statsPlaceholder" target="_blank">Statistics<span class="newTabArrow"></span></a></li>
                </ul>
            </nav>
        </div>
        <button class="hamburger-menu">
            <div></div>
            <div></div>
            <div></div>
        </button>
        <div class="dropdown">
            <div class="dropdown-content">
                <div class="left-right-nav">
                    <!-- These links only display in the dropdown when viewing on mobile devices -->
                    <a href="/about">About</a>
                    <a href="https://forums.javasurvival.com" target="_blank">Forums<span class="newTabArrow"></span></a>
                    <a href="https://map.javasurvival.com" target="_blank">World Map<span class="newTabArrow"></span></a>
                    <a href="/statsPlaceholder" target="_blank">Statistics<span class="newTabArrow"></span></a>
                </div>
                <!-- These links always display in the dropdown -->
                <a href="https://discord.gg/bthyXut3KB" target="_blank">Discord<span class="newTabArrow"></span></a>
                <a href="https://www.reddit.com/r/JavaSurvival" target="_blank">Reddit<span class="newTabArrow"></span></a>
                <a href="https://www.paypal.com/donate/?hosted_button_id=42HLPCHHT4DRW" target="_blank">Donate<span class="newTabArrow"></span></a>
            </div>
        </div>
    </header>`;
}

// header links to home page
function homePageHeader() {
    return `
    <header>
        <div class="container">
            <nav class="left-nav">
            <ul>
                <!--Links to the left of the icon-->
                <li><a href="/home">Home</a></li>
                <li><a href="https://forums.javasurvival.com" target="_blank">Forums<span class="newTabArrow"></span></a></li>
                </ul>
            </nav>
            <div class="logo" id="logo">
                <img src="/img/j3/jsicon.jpg" alt="Logo">
            </div>
            <nav class="right-nav">
                <ul>
                    <!--Links to the right of the icon-->
                    <li><a href="https://map.javasurvival.com" target="_blank">World Map<span class="newTabArrow"></span></a></li>
                    <li><a href="/statsPlaceholder" target="_blank">Statistics<span class="newTabArrow"></span></a></li>
                </ul>
            </nav>
        </div>
        <button class="hamburger-menu">
            <div></div>
            <div></div>
            <div></div>
        </button>
        <div class="dropdown">
            <div class="dropdown-content">
                <div class="left-right-nav">
                    <!-- These links only display in the dropdown when viewing on mobile devices -->
                    <a href="/home">Home</a>
                    <a href="https://forums.javasurvival.com" target="_blank">Forums<span class="newTabArrow"></span></a>
                    <a href="https://map.javasurvival.com" target="_blank">World Map<span class="newTabArrow"></span></a>
                    <a href="/statsPlaceholder" target="_blank">Statistics<span class="newTabArrow"></span></a>
                </div>
                <!-- These links always display in the dropdown -->
                <a href="https://discord.gg/bthyXut3KB" target="_blank">Discord<span class="newTabArrow"></span></a>
                <a href="https://www.reddit.com/r/JavaSurvival" target="_blank">Reddit<span class="newTabArrow"></span></a>
                <a href="https://www.paypal.com/donate/?hosted_button_id=42HLPCHHT4DRW" target="_blank">Donate<span class="newTabArrow"></span></a>
            </div>
        </div>
    </header>`;
}

// Footer
function footer() {
    return `
<footer>
    <div class="container">
        <p>mc.javasurvival.com</p>
    </div>
</footer>`;
}

// SVG Icons
function createSVGIcon(pathData) {
    return `
        <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="${pathData}" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>`;
}

const newTabArrowSVG = createSVGIcon("M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z");
const downloadArrowSVG = createSVGIcon("M11.78 4.22a.75.75 0 0 1 0 1.06L6.56 10.5h3.69a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 1.5 0v3.69l5.22-5.22a.75.75 0 0 1 1.06 0Z");

// Apply Content
function applyContent(selector, content) {
    document.querySelectorAll(selector).forEach(element => {
        element.innerHTML = content;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    applyContent('.homePageHeader', homePageHeader());
    applyContent('.aboutPageHeader', aboutPageHeader());
    applyContent('.footer', footer());
    applyContent('.newTabArrow', newTabArrowSVG);
    applyContent('.downloadArrow', downloadArrowSVG);
    setupSlideshow();
    setupHamburger()
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

const j3Slides = [{}]

// Thank you to aspera for providing these wonderful images!
const christmasSlides = [
    {imageSrc: '/img/slideshowimgs/christmas/christmas.jpg', submittedBy: 'n/a'},
    {imageSrc: '/img/slideshowimgs/christmas/christmas1.jpg', submittedBy: 'n/a'},
    {imageSrc: '/img/slideshowimgs/christmas/christmas2.jpg', submittedBy: 'n/a'},
    {imageSrc: '/img/slideshowimgs/christmas/christmas3.jpg', submittedBy: 'n/a'},
    {imageSrc: '/img/slideshowimgs/christmas/christmas4.jpg', submittedBy: 'n/a'}
];

// Hamburger code
function setupHamburger() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown');

    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('active');
        dropdownMenu.classList.toggle('active');
    });
    document.addEventListener("click", function (event) {
        if (!hamburgerMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
            hamburgerMenu.classList.remove('active');
            dropdownMenu.classList.remove("active");
        }
    });
}

// Slideshow code
let slideIndex = 0;
let slideInterval;
let slides = j2Slides; // change this to change slideshow preset

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
