import createGetInTouch from '../getInTouch/getInTouch';

export default function createFooter() {
    return `
               <section class="map-section">
            <div id="map" class="map-section__map"></div>
            <div class="map-section__content"> 
            </div>
            ${createGetInTouch()}
        </section>
                                  
        <footer class="footer">
            <div class="footer__container">
                <div class="footer__logo">
                      <a href="/" class="logo">
                  <img src="../../../images/Logo.svg" alt="logo" class="logo__img">
                    <div class="footer__copyright">
                    <p>Copyrights © 2020 Monticello</p>
                </div>

                </a>
                </div>
                <div class="footer__social">
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
        </footer>
    `;
}