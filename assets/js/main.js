(function($) {
  "use strict";

  $(window).on("load", function() {
    $("#preloader")
      .delay(350)
      .fadeOut("slow");
    $("body")
      .delay(350)
      .css({ overflow: "visible" });
  });

  // meanmenu
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "1200"
  });

  // sticky
  var wind = $(window);
  var sticky = $("#header-sticky");
  wind.on("scroll", function() {
    var scroll = wind.scrollTop();
    if (scroll < 300) {
      sticky.removeClass("sticky-header");
    } else {
      sticky.addClass("sticky-header");
    }
  });

  // data - background
  $("[data-background]").each(function() {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  // blog - active
  $(".postbox__gallery").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // isotop
  $(".blog-masonry").imagesLoaded(function() {
    // init Isotope
    var $grid = $(".blog-masonry").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item"
      }
    });
  });

  // isotop
  $(".grid").imagesLoaded(function() {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item"
      }
    });
  });

  // scrollToTop
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
    activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  // WOW active
  new WOW().init();

  /* Search
-------------------------------------------------------*/
  var $searchWrap = $(".search-wrap");
  var $navSearch = $(".nav-search");
  var $searchClose = $("#search-close");

  $(".search-trigger").on("click", function(e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: "toggle" }, 500);
    $navSearch.add($searchClose).addClass("open");
  });

  $(".search-close").on("click", function(e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: "toggle" }, 500);
    $navSearch.add($searchClose).removeClass("open");
  });

  function closeSearch() {
    $searchWrap.fadeOut(200);
    $navSearch.add($searchClose).removeClass("open");
  }

  $(document.body).on("click", function(e) {
    closeSearch();
  });

  $(".search-trigger, .main-search-input").on("click", function(e) {
    e.stopPropagation();
  });

  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById("search-input"),
    resultsContainer: document.getElementById("results-container"),
    json: "/search.json"
  });
})(jQuery);
