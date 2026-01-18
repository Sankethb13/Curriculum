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

## TypeConversions:
    - String conversion: Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.
    - Numeric conversion: Occurs in math operations. Can be performed with Number(value).
      The conversion follows the rules:
      Value	Becomes…
      undefined	NaN
      null	0
      true / false	1 / 0
      string	The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.
    - Boolean conversion: Occurs in logical operations. Can be performed with Boolean(value).
      Follows the rules:
      Value	Becomes…
      0, null, undefined, NaN, ""	false
      any other value	true
## Operators:
   - Unary, binary, operands:
      * An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.
      * An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
         let x = 1;
         x = -x;
         alert(x); // x = -1 
      x is unary operator
      * An operator is binary if it has two operands. The same minus exists in binary form as well:
         let x = 1, y = 3;
         alert( y - x ); // 2, binary minus subtracts values
   - General Mathematics operators.
   -  Numeric Conversion: '+' The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
   - Assignment Operator: Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.
   - Increment/Decrement operator: ++x, x++ 
     * The operators ++ and -- can be placed either before or after a variable.
     * When the operator goes after the variable, it is in “postfix form”: counter++.
     * The “prefix form” is when the operator goes before the variable: ++counter.
         ex: let counter = 1; let a = ++counter; // (*) alert(a); // 2 
             let counter = 1; let a = counter++; // (*) changed ++counter to counter++; alert(a); // 1
   - Bitwise operator: 
     AND ( & )
     OR ( | )
     XOR ( ^ )
     NOT ( ~ )
     LEFT SHIFT ( << )
     RIGHT SHIFT ( >> )
     ZERO-FILL RIGHT SHIFT ( >>> ) 
   - Comma operator: The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on. The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
## Comparisions: 
   - Comparison operators return a boolean value.
   - Strings are compared letter-by-letter in the “dictionary” order.
   - When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
   - The values null and undefined are equal == to themselves and each other, but do not equal any other value.
   - Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
## Conditional branching: 
   if, else, elseif, ? :
## Logical operators:
   &&, ||, !, ??(nullish Coalescing)
   The precedence of AND && operator is higher than OR ||.
## Null Coalescing: ??
   - The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.
      It’s used to assign default values to variables:
   - The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.
   - It’s forbidden to use it with || or && without explicit parentheses.


        
