    export default function createGetInTouch() {
        return `
 
            <div class="get-in-touch container">
                <h2 class="get-in-touch__title">GET IN TOUCH</h2>
                
                <div class="get-in-touch__content">
                <div class="get-in-touch__info">
                    <div class="get-in-touch__item">
                    <i class="icon-location"></i>
                    <span>91 Nolan Extensions Suite 670</span>
                    </div>
                    
                    <div class="get-in-touch__item">
                    <i class="icon-phone"></i>
                    <span>+001 356-868-2454</span>
                    </div>
    
                    <div class="get-in-touch__item">
                    <i class="icon-email"></i>
                    <span>montichello@service.com</span>
                    </div>
    
                    <div class="get-in-touch__item">
                    <i class="icon-clock"></i>
                    <span>From 07:05AM to 19:30PM</span>
                    </div>
                </div>
    
                <form class="get-in-touch__form">
                    <input type="text" placeholder="Mollie Medina" />
                    <input type="email" placeholder="Email" />
                    <button type="submit">SUBMIT</button>
                </form>
                </div>
            </div>
        `;
    }
    
  
    

    export function initMap() {
        const mapElement = document.getElementById('map');
        if (!mapElement) return;
    
        // Координаты вашей локации (пример: Нью-Йорк)
        const location = { 
            lat: 40.7128, 
            lng: -74.0060 
        };
    
        // Настройки карты
        const mapOptions = {
            zoom: 13,
            center: location,
            // Отключаем стандартные элементы управления
            disableDefaultUI: true,
            zoomControl: true,
            // Кастомные стили для карты
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                }
            ]
        };
    
        const map = new google.maps.Map(mapElement, mapOptions);
    
        // Добавляем маркер
        new google.maps.Marker({
        position: location,
        map: map,
        title: 'Monticello'
        });
    }
    
    
    export function initGetInTouchEvents() {
        if (typeof google !== 'undefined') {
        initMap();
        }
    
        const form = document.querySelector('.get-in-touch__form');
        if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        }
    }