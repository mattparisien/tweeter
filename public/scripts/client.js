import { escape, validateForm, resetForm } from "./helpers.js";

$(() => {
  $("#root, footer").fadeIn(200);

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
              <h4> ${data.user.name} </h4>
            </div>
            <h4 class="handle">${data.user.handle}</h4>
          </header>
          <p class="tweet"> ${escape(data.content.text)} </p>
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
      $(".display-tweets-container").prepend(newTweet);
    });
  };

  //Submit form data via ajax post request --> get tweets once info has been successfully posted
  $("#compose-form").submit(function (e) {
    e.preventDefault();

    const $textArea = $("#tweet-text");
    const $formError = $("#compose-form .form-error")[0];
    let $validatedForm = validateForm($textArea);

    if ($validatedForm.hasError) {
      e.preventDefault();
      $($formError).text(`${$validatedForm.errorMsg}`).slideDown();
      $($textArea).addClass("invalid-field");
    } else {
      const $loader = $("#loader");
      const $formData = $(this).serialize();
      const $button = $(this).find("button")[0];

      $loader.show();

      if ($("#loader").is(":visible")) {
        $($button).hide();
      }

      $.post("/tweets/", $formData, function () {
        loadTweets();
      });
    }
  });

  //Function responsible for loading tweets from server
  const loadTweets = function () {
    $.get("/tweets/", function (data) {
      renderTweets(data);
      resetForm();
      $("#loader").hide();
      $("#submit").show();
    });
  };

  //Initially load tweets
  loadTweets();
});
