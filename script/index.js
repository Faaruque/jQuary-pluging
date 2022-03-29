$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $("#NavBar").addClass("sticky");
    } else {
      $("#NavBar").removeClass("sticky");
    }
  });
});
