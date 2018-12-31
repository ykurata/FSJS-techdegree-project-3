# Interactive Form

## In this project, you'll use JavaScript to enhance an interactive registration form for a fictional conference called "FullStack Conf."

## Using the supplied HTML and CSS files, you'll add your own JavaScript to make the form more    user-friendly by:

* adding customized and conditional behavior and interactivity
* validating user input and providing helpful error messages when the user enters invalid information into the form fields.

## Instead of plain "vanilla" JavaScript, you'll use the popular jQuery library to complete this project. While it's important for a developer to have a solid understanding and familiarity of plain vanilla JavaScript, it's also important to be able to understand and work with jQuery since it is so common and prevalent on the web.


## Requirements

* Add the necessary files

* jQuery
  * Add jQuery to your project by either including the jQuery source files in your directory or by using a CDN link.
  * Utilize jQuery while coding the functionality for your form.

* Set focus on the first text field

* ”Job Role” section
  * Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
  * Give the field an id of “other-title,” and add the placeholder text of "Your Job Role".

* ”T-Shirt Info” section
  * For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
  * If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
  * If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
  * When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.

* ”Register for Activities” section
  * Some events are at the same day and time as others. If the user selects a workshop, don't allow selection of a workshop at the same day and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
  * When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
  * As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.

* "Payment Info" section
  * Display payment sections based on the payment option chosen in the select menu.
  * The "Credit Card" payment option should be selected by default. Display the #credit-card div, and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match the payment option displayed on the page.
  * When a user selects the "PayPal" payment option, the PayPal information should display, and the credit card and “Bitcoin” information should be hidden.
  * When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.

* Form validation
  * Name field can't be blank.
  * Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
  * User must select at least one checkbox under the "Register for Activities" section of the form.
  * If the selected payment option is "Credit Card," make sure the user has supplied a Credit Card number, a Zip Code, and a 3 number CVV value before the form can be submitted.
    * Credit Card field should only accept a number between 13 and 16 digits.
    * The Zip Code field should accept a 5-digit number.
    * The CVV should only accept a number that is exactly 3 digits long.

  * Form validation messages

  * Form works without JavaScript - Progressive Enhancement

  * CSS styles

  * Add good code comments

  * Cross-Browser consistency
  
