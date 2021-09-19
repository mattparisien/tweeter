$(() => {
  $('.tweet-item:nth-of-type(1) footer p').text(timeago.format(new Date()))
})
