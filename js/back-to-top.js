// Back to top button

(function () {
    const SHOW_AFTER_PX = 400;

    function setupBackToTop() {
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.type = 'button';
        button.setAttribute('aria-label', 'Back to top');
        button.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 19V5"/>
                <path d="M5 12l7-7 7 7"/>
            </svg>`;
        document.body.appendChild(button);

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        button.addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: reduceMotion ? 'auto' : 'smooth'});
        });

        function update() {
            button.classList.toggle('visible', window.scrollY > SHOW_AFTER_PX);
        }
        window.addEventListener('scroll', update, {passive: true});
        update();
    }

    document.addEventListener('DOMContentLoaded', setupBackToTop);
})();