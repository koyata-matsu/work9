var swiper = new Swiper('.swiper-container', {
    // ここからはオプションです。
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        slidesPerView: 1,
        // 820px以上の場合
        820: {
            slidesPerView: 3,
        },
        // 1200px以上の場合
        1280: {
            slidesPerView: 6,
        }
    }
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