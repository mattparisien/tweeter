//Button Animations File

// Helper function: scrolls to tweet form while taking nav offset into consideration
/**
 * 
 * @param {*} button Button linking to form 
 */
const scrollToForm = function(button) {

  $(button).on("click", function (e) {
    e.preventDefault();
    $("#new-tweet").slideDown();

    setTimeout(() => {
      $("html, body").animate(
        {
          scrollTop: $("#compose-form").offset().top - 300, //Offset top by 300px to prevent nav covering form
        }, 1500);
        $("#compose-form textarea").focus();
    }, 400);
  });
}

//Nav arrow link: On click event triggers a smooth scroll to tweet form
$(document).ready(function () {
  const $button = $("#scroll-to-form");
  scrollToForm($button);
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
  const $backToTop = $(`<a id="backtotop" href="#">Back to Tweeting!</a>`).hide();
  

  $("body").append($backToTop);
  scrollToForm($backToTop);

  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 1200) {
      $($backToTop).fadeIn(200);
    } else if ($(this).scrollTop() <= 1200) {
      $($backToTop).fadeOut(200);
    }
  });
});
