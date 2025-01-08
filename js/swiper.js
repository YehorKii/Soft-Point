"use strict"

new Swiper('.supports-slider', {
    scrollbar: {
        el: '.swiper-scrollbar',
        //Перетаскивание скролла
        draggable: false,
    },
    
    loop: true,
    loopedSlides: 2,


    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        807: {
            slidesPerView: 3,
        }
    },
});