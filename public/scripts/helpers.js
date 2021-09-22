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

//Helper function respomsible for reset of form elements
export function resetForm() {
  const $textArea = $("#compose-form textarea");
  const $counter = $("#compose-form").find("#counter");

  $($($textArea).val("")).focus();
  $($counter).val("140");
  $("#tweet-text").removeClass("invalid-field");
  $(".form-error").hide();
}
