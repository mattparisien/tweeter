$(document).ready(() => {
  
  $("body, footer").fadeIn(200);

  $(window).on("scroll", function () {
    if ($($(this)[0]).scrollTop() >= 54) {
      $("body nav").addClass("isScrolled");
    } else {
      $("body nav").removeClass("isScrolled");
    }
  });
});
