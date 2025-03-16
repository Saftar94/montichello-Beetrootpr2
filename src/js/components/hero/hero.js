

export const heroContents = [
    { title: "Simple & Modern", subtitle: "We make the world beautiful everyday" },
    { title: "Innovative & Creative", subtitle: "Transforming ideas into reality" },
    { title: "Efficient & Reliable", subtitle: "Building solutions for tomorrow" },
    { title: "Efficient & Reliable", subtitle: "Building solutions for tomorrow" },
    { title: "Innovative & Creative", subtitle: "Transforming ideas into reality" },


];

let currentIndex = 0;

export function updateHeroContent() {
    currentIndex = (currentIndex + 1) % heroContents.length;
    const heroContent = document.querySelector('.hero__content');
    const dots = document.querySelectorAll('.hero__dot');

    if (heroContent) {
        heroContent.innerHTML = `
            <h1 class="hero__title">${heroContents[currentIndex].title}</h1>
            <p class="hero__subtitle">${heroContents[currentIndex].subtitle}</p>
        `;
    }

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

export default function initHeroScroll() {
    const dotsHtml = heroContents.map((_, index) => `<div class="hero__dot ${index === 0 ? 'active' : ''}"></div>`).join('');

    const mainSection = `
    <main class="main">
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${heroContents[currentIndex].title}</h1>
                <p class="hero__subtitle">${heroContents[currentIndex].subtitle}</p>
            </div>
            <div class="hero__dots">
                ${dotsHtml}
            </div>
            <a href="#next-section" class="hero__scroll">
                <svg class="social-links__icon">
                    <use href="../../../images/main.svg#icon-down"></use>
                </svg>
            </a>
        </section>
    </main>`;

    return mainSection;
}

export function initHeroScrollEvents() {
    const scrollButton = document.querySelector('.hero__scroll');
    const scrollIcon = document.querySelector('.hero__scroll svg');

    if (scrollButton) {
        scrollButton.addEventListener('click', (e) => {
            e.preventDefault();
            updateHeroContent();
        });
    } else {
        console.error('Scroll button not found');
    }

    if (scrollIcon) {
        scrollIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            updateHeroContent();
        });
    } else {
        console.error('SVG не найден');
    }
}
