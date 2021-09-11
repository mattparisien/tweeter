//Button Animations File

//Nav arrow link: On click event triggers a smooth scroll to tweet form
$(document).ready(function () {
  const $link = $("#scroll-to-form");

  $($link).on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#compose-form").offset().top - 300, //Offset top by 300px to prevent nav covering form
      },
      1500
    );
  });
});

//Adds and removes classes to form submit button to animate its circle
$(document).ready(() => {
  const button = $("#submit");
  const circle = $("#submit .circle");

  button.mouseover(function () {
    circle.removeClass("circleOut");
    circle.addClass("circleIn");
  });

  button.mouseleave(function () {
    circle.addClass("circleOut");
    circle.removeClass("circleIn");
  });
});

//Reveal back to top button on scroll animation
$(document).ready(function () {
  const $backToTop = $(`<a id="backtotop" href="#">Back to Top</a>`).hide();
  $("body").append($backToTop);

  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 1200) {
      $($backToTop).fadeIn(200);
    } else if ($(this).scrollTop() <= 1200) {
      $($backToTop).fadeOut(200);
    }
  });
});
