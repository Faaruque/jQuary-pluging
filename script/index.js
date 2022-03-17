// smoothscroll js Not
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 100,
  speedAsDuration: true,
});

// bottom to top scroll javaScript here
const scrollTop = document.getElementById("scrollTop");
window.addEventListener("scroll", scrollFuncton);
function scrollFuncton() {
  if (window.pageYOffset > 300) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}
scrollTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
