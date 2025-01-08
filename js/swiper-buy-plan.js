"use strict"

new Swiper('.plans-slider', {
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    
    slidesPerView: 1,
    initialSlide: 1,


    breakpoints: {
        480: {
            spaceBetween: 90,
        },
        1100: {
            spaceBetween: 100,
        },
    }
});