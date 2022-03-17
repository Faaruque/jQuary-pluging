// init owl-carousel-product-area
$(".card-img").owlCarousel({
  items: 1,
  autoplay: true,
  dots: false,
  nav: false,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
      nav: true,
      loop: true,
    },
    600: {
      items: 1,
      nav: true,
      loop: true,
    },
    750: {
      items: 2,
      nav: true,
      loop: true,
    },
    1024: {
      items: 2,
      nav: true,
      loop: true,
    },
    1200: {
      items: 3,
      nav: true,
      loop: true,
    },
    1440: {
      items: 3,
      nav: true,
      loop: true,
    },
  },
});
