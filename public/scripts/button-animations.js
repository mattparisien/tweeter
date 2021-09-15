//Button Animations File

$(document).ready( function() {
  
// Helper function: scrolls to tweet form while taking nav offset into consideration
/**
 *
 * @param {*} button Button linking to form
 */
 const scrollToForm = function (e) {
  e.preventDefault();
  $("#new-tweet").slideDown();

  setTimeout(() => {
    $("html, body").animate(
      {
        scrollTop: $("#compose-form").offset().top - 300, //Offset top by 300px to prevent nav covering form
      },
      1500
    );
    $("#compose-form textarea").focus();
  }, 400);
};

//Nav arrow link: On click event triggers a smooth scroll to tweet form
const $button = $("#scroll-to-form");
$button.on("click", function (e) {
  scrollToForm(e);
});

//Adds and removes classes to buttons to animate circle background on hover state

const button = $("#submit");
const circle = $("#submit .circle");
const footerButton = ("#signUp");
const circle2 = ("#signUp .circle");

button.mouseover(function () {
  circle.removeClass("circleOut");
  circle.addClass("circleIn");
});

button.mouseleave(function () {
  circle.addClass("circleOut");
  circle.removeClass("circleIn");
});

footerButton.mouseover(function () {
  circle2.removeClass("circleOut");
  circle2.addClass("circleIn");
});

footerButton.mouseleave(function () {
  circle2.addClass("circleOut");
  circle2.removeClass("circleIn");
});


//Reveal back to top button on scroll animation + hide nav link
const $backToTop = $(
  `<a class="backtotop" href="#">Back to Tweeting!</a>`
).hide();
const $navLink = $(".nav-right");

$("body").append($backToTop);

$backToTop.on("click", function (e) {
  scrollToForm(e);
});

$(window).on("scroll", function () {
  if ($(this).scrollTop() >= 1200) {
    console.log('in here!')
  
  } else {
    $($backToTop).fadeOut(200);
  }

  if ($backToTop.is(":visible")) {
    $($navLink).fadeOut(200);
  } else {
    $($navLink).fadeIn(200);
  }
});

$(document).ready(function() {
  
})


})









