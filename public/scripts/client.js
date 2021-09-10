$(document).ready(function () {

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

  //Submit form data via ajax post request
  $("#compose-form").submit(function (e) {

    e.preventDefault();
    const $formData = $(this).serialize();

    $.post("/tweets/", $formData, function (data, status) {
      console.log(data);
    });
  });

  //Load tweets from server
  const loadTweets = function() {
    $.get('/tweets/', function(data) {
      renderTweets(data);
      $($('#compose-form')[0]).trigger('reset')
    })
  }

  //Initially load tweets
  loadTweets();

  //Reload tweets every time a user submits a tweet
  $('#submit').on('click', function(e) {
    loadTweets();
  })
});
