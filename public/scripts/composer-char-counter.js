$(document).ready(() => {
  $("#tweet-text").on("input", function (e) {
    let dynamicCount = 140;
    let counter = $(this).parent().find("#counter")[0];
    console.log(counter)
    
    const charsTyped = this.value.length;

    dynamicCount = dynamicCount - charsTyped;
    if (dynamicCount < 0) {
      $(counter).addClass("charLimitExceeded");
    } else {
      $(counter).removeClass("charLimitExceeded");
    }

    $(counter).html(dynamicCount.toString());
  });
  
});
