$(document).ready(function() {

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

  const createTweetElement = function(data) {

    const $tweet = $(`<article class="tweet-item">${data}</article>`);
    return $tweet
  }

  const $tweet = createTweetElement(tweetData)



})