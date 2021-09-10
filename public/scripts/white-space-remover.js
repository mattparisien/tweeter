const removeWhiteSpace = function(string) {
  string = string.split("");
  const filtered = string.filter((char) => {
    return char !== " "
  })
  return filtered.join("");
}

console.log(removeWhiteSpace('wow i really hate this       shit'));