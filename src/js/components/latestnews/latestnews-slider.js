export default function initLatestNewsSlider() {
    const slider = document.querySelector('.news-cards');
    const slides = document.querySelectorAll('.news-card');
    const dots = document.querySelectorAll('.slider-dot');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');

    let currentSlide = 0;
    let slideWidth = slides[0].offsetWidth + 30; // 30px это gap между слайдами

    console.log('Initial slide width:', slideWidth); // Проверка начальной ширины слайда

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide % slides.length);
        });

        console.log('Current slide:', currentSlide); // Проверка текущего слайда
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    window.addEventListener('resize', () => {
        slideWidth = slides[0].offsetWidth + 30;
        console.log('Resized slide width:', slideWidth); // Проверка ширины слайда после изменения размера окна
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    });

    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    updateSlider();
}