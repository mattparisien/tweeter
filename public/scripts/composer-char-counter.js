$(document).ready(() => {
  $('#tweet-text').on('keyup', function(e) {

    let maxCharNum = 140;
    let counter = $($(this).next()[0]).children('#counter')[0];
    const charCount = this.value.length;

    maxCharNum = maxCharNum - charCount;
    $(counter).html(maxCharNum.toString());

  })
})