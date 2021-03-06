'use strict';
import inputValidation from './modules/inputValidation';
import toggleModal from './modules/toggleModal';
import smoothScroll from './modules/smoothScroll';
import topSlider from './modules/topSlider';
import CarouselServices from './modules/carouselServices';
import accordeon from './modules/accordeon';
import scrollTop from './modules/scrollTop';
import sendForm from './modules/sendForm';

//togglePopUp
toggleModal();

//smoothScroll плавная прокрутка
smoothScroll(); 

//Главный слайдер 
topSlider();

//Слайдер корусель в блоке сервис
const options = {
    main: '.services-elements',
    wrap: '.services-carousel',
    prev: '.arrow-left',
    next: '.arrow-right',
    infinity: true,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 3,
    },
    {
        breakpoint: 768,
        slidesToShow: 2,
    },
    {
        breakpoint: 576,
        slidesToShow: 1,
    },
    ]
};
const carousel = new CarouselServices(options);
carousel.init();

// Аккордеон

accordeon();

// Скролл к топу
scrollTop();

//Валидация инпутов в форме
inputValidation();

//отправка форм
sendForm();

