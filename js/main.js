$(document).ready(function () {
  "use strict";
  $(".header__mobile__btn").click(function () {
    $(this).toggleClass("active");

    $(".header__mobile__nav").toggleClass("active");

    if ($(".header__mobile__nav").hasClass("active")) {
      $(".header__fake-modal").css("display", "block");
      $("body").css("overflow", "hidden");
      $("body").css("touch-action", "none");
    } else {
      $(".header__fake-modal").css("display", "none");
      $("body").css("overflow", "auto");
      $("body").css("touch-action", "auto");
    }
  });

  $(".modal").on("shown.bs.modal", function (e) {
    $(".slider-for").slick("refresh");
  });

  $(".photoarchive__title-links button").click(function () {
    $(".photoarchive__title-links button").removeClass("active");
    $(this).addClass("active");
    var attrTarget = $(this).attr("data-target");
    $(".photoarchive__slider").removeClass("active");
    $("#" + attrTarget).addClass("active");
    $(".photoarchive-nav").slick("refresh");
  });

  $(".dictionary__content .item").click(function () {
    $(".dictionary__content .item").removeClass("active");
    $(this).addClass("active");
    var attrTarget = $(this).attr("data-target");
    $(".dictionary__words .item").removeClass("active");
    $("#" + attrTarget).addClass("active");
  });

  $(".name__family").click(function () {
    $(".name__family").removeClass("active");
    $(this).addClass("active");
    var data = $(this).attr("data-target");
    $(".description").each(function (index, element) {
      if (data == element.id) {
        $(".description").css("display", "none");
        $(`#${element.id}`).css("display", "block");
        $(".slider-for").slick("refresh");
        $(".slider-nav").slick("refresh");
      }
    });
  });

  $(".dynasty-mobile__content-overflow").scroll(function (e) {
    var winScroll = $("body").scrollTop() || $(this).scrollTop();
    var height = $(this)[0].scrollHeight - $(this)[0].clientHeight;
    var scrolled = (winScroll / height) * 100;
    if (scrolled < 20) {
      $(".dynasty-mobile__content-animation .progress .bar").css(
        "width",
        16 + "%"
      );
      $(".dynasty-mobile__content-animation .ship .img").css("left", 12 + "%");
    } else {
      $(".dynasty-mobile__content-animation .progress .bar").css(
        "width",
        scrolled + "%"
      );
      $(".dynasty-mobile__content-animation .ship .img").css(
        "left",
        scrolled + "%"
      );
    }
  });

  $(".about-main").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background:
          "linear-gradient(0deg, rgba(51, 51, 51, 0.6), rgba(51, 51, 51, 0.6)), url(" +
          $(this).data("bg") +
          ")",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%",
      });
    }
  });

  $(".map__edu_city .title").click(function () {
    $(this).parent().toggleClass("active");
  });

  $(".dropdown_item-desk").hover(function () {
    $(this).toggleClass("active");
    $(this).children().toggleClass("active");
  });

  $(".map__edu_content-desktop .map .item").click(function () {
    var attrTarget = $(this).attr("data-target");
    $(".window .item").removeClass("active");
    $("#" + attrTarget).addClass("active");
  });

  $("body").click(function (e) {
    var div = $(".header__mobile__nav ul");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".drop_downmenu-mob").removeClass("active");
      $(".drop_item-mob").removeClass("active");
    }
  });

  $("body").click(function (e) {
    var dropDesk = $(".header__desktop");
    if (!dropDesk.is(e.target) && dropDesk.has(e.target).length === 0) {
      $(".drop_downmenu-desk").removeClass("active");
      $(".dropdown_item-desk").removeClass("active");
    }
  });

  $(".news-details__content-overflow").scroll(function (e) {
    var winScroll = $("body").scrollTop() || $(this).scrollTop();
    var height = $(this)[0].scrollHeight - $(this)[0].clientHeight;
    var scrolled = (winScroll / height) * 100;
    if (scrolled < 20) {
      $(".news-details__content-animation .progress .bar").css(
        "width",
        16 + "%"
      );
      $(".news-details__content-animation .ship .img").css("left", 12 + "%");
    } else {
      $(".news-details__content-animation .progress .bar").css(
        "width",
        scrolled + "%"
      );
      $(".news-details__content-animation .ship .img").css(
        "left",
        scrolled + "%"
      );
    }
  });

  $(".maritime_professions__for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".maritime_professions__nav",
  });

  $(".maritime_professions__nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".maritime_professions__for",
    dots: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });

  $(".maritime_professions-prev").click(function () {
    $(".maritime_professions__nav").slick("slickPrev");
  });

  $(".maritime_professions-next").click(function () {
    $(".maritime_professions__nav").slick("slickNext");
  });

  $(".friends-about__content-overflow").scroll(function (e) {
    var winScroll = $("body").scrollTop() || $(this).scrollTop();
    var height = $(this)[0].scrollHeight - $(this)[0].clientHeight;
    var scrolled = (winScroll / height) * 100;
    if (scrolled < 20) {
      $(".friends-about__content-animation .progress .bar").css(
        "width",
        16 + "%"
      );
      $(".friends-about__content-animation .ship .img").css("left", 12 + "%");
    } else {
      $(".friends-about__content-animation .progress .bar").css(
        "width",
        scrolled + "%"
      );
      $(".friends-about__content-animation .ship .img").css(
        "left",
        scrolled + "%"
      );
    }
  });

  $(".educational__for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".educational__nav",
  });

  $(".educational__nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".educational__for",
    dots: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".reviews__for_content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".reviews__nav",
  });
  $(".reviews__nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".reviews__for_content",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1500,
  });

  $(".educational__slider-next").click(function () {
    $(".educational__nav").slick("slickNext");
  });

  $(".educational__slider-prev").click(function () {
    $(".educational__nav").slick("slickPrev");
  });

  $(".review__btn-next").click(function () {
    $(".reviews__for_content").slick("slickNext");
  });

  $(".review__btn-prev").click(function () {
    $(".reviews__for_content").slick("slickPrev");
  });

  $(".main__item").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background: "url(" + $(this).data("bg") + ")",
        "background-position": "50% 30%",
        "background-repeat": "no-repeat",
        "background-size": "cover",
      });
    }
  });

  $(".main__slider").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 2500,
    cssEase: "linear",
    vertical: false,
    dots: true,
    customPaging: function (slider, i) {
      return '<a class="dot"></a>';
    },
  });

  $(".main__slider").on("afterChange", function (event, slick, currentSlide) {
    var itemLength = $(".main__item").length - 1;
    if (currentSlide == 1) {
      $(".main__slider-info").addClass("active");
    } else if (itemLength == currentSlide) {
      $(".main__slider").slick(
        "slickSetOption",
        {
          autoplay: false,
        },
        false
      );
    }
  });

  $(".faq__item").click(function () {
    $(this).toggleClass("active");
  });

  $(".header__fake-modal").click(function () {
    $(this).css("display", "none");
    $(".header__mobile__nav").removeClass("active");
    $(".header__mobile__btn").removeClass("active");
    $("body").css("overflow", "auto");
    $("body").css("touch-action", "auto");
  });

  $(".news__slider").slick({
    prevArrow: $(".news__slider-prev"),
    nextArrow: $(".news__slider-next"),
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 300,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          variableWidth: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  });

  $(".about__slider").slick({
    prevArrow: $(".about__slider-prev"),
    nextArrow: $(".about__slider-next"),
    infinite: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          variableWidth: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    customPaging: function (slider, i) {
      return '<a class="dot"></a>';
    },
  });

  $(".description").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background: "#00B7C6 url(" + $(this).data("bg") + ")",
        "background-position": "250px 250px",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%",
      });
    }
  });

  $(".modal-content").each(function () {
    if ($(window).width() <= 576) {
      if ($(this).attr("data-bg")) {
        $(this).css({
          background: "#00b7c6 url(" + $(this).data("bg") + ")",
          "background-position": "100px 500px",
          "background-repeat": "no-repeat",
          "background-size": "100% 40%",
        });
      }
    } else if ($(window).width() > 576 && $(window).width() <= 767) {
      if ($(this).attr("data-bg")) {
        $(this).css({
          background: "#00b7c6 url(" + $(this).data("bg") + ")",
          "background-position": "100px bottom",
          "background-repeat": "no-repeat",
          "background-size": "100% 60%",
        });
      }
    } else if ($(window).width() > 767 && $(window).width() <= 991) {
      if ($(this).attr("data-bg")) {
        $(this).css({
          background: "#00b7c6 url(" + $(this).data("bg") + ")",
          "background-position": "100px bottom",
          "background-repeat": "no-repeat",
          "background-size": "100% 70%",
        });
      }
    } else {
      if ($(this).attr("data-bg")) {
        $(this).css({
          background: "#00b7c6 url(" + $(this).data("bg") + ")",
          "background-position": "200px  400px",
          "background-repeat": "no-repeat",
          "background-size": "70% 50%",
        });
      }
    }
  });

  setTimeout(function () {
    $(".name__family").first().trigger("click");
  }, 10);

  //$("#theme-phone").mask("+7 (999)999-99-99");

  $(".news-details__cat-ship .item").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background:
          "linear-gradient(0deg, rgba(51, 51, 51, 0.6), rgba(51, 51, 51, 0.6)), url(" +
          $(this).data("bg") +
          ")",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "50%, 50%",
      });
    }
  });

  $(".media-news .item").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background:
          "linear-gradient(0deg, rgba(51, 51, 51, 0.6), rgba(51, 51, 51, 0.6)), url(" +
          $(this).data("bg") +
          ")",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%",
      });
    }
  });

  $(".photoarchive-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 400,
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
    asNavFor: ".photoarchive-nav",
  });

  $(".photoarchive-nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    arrows: false,
    infinite: true,
    asNavFor: ".photoarchive-single",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".photoarchive__slider-mobile-next").click(function () {
    $(".photoarchive-nav").slick("slickNext");
  });

  $(".photoarchive__slider-mobile-prev").click(function () {
    $(".photoarchive-nav").slick("slickPrev");
  });

  $(".photoarchive__slider-desktop-next").click(function () {
    $(".photoarchive-single").slick("slickNext");
  });

  $(".other-news__content h4").each(function () {
    var defaultText = $(this)[0].innerHTML;
    if (defaultText.length > 30) {
      var shortText =
        $.trim(defaultText).substring(0, 30).split(" ").slice(0, -1).join(" ") +
        "...";
      $(this).text(shortText);
    }
  });

  $(".media__slider-gallery .content").slick({
    infinite: true,
    arrows: false,
  });

  $(".media__slider-btns .prev").click(function () {
    $(".media__slider-gallery .content").slick("slickPrev");
  });

  $(".media__slider-btns .next").click(function () {
    $(".media__slider-gallery .content").slick("slickNext");
  });

  $(".media__slider-gallery .content .item .img").on("click", function () {
    $(".imagepreview").attr("src", $(this).find("img").attr("src"));
    $("#imagemodal").modal("show");
  });

  $(".gallery__item").on("click", function () {
    $(".imagepreview").attr("src", $(this).find("img").attr("src"));
    $("#imagemodal").modal("show");
  });

  $(".other-video .item").click(function () {
    var link = $(this).children();
    $(".main__video").empty();
    link.clone().appendTo(".main__video");
    $(".main__video video").attr("controls", "controls");
    $(".main__video video")[0].play();

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".main__video").offset().top - $(window).height() / 2,
      },
      1000
    );
  });

  // var $window = $(window);

  // $window.scroll(function () {
  //   var $video = $(".main__video video");
  //   var $topOfVideo = $video.offset().top;
  //   var $bottomOfVideo = $video.offset().top + $video.outerHeight();

  //   var $topOfScreen = $window.scrollTop();
  //   var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();
  //   if ($bottomOfScreen > $bottomOfVideo && $topOfScreen < $topOfVideo) {
  //     $video[0].play();
  //   } else {
  //     $video[0].pause();
  //   }
  // });

  $(".contacts__item").click(function () {
    $(this).toggleClass("active");
  });

  //подписка на новости
  $("#subscribe_form").submit(function (e) {
    e.preventDefault();
    var email = $(this).find("input[name=email]").val();
    var form = $(this);
    var url = "/local/templates/moyport/ajax/subscribe_actions.php";
    $.post(
      url,
      { email: email },
      function (data) {
        if (data != -1) {
          $("#modalMailing").modal("show");
          form[0].reset();
        }
      },
      "html"
    );
    return false;
  });
});
