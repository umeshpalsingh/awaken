$(document).ready(function () {
    $('.preview_screen').delay(500).fadeOut(1000);
});
// setTimeout(function() {
//     $('.preview_screen').delay(1000).effect('drop', 500);
// })
$('.mobile-toggle').click(function () {
    $('.mobile-toggle button.hamburger.hamburger-one').toggleClass('rotate');
    $('.side-mobile-menu').toggleClass('showMenu');
});
$(document).ready(function(){
    $(function toTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $('.site-header').addClass('gredient');
                $('.site-header .main-navigation ul li .sub-menu').addClass('gredient');
            } else {
                $('.site-header').removeClass('gredient');
                $('.site-header .main-navigation ul li .sub-menu').removeClass('gredient');
            }
        });
    });           
  });
var swiper1 = new Swiper(".myTestimonial", {
    speed: 1500,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 180,
      slideShadows: false,
    },
});
var swiper2 = new Swiper(".ourServices", {
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var swiper3 = new Swiper(".myVideos", {
    speed: 1000,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        428: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1399: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});
$(document).ready(function () {
    $('.videos-slider .myVideos .swiper-slide').click(function () {
        var currentVideo = $(this).children('iframe').attr('src');
        $('#updateVideo iframe').attr('src', currentVideo);
    });
});
AOS.init({
    disable: 'mobile',
    duration: 1000,
    easing: 'ease',
    once: true,
  });