$(document).ready(() => {

  $(window).on('scroll', function(e) {
    if ($($(this)[0]).scrollTop() >= 54) {
      $('body nav').addClass('isScrolled');
      console.log('toggled!')
    } else {
      $('body nav').removeClass('isScrolled');
    }
  })

})