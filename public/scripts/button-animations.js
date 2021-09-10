//Adds and removes classes to submit button to animate its circle

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
