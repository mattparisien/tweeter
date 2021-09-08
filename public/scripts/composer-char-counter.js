$(document).ready(() => {
  $("#tweet-text").on("input", function () {
    let maxCharNum = 140;
    let counter = $($(this).next()[0]).children("#counter")[0];
    const charCount = this.value.length;
    maxCharNum = maxCharNum - charCount;

    if (maxCharNum < 0) {
      $(counter).addClass('charLimitExceeded');
    } else {
      $(counter).removeClass('charLimitExceeded');
    }

    $(counter).html(maxCharNum.toString());
  });
});
