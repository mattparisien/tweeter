# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above

## Directory Structure

### **[Public](https://github.com/mattparisien/tweeter/tree/master/public)** 
- Contains files made publicly accessible in the application
- Includes the assets folder, which contains images/videos and other media used in the app
- **[Scripts](https://github.com/mattparisien/tweeter/tree/master/public/scripts)**
    - Contains all JS files used in the project   
- **[Styles](https://github.com/mattparisien/tweeter/tree/master/public/styles)**
    - Contains all CSS files used in the project
- **[Vendor](https://github.com/mattparisien/tweeter/tree/master/public/vendor)**
    - Stores specific third party code.  

### **[Server](https://github.com/mattparisien/tweeter/tree/master/server)**
- Contains all server-side logic in the application.

## File Description 
### **[client.js](https://github.com/mattparisien/tweeter/tree/master/public)**
- Contains all of the client-side logic for the application.
- Contains the following functions: 
    - *loadTweets*: submits a GET request to the /tweets/ route to retrieve an array of posted tweets. This function also resets the form and hides the l        loader, since it is called every time a post request completes.
    - *createTweetElement*: renders HTML markup for a new tweet item. The function dynamically inserts user input into the markup using template literals.        Takes tweet data as a parameter.
    - *renderTweets*: this function accepts an array of tweets as a parameter. It loops through the array and prepends each array item (each posted tweet) to the DOM container which holds them. 
    - *validateForm*: takes in a DOM form field as a parameter. The function checks for input field errors, such as an empty input field, or a field which contains over 140 characters. It returns an object with the key of "error", whose value specifies whether the input field contains an error or not, and "errorMsg", which will define the error in the form of a string.
    - *resetForm*: this function is in charge of resetting the form once the post request has been successfully submitted. It hides added classes which turn various elements to red, clears the text area and resets the counter to 140. It also refocuses the text area so the user can create another tweet easily.
    
