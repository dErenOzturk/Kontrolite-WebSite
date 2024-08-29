(function ($) {
  "use strict";

  var windowOn = $(window);

  ///////////////////////////////////////////////////
  // 01. PreLoader Js
  windowOn.on("load", function () {
    $("#loading").fadeOut(500);
  });

  ///////////////////////////////////////////////////
  // 02. SubMenu Dropdown Toggle
  if ($(".tp-main-menu nav > ul > li.has-dropdown > a").length) {
    $(".tp-main-menu nav > ul > li.has-dropdown > a").append(
      '<i class="fal fa-angle-down"></i>'
    );
  }

  ///////////////////////////////////////////////////
  // 03. scroll-to-target
  windowOn.on("scroll", function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 500) {
      $(".scroll-to-target").removeClass("open");
    } else {
      $(".scroll-to-target").addClass("open");
    }
  });

  ///////////////////////////////////////////////////
  // 04. Scroll Up Js
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        100
      );
    });
  }

  ///////////////////////////////////////////////////
  // 05. wow animation
  var wow = new WOW({
    mobile: true,
  });
  wow.init();

  ////////////////////////////////////////////////////
  // 08. Mobile Menu Js
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  $(window).on("load", function () {
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({ overflow: "visible" });
  });

  ////////////////////////////////////////////////////
  // 09. Sidebar Js
  $(".tp-menu-bar").on("click", function () {
    $(".mobile-sidebar").addClass("opened");
    $(".body-overlay").addClass("apply");
  });
  $(".close-btn").on("click", function () {
    $(".mobile-sidebar").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });
  $(".body-overlay").on("click", function () {
    $(".mobile-sidebar").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });

  ////////////////////////////////////////////////////
  // 11. Data CSS Js
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  // 08. Nice Select Js
  $("select").niceSelect();
})(jQuery);