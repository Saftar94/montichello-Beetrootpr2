// src/js/components/gallery/gallery.js
export default function createGallery() {
    const galleryTemplate = `
        <section class="gallery">
            <div class="gallery__container">
                <h2 class="gallery__title">GALLERY</h2>
                
                <div class="gallery__grid">
                    <div class="gallery__item gallery__item--large">
                        <div class="gallery__image-wrapper">
                            <img src="../../../images/skybuil.jpg" alt="Modern Building" class="gallery__image">
                            <div class="gallery__overlay">
                                <span class="gallery__icon">360°</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="gallery__item">
                        <div class="gallery__image-wrapper">
                            <img src="../../../images/linbuild.jpg" alt="Skyscraper" class="gallery__image">
                        </div>
                    </div>
                    
                    <div class="gallery__item">
                        <div class="gallery__image-wrapper">
                            <img src="../../../images/tringbuild.jpg" alt="Modern Architecture" class="gallery__image">
                        </div>
                    </div>
                    
                    <div class="gallery__item">
                        <div class="gallery__image-wrapper">
                            <img src="../../../images/orbuild.jpg" alt="Building Design" class="gallery__image">
                        </div>
                    </div>
                    
                    <div class="gallery__item">
                        <div class="gallery__image-wrapper">
                            <img src="../../../images/cirklbuild.jpg" alt="Architecture" class="gallery__image">
                        </div>
                    </div>
                </div>
                
                <button class="gallery__more-btn">SEE MORE</button>
            </div>
        </section>
    `;

    return galleryTemplate;
}