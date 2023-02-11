const sliderInit = () => {
  $(".slider-block__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    touchThreshold: 150,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          touchThreshold: 200,
        },
      },
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  });
};

const windowResizeFunc = () => {
  $(window).resize(function () {
    if ($(window).width() > 768 && !$(".slider-block__slider").hasClass("slick-initialized")) {
      sliderInit();
    }
  });
};

const mobileMenuInit = () => {
  $(".dark").hide();

  $(".header__burger").click(function () {
    $(".mobile-menu").addClass("mobile-menu_opened");
    $("html").addClass("overflowed");
    $(".dark").fadeIn();
  });

  $(".mobile-menu__close").click(function () {
    $(".mobile-menu").removeClass("mobile-menu_opened");
    $("html").removeClass("overflowed");
    $(".dark").fadeOut();
  });
};

$(document).ready(function () {
  sliderInit();
  windowResizeFunc();
  mobileMenuInit();
});
