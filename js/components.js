// Page layouts
// Really bad class, could probably be cleaned up so we aren't duplicating so much

// Headers
function aboutPageHeader() {
    return `
    <header>
        <div class="container">
            <nav class="left-nav">
            <ul>
                <!--Links to the left of the icon-->
                <li><a href="/about">About</a></li>
                <li><a href="/rules">Rules</a></li>
                </ul>
            </nav>
            <div class="logo" id="logo">
                <img src="/img/j3/jsicon.jpg" alt="Logo">
            </div>
            <nav class="right-nav">
                <ul>
                    <!--Links to the right of the icon-->
                    <li><a href="https://map.javasurvival.com">World Map</a></li>
                    <li><a href="/stats">Statistics</a></li>
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
                    <!-- These links only display in the dropdown when viewing on mobile devices (because on pc, we display these in the header!) -->
                    <a href="/about">About</a>
                    <a href="/rules">Rules</a>
                    <a href="https://map.javasurvival.com">World Map</a>
                    <a href="/stats">Statistics</a>
                </div>
                <!-- These links always display in the dropdown -->
                <a href="/gallery">Gallery</a>
                <a href="/downloads">Downloads</a>
                <a href="https://discord.gg/NAs8nQw" target="_blank">Discord<span class="newTabArrow"></span></a>
                <a href="https://www.reddit.com/r/JavaSurvival/" target="_blank">Reddit<span class="newTabArrow"></span></a>
                <a href="https://ko-fi.com/javasurvival" target="_blank">Donate<span class="newTabArrow"></span></a>
            </div>
        </div>
    </header>`;
}

function homePageHeader() {
    return `
    <header>
        <div class="container">
            <nav class="left-nav">
            <ul>
                <!--Links to the left of the icon-->
                <li><a href="/home">Home</a></li>
                <li><a href="/rules">Rules</a></li>
                </ul>
            </nav>
            <div class="logo" id="logo">
                <img src="/img/j3/jsicon.jpg" alt="Logo">
            </div>
            <nav class="right-nav">
                <ul>
                    <!--Links to the right of the icon-->
                    <li><a href="https://map.javasurvival.com">World Map</a></li>
                    <li><a href="/stats">Statistics</a></li>
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
                    <!-- These links only display in the dropdown when viewing on mobile devices (because on pc, we display these in the header!) -->
                    <a href="/home">Home</a>
                    <a href="/rules">Rules</a>
                    <a href="https://map.javasurvival.com">World Map</a>
                    <a href="/stats">Statistics</a>
                </div>
                <!-- These links always display in the dropdown -->
                <a href="/gallery">Gallery</a>
                <a href="/downloads">Downloads</a>
                <a href="https://discord.gg/NAs8nQw" target="_blank">Discord<span class="newTabArrow"></span></a>
                <a href="https://www.reddit.com/r/JavaSurvival/" target="_blank">Reddit<span class="newTabArrow"></span></a>
                <a href="https://ko-fi.com/javasurvival" target="_blank">Donate<span class="newTabArrow"></span></a>
            </div>
        </div>
    </header>`;
}

function homeAboutPageHeader() {
    return `
    <header>
        <div class="container">
            <nav class="left-nav">
            <ul>
                <!--Links to the left of the icon-->
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                </ul>
            </nav>
            <div class="logo" id="logo">
                <img src="/img/j3/jsicon.jpg" alt="Logo">
            </div>
            <nav class="right-nav">
                <ul>
                    <!--Links to the right of the icon-->
                    <li><a href="https://map.javasurvival.com">World Map</a></li>
                    <li><a href="/stats">Statistics</a></li>
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
                    <!-- These links only display in the dropdown when viewing on mobile devices (because on pc, we display these in the header!) -->
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="https://map.javasurvival.com">World Map</a>
                    <a href="/stats">Statistics</a>
                </div>
                <!-- These links always display in the dropdown -->
                <a href="/rules">Rules</a>
                <a href="/gallery">Gallery</a>
                <a href="/downloads">Downloads</a>
                <a href="https://discord.gg/NAs8nQw" target="_blank">Discord<span class="newTabArrow"></span></a>
                <a href="https://www.reddit.com/r/JavaSurvival/" target="_blank">Reddit<span class="newTabArrow"></span></a>
                <a href="https://ko-fi.com/javasurvival" target="_blank">Donate<span class="newTabArrow"></span></a>
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
    applyContent('.homeAboutPageHeader', homeAboutPageHeader());
    applyContent('.footer', footer());
    applyContent('.newTabArrow', newTabArrowSVG);
    applyContent('.downloadArrow', downloadArrowSVG);
});