## Fundamentals:
- We can use a <script> tag to add JavaScript code to a page.
- The type and language attributes are not required.
- A script in an external file can be inserted with <script src="path/to/script.js"></script>.

### Variables:
   let, var, const
   - let and var are similar to each other.
   - variable name should not start with numbers.
   - For unchanging variables use const

### Data Types:
 We can put any type in the variable var message = "hello", var message = 123. Programming languages that allows different types in a variable are called as "Dynamically typed".
 - Number: 
    * This type represents both integer and floating value 
    * Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
 - BigInt:
    * In JS number type cannot safely represent integer values larger than (2^53 - 1) and - (2^53 - 1)
 - String: 
    * In JavaScript, there are 3 types of quotes.
        Double quotes: "Hello".
        Single quotes: 'Hello'.
        Backticks: `Hello`.
    * Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
    Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
 - Boolean:
    * true/ false
 - NULL value:
    * The special null value does not belong to any of the types described above.
    * In JS, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
 - Undefined value: 
    * The meaning of undefined is “value is not assigned”.
    * let age; alert(age); // shows "undefined"
 - Object and Symbols:
    * objects are used to store collections of data and more complex entities.
    * All other data types can store only one data.
    * The symbol type is used to create unique identifiers for objects.
 - Typeof operator:
    * The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

 ## Interaction: alert, prompt, confirm:
    - Alert: This one we’ve seen already. It shows a message and waits for the user to press “OK”. alert("Hello");
    - Prompt: It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
    result = prompt(title, [default]);
    - Confirm : shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
 All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.
 There are two limitations shared by all the methods above:
 The exact location of the modal window is determined by the browser. Usually, it’s in the center.
 The exact look of the window also depends on the browser. We can’t modify it.
 That is the price for simplicity. There are other ways to show nicer windows and richer interaction with the visitor, but if “bells and whistles” do not matter much, these methods work just fine.






        
