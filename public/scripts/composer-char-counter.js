$(document).ready(() => {
  $("#tweet-text").on("keydown", function (e) {
    const counter = $($(this).next()[0]).children("#counter")[0];
    let number = Number(counter.innerHTML);

    if (number <= 0) {
      $(counter).addClass('charLimitExceeded');
    } else {
      $(counter).removeClass('charLimitExceeded');
    }
    
    if (e.key === 'Backspace') {
      number += 1
      counter.innerHTML = number;
      return;
    } 

  
    number -= 1;
    counter.innerHTML = number;
    console.log(number);
  });
});