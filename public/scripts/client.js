$(document).ready(function () {
  const tweetData = {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  };

  /**
   * 
   * @param {*} data An object containing user and content data about a new tweet post
   * @returns HTML markup for displaying a new tweet
   */

  const createTweetElement = function (data) {
    const $tweetTemplate = `
    <article class="tweet-item">
          <header class="user-info">
            <div class="header-left">
              <img src="${data.user.avatars}" style="width: 60px; height: 60px;">
              <h4>${data.user.name}</h4>
            </div>
            <h4 class="handle">${data.user.handle}</h4>
          </header>
          <p class="tweet"> ${data.content.text} </p>
          <footer class="tweet-details">
            <p> <time class="need_to_be_rendered" id="timestamp" datetime="${data.created_at}"></time></p>
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-flag fa-xs"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-retweet fa-xs"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-heart fa-xs"></i>
                </a>
              </li>
            </ul>
          </footer>
    </article>
    `;

    return $tweetTemplate;
  };

  const $tweet = createTweetElement(tweetData);
  $('.display-tweets-container').append($tweet);

});
