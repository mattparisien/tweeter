//Helper functions

/**
 *
 * @param {*} str String to be escaped
 * @returns plain HTML text
 */

export function escape(str) {
  const newElement = document.createElement("p");
  newElement.appendChild(document.createTextNode(str));
  return newElement.innerHTML;
}

/**
 *
 * @param {*} formField the user's input field
 * @returns an object containing a key with a value specifying if an error has occured or not, and a key of errorMsg, which as a value specifies the error through the form of a string
 */
export function validateForm(formField) {
  if (!$(formField).val()) {
    return { hasError: true, errorMsg: "Form fields cannot be empty." };
  } else if ($(formField).val().length > 140) {
    return { hasError: true, errorMsg: "Tweet has too many characters." };
  }
  return { hasError: false, errorMsg: null };
}

//Responsible for the resetting of form elements once post request has been successfully submitted from form
export function resetForm() {
  const $textArea = $("#compose-form textarea");
  const $counter = $("#compose-form").find("#counter");

  $($($textArea).val("")).focus();
  $($counter).val("140");
  $("#tweet-text").removeClass("invalid-field");
  $(".form-error").hide();
}

// Scrolls to tweet form while taking nav offset into consideration
/**
 *
 * @param {*} button Button linking to form
 */
export function scrollToForm(e) {
  e.preventDefault();
  $("#new-tweet").slideDown();
  setTimeout(() => {
    $("html, #root").animate(
      {
        scrollTop: $("#compose-form").offset().top - 300, //Offset top by 300px to prevent nav covering form
      },
      1500
    );
    $("#compose-form textarea").focus();
  }, 200);
}
