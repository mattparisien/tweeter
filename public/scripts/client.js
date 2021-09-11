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

    $.post("/tweets/", $formData, function (data, status) {});
  });

  //Helper function respomsible for validating tweet form field
  /**
   * 
   * @param {*} formField The form's textarea or input field 
   * @returns An object specifying whether the form contains an error, and an error message specifying the error message to be declared
   */
  const validateForm = function (formField) {
    if (!$(formField).val()) {
      return { hasError: true, errorMsg: "Form fields cannot be empty." };
    } else if ($(formField).val().length > 140) {
      return { hasError: true, errorMsg: "Tweet has too many characters." };
    }
    return { hasError: false, errorMsg: null };
  };

  //Helper function respomsible for reset of form elements
  const resetForm = function () {
    const $textArea = $("#compose-form textarea");
    const $counter = $("#compose-form").find("#counter");

    $($textArea).val("");
    $($counter).val("140");
  };

  //Function responsible for loading tweets from server
  const loadTweets = function () {
    $.get("/tweets/", function (data) {
      console.log("in here!");
      renderTweets(data);
      resetForm();
    });
  };

  //Initially load tweets
  loadTweets();

  //Event handler checks for form submissions errors, if none reload tweets
  $("#submit").on("click", function (e) {
    const $textArea = $("#tweet-text");
    const $formError = $("#compose-form .form-error")[0];
    let $validatedForm = validateForm($textArea);

    if ($validatedForm.hasError) {
      e.preventDefault();
      $($formError).text(`${$validatedForm.errorMsg}`).show();
      $($textArea).addClass("invalid-field");

      $("#submit").on("click", function () {
        $validatedForm = validateForm($textArea);
        if (!$validatedForm.hasError) {
          $($formError).hide();
          $($textArea).removeClass("invalid-field");
        }
      });
    } else {
      loadTweets();
    }
  });
});
