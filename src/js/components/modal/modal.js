export default function headerModal() {
    const burgerIcon = document.getElementById('burgerIcon');
    const closeMenu = document.getElementById('closeMenu');
    const navModal = document.getElementById('navModal');

    burgerIcon.addEventListener('click', () => {
        navModal.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        navModal.classList.remove('active');
    });

    // Optionally, close the modal if clicking outside the nav menu
    navModal.addEventListener('click', (event) => {
        if (event.target === navModal) {
            navModal.classList.remove('active');
        }
    });
}