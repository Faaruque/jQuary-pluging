$(document).ready(function () {
  $(window).scroll(function () {
    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up").addClass("show");
    } else {
      $(".scroll-up").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up").click(function () {
    $("html").animate({ scrollTop: 0 });

    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });
});
