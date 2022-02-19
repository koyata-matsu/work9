var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    freeMode: false,
    slidesPerView: 1,
    breakpoints: {
        // 768px以上の場合
        820: {
            slidesPerView: 3,
        },

        1200: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    autoplay: {
        delay: 5000,
    },
});
AOS.init();

$(function() {
    $('.button_ac').click(function() {
        $(this).toggleClass('selected');
        $(this).next().slideToggle();
    }).next().hide();
    $('.button_ac1').click(function() {
        $(this).toggleClass('selected');
        $(this).next().slideToggle();
    })

});