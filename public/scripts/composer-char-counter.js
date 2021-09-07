const returnValidCharacters = function () {};

const incrementCharCount = function (e) {
  let characterCount = document.querySelector(".counter");
  let counter = Number(characterCount.innerHTML);
  
  if (e.key === 'Backspace' && counter === 0) {
    characterCount.innerHTML = 0;
    return characterCount;
  } else if (e.key === 'Backspace') {
    counter -= 1;
    characterCount.innerHTML = counter.toString();
    return characterCount;
  }

  counter++;
  characterCount.innerHTML = counter.toString();
  return characterCount;
};
