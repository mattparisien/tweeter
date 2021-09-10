$(document).ready(function () {
  const form = $('#new-tweet form')[0];
  $(form).submit(function(e) {
    e.preventDefault();
    const tweet = $('#tweet-text').val();

    $.post({
      url: '/tweets/',
      data: tweet,
      success: 'success',
      dataType: 'JSON'
    }).done(function(data) {
      console.log(data)
    }) 

  })

  

})  