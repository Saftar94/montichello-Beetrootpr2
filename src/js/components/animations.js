


document.addEventListener('DOMContentLoaded', () => {
    const animateItems = document.querySelectorAll('.animate-item');
    
    // Начальная анимация header
    const startHeaderAnimation = () => {
        animateItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, 100 * index);
        });
    };

    // Intersection Observer для анимации при скролле
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Запускаем начальную анимацию header
    setTimeout(startHeaderAnimation, 500);

    // Наблюдаем за элементами для анимации при скролле
    document.querySelectorAll('.animate-item:not(.header .animate-item)').forEach(item => {
        observer.observe(item);
    });
});