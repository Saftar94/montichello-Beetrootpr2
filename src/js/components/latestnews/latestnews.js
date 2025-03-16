const newsData = [
    {
        image: '../../../images/modernbuild.jpg',
        title: 'SEE THE UNMATCHED BEAUTY OF THE GREAT.',
        description: 'Free directories: directories are perfect for customers that are searching for...',
        author: {
            name: 'ALJA BRUN',
            image: '../../../images/alja.jpg',
            date: '20 Jan 2020'
        }
    },
    {
        image: '../../../images/whitebuild.jpg',
        title: 'EFFECTIVE ADVERTISING POINTERS.',
        description: 'Having a home based business is a wonderful asset to your life...',
        author: {
            name: 'DOMINIC FREEMAN',
            image: '../../../images/dominic.jpg',
            date: '13 Dec 2019'
        }
    },
    {
        image: '../../../images/skybuild.jpg',
        title: 'HYPNOTIZE YOURSELF INTO THE GHOST.',
        description: 'There are many things that are important to catalog design...',
        author: {
            name: 'ALICE WARD',
            image: '../../../images/alice.jpg',
            date: '30 Nov 2019'
        }
    },
    {
        image: '../../../images/skybuild.jpg',
        title: 'HYPNOTIZE YOURSELF INTO THE GHOST.',
        description: 'There are many things that are important to catalog design...',
        author: {
            name: 'ALICE WARD',
            image: '../../../images/alice.jpg',
            date: '30 Nov 2019'
        }
    },
    {
        image: '../../../images/whitebuild.jpg',
        title: 'EFFECTIVE ADVERTISING POINTERS.',
        description: 'Having a home based business is a wonderful asset to your life...',
        author: {
            name: 'DOMINIC FREEMAN',
            image: '../../../images/dominic.jpg',
            date: '13 Dec 2019'
        }
    },
];

export default function createLatestNews() {
    const newsCards = newsData.map(news => `
        <article class="news-card">
            <div class="news-card__image-wrapper">
                <img src="${news.image}" alt="${news.title}" class="news-card__image">
            </div>
            <div class="news-card__content">
                <h3 class="news-card__title">${news.title}</h3>
                <p class="news-card__description">${news.description}</p>
                <div class="news-card__author">
                    <img src="${news.author.image}" alt="${news.author.name}" class="news-card__author-image">
                    <div class="news-card__author-info">
                        <span class="news-card__author-name">${news.author.name}</span>
                        <span class="news-card__date">${news.author.date}</span>
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    const latestNewsTemplate = `
    <section class="latest-news">
        <div class="latest-news__container">
            <h2 class="latest-news__title">LATEST NEWS</h2>
                         <button class="slider-button slider-button--prev" id="prevSlide">
                    <svg class="slider-button__icon">
                        <use href="../../../images/main.svg#icon-down"></use>
                    </svg>
                </button>
            <div class="latest-news__slider">
   

                <div class="news-cards">
                    ${newsCards}
                </div>

             
            </div>
   <button class="slider-button slider-button--next" id="nextSlide">
                    <svg class="slider-button__icon">
                        <use href="../../../images/main.svg#icon-down"></use>
                    </svg>
                </button>
            <div class="slider-dots">
                ${newsData.map((_, index) => `
                    <button class="slider-dot ${index === 0 ? 'active' : ''}"></button>
                `).join('')}
            </div>
        </div>
    </section>
`;
    

    return latestNewsTemplate;
}