//Button Animations File
$(() => {
  // Helper function: scrolls to tweet form while taking nav offset into consideration
  /**
   *
   * @param {*} button Button linking to form
   */
  const scrollToForm = function (e) {
    e.preventDefault();
    $("#new-tweet").slideDown();
      setTimeout(() => {
        $("html, #root").animate(
          {
            scrollTop: $("#compose-form").offset().top - 300, //Offset top by 300px to prevent nav covering form
          },
          1500
        );
        $("#compose-form textarea").focus();  
      }, 200);    
  };

  //Nav arrow link: On click event triggers a smooth scroll to tweet form
  const $button = $("#scroll-to-form");
  const $backToTweeting = $("#backtotop");
  $($button).on("click", function (e) {
    scrollToForm(e);
  });

  $($backToTweeting).on("click", function (e) {
    scrollToForm(e);
  });

  //Animating button's hover state
  const animateHoverState = function () {
    const button = $("#submit");
    const circle = $("#submit .circle");
    const footerButton = "#signUp";
    const circle2 = "#signUp .circle";

    button.mouseover(function () {
      circle.removeClass("circleOut");
      circle.addClass("circleIn");
    });

    button.mouseleave(function () {
      circle.addClass("circleOut");
      circle.removeClass("circleIn");
    });
  };
  animateHoverState();

  //Reveal back to top button at bottom of page + simulatenously hide nav link
  const revealBackToTop = function () {

    $(window).on("scroll", function() {

      if ($(window).scrollTop() >= 650) {
        $("#backtotop").fadeIn(200);
        $(".nav-right").fadeOut(200);
      } else if ($(window).scrollTop() <= 650) {
        $("#backtotop").fadeOut(200);
        $(".nav-right").fadeIn(200)
      }
  
    })    

  };
  revealBackToTop();
});
