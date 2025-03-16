import {  initHeroScrollEvents } from './components/hero/hero';
import './components/animations';
import './components/footer/footer';
import './components/modal/modal';
import './components/form/form';
import './components/slider/slider';
import './components/bottom/bottom';
import '../sass/main.scss';
import createHeader, { initHeaderEvents } from './components/header/header';
import headerModal from './components/modal/modal';
import initHeroScroll from './components/hero/hero';
import createWhatWeDo from './components/whatwedo/whatwedo';
import createLatestNews from './components/latestnews/latestnews';
import initLatestNewsSlider from './components/latestnews/latestnews-slider';
import createGallery from './components/gallery/gallery';
import  { initGetInTouchEvents } from './components/getInTouch/getInTouch';
import createFooter from './components/footer/footer';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    if (!root) {
        console.error('Root element not found');
        return;
    }

    root.innerHTML = createHeader()
    + initHeroScroll() 
    + createWhatWeDo()
    + createLatestNews()
    + createGallery()
    // + createGetInTouch()
    + createFooter();

    initHeaderEvents();
    headerModal();
    initHeroScrollEvents();
    createWhatWeDo();
    createLatestNews();
    initLatestNewsSlider();
    createGallery();
    // createGetInTouch();
    createFooter();
    initGetInTouchEvents();


});
