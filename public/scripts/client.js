$(document).ready(function () {
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

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
              <img src="${
                data.user.avatars
              }" style="width: 60px; height: 60px;">
              <h4>${data.user.name}</h4>
            </div>
            <h4 class="handle">${data.user.handle}</h4>
          </header>
          <p class="tweet"> ${data.content.text} </p>
          <footer class="tweet-details">
            <p> ${timeago.format(data.created_at)}</p>
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

  /**
   *
   * @param {*} tweets An array of objects containing tweet data.
   */
  const renderTweets = function (tweets) {
    tweets.forEach((tweet) => {
      const newTweet = createTweetElement(tweet);
      $(".display-tweets-container").append(newTweet);
    });
  };

  $("#compose-form").submit(function (e) {

    e.preventDefault();
    const $formData = $(this).serialize();

    $.post("/tweets/", $formData, function (data, status) {
      console.log(status);
    });
  });

  renderTweets(data);
});
