$(document).ready(function () {
  // owl carousel script
  $(".teams-wapper").owlCarousel({
    margin: 20,
    autoplay: true,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
