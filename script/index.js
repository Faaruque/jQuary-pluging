$(document).ready(function () {
  // init Isotope
  var $grid = $(".portfolio").isotope();
  // filter items on menu click
  $(".portfolio-menu").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // filter items on menuActive click
  $(".portfolio-menu").on("click", "li", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // jQuery 1.7.2+ or Zepto.js
  $(".image-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
