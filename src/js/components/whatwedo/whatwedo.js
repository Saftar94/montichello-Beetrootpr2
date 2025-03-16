// src/js/components/whatwedo/whatwedo.js
export default function createWhatWeDo() {
    const whatWeDoTemplate = `
        <section class="what-we-do container">
            <h2 class="what-we-do__title">WHAT WE DO</h2>
            
            <div class="project">
                <div class="project__image-wrapper">
                    <img src="../../../images/build.jpg" alt="Trade Center" class="project__image">
                </div>
                <div class="project__content">
                    <span class="project__subtitle">ONE WORLD</span>
                    <h3 class="project__title">TRADE CENTER</h3>
                    <p class="project__description">
                        Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful.
                    </p>
                    <button class="project__more-details">MORE DETAILS</button>
                    <div class="project__location">
                        <svg class="wedo-icon">
                    <use href="../../../images/main.svg#icon-map-marker"></use>
                </svg>
                        <span>New York City, United States - 1776 feet</span>
                    </div>
                </div>
            </div>

            <div class="project project--reverse">
                <div class="project__content">
                    <span class="project__subtitle">INTERNATIONAL</span>
                    <h3 class="project__title">COMMERCE CENTRE</h3>
                    <p class="project__description">
                        Successful businesses have many things in common, today we'll look at the big 'R' of recognition and how a digital advertising network may help.
                    </p>
                    <button class="project__more-details">MORE DETAILS</button>
                    <div class="project__location">
                       <svg class="wedo-icon">
                    <use href="../../../images/main.svg#icon-map-marker"></use>
                </svg>
                        <span>Hong Kong - 1588 feet</span>
                    </div>
                </div>
                <div class="project__image-wrapper">
                    <img src="../../../images/lagerhouse.jpg" alt="Commerce Centre" class="project__image">
                </div>
            </div>
        </section>
    `;

    return whatWeDoTemplate;
}