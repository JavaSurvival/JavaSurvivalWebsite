// Gallery page, make sure slides-data.js is loaded first!

// Order shown on the page. Add new sets of images here.
const gallerySections = [
    {id: 'j3-old', title: 'Java Survival 3', slides: j3Old},
    {id: 'j2-old', title: 'Java Survival 2', slides: j2Old},
    {id: 'sneaky25', title: 'Sneaky Screenshots Summer 2025', slides: snscsu25},
    {id: 'christmas2025', title: 'Christmas 2025', slides: christmas25},
];

function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function renderGallery() {
    const root = document.getElementById('gallery');
    const nav = document.getElementById('gallery-nav');
    if (!root) return;

    if (nav) {
        nav.innerHTML = gallerySections
            .map(s => `<a href="#${s.id}">${escapeHTML(s.title)}</a>`)
            .join('');
    }

    root.innerHTML = gallerySections.map(section => {
        const items = section.slides.map(slide => {
            const hasCredit = slide.submittedBy !== 'n/a';
            const alt = hasCredit ? `Screenshot by ${escapeHTML(slide.submittedBy)}` : 'Screenshot';
            return `
                <figure class="gallery-item">
                    <img class="gallery-img" src="${slide.imageSrc}" alt="${alt}" loading="lazy">
                    ${hasCredit ? `<span class="gallery-credit">Submitted By: ${escapeHTML(slide.submittedBy)}</span>` : ''}
                </figure>`;
        }).join('');

        return `
            <section class="gallery-section" id="${section.id}">
                <h2>${escapeHTML(section.title)}</h2>
                ${items}
            </section>`;
    }).join('');
}

document.addEventListener('DOMContentLoaded', renderGallery);