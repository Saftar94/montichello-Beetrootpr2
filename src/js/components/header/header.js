export default function createHeader() {
    const currentPath = window.location.hash;
    const headerTemplate = `
        <header class="header">
            <div class="header-container">
                <a href="/" class="logo">
                  <img src="../../../images/Logo.svg" alt="logo" class="logo__img">
                </a>

                <nav class="nav-menu">
                    <a href="#about" class="nav-link ${currentPath === '#about' ? 'active' : ''}">ABOUT US</a>
                    <a href="#projects" class="nav-link ${currentPath === '#projects' ? 'active' : ''}">PROJECTS</a>
                    <a href="#news" class="nav-link ${currentPath === '#news' ? 'active' : ''}">NEWS</a>
                    <a href="#contact" class="nav-link ${currentPath === '#contact' ? 'active' : ''}">CONTACT</a>
                </nav>

                <div class="burger" id="burgerIcon">
                    <svg class="burger-svg">
                    <use href="../../../images/main.svg#icon-burger"></use>
                    </svg>
                </div>

                <div class="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-links__item">
                    <svg class="social-links__icon">
                    <use href="../../../images/main.svg#icon-facebook"></use>
                    </svg>
              </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-links__item">
                <svg class="social-links__icon">
                        <use href="../../../images/main.svg#icon-twitter"></use>
                        </svg>
                        </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-links__item">
                        <svg class="social-links__icon">
                         <use href="../../../images/main.svg#icon-instagram"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </header>

        <div class="nav-modal" id="navModal">
        <span class="close-menu" id="closeMenu">&times;</span>
        <nav class="nav-menu-modal modal-nav">
            <a href="#about" class="nav-link">ABOUT US</a>
            <a href="#projects" class="nav-link">PROJECTS</a>
            <a href="#news" class="nav-link">NEWS</a>
            <a href="#contact" class="nav-link">CONTACT</a>
        </nav>
    </div>
    `;

    return headerTemplate;
}

export function initHeaderEvents() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (!link.classList.contains('active')) {
                link.classList.add('hovered');
            }
        });

        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                link.classList.remove('hovered');
            }
        });

        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    window.addEventListener('hashchange', () => {
        const currentHash = window.location.hash;
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
}