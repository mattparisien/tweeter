$(document).ready(() => {

  $(window).on('scroll', function() {

    if ($($(this)[0]).scrollTop() >= 54) {
      $('body nav').addClass('isScrolled');
      
    } else {

      $('body nav').removeClass('isScrolled');

    }
  })
})