## Types
### Methods of Primitive:
- Objects are heavier than primitive, they need additional machinery to manage them
- Primitives except null and undefined provide many helpful methods.
### Numbers:
- Js ignores '_' between numbers, they are added to make the number more readable.
- In JS zeroes can be shortened by e, 1e9 is 1 billion
- hexadecimal numbers are used to represent colors and encode characters.
- let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
- alert( 0xff ); // 255
- alert( 0xFF ); // 255 (the same, case doesn't matter)
### toString():
    - This method represents a number into a num in respective numerical system in the math.
     example:
     let num = 255;
     alert(num.toString(2)) = 11111111 in binary.
     here toString(base).
    - After a number we need to put 2 dots to call a method 
     123..toString(2) -> because only one dot JS assumes it as a decimal.
### Rounding:
    - math.ceil
    - math. trunc
    - math.floor
    - math.round
    - to round it to 2 decimal - we have two ways to do it,
    1. multiple and divide by 100 : math.round(num*100/100);
    2. num.toFixed(1);
### Imprecise calculations:
    - Numbers are stored in 64 bit format, so there are 64 bits allocated to numbers.
      52 are allocated to numbers.
      11 are allocated to store the decimal point.
      1 bit is for sign.
    - alert(0.1 + 0.2 == 0.3) is false == JavaScript uses binary floating-point arithmetic, so decimal precision errors occur. Never compare floats directly using ==.
    - alert (9999999999999999) is 100000000000000000 because This number is greater than MAX_SAFE_INTEGER, so JS rounds it to the nearest representable value.
### isFinite and NaN:
    - Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
    - NaN represents an error.
    - alert (NaN === NaN) // false
    - isNaN(value) converts its argument to a number and then tests it for being NaN:
    - isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/.    -Infinity
    - use Number.isFinite and Number.isNan
        alert( Number.isNaN(NaN) ); // true
        alert( Number.isNaN("str" / 2) ); // true
        // Note the difference:
        alert( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
        alert( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion

        alert( Number.isFinite(123) ); // true
        alert( Number.isFinite(Infinity) ); // false
        alert( Number.isFinite(2 / 0) ); // false

        // Note the difference:
        alert( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
        alert( isFinite("123") ); // true, because isFinite converts string "123" into a number 123
    - Number.isNaN and Number.isFinite methods are the more “strict” versions of isNaN and isFinite functions. They do not autoconvert their argument into a number, but check if it belongs to the number type instead.
    - There is a special built-in method Object.is that compares values like ===, but is more reliable for two edge cases:

    ** It works with NaN: Object.is(NaN, NaN) === true, that’s a good thing.
    Values 0 and -0 are different: Object.is(0, -0) === false, technically that’s correct because internally the number has a sign bit that may be different even if all other bits are zeroes.
### parseInt and parseFloat:
    - They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. The function parseInt returns an integer and parseFloat will return a floating-point number.
    -   alert( parseInt('100px') ); // 100
        alert( parseFloat('12.5em') ); // 12.5
        alert( parseInt('12.3') ); // 12, only the integer part is returned
        alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
    - parseInt has 2 arguments - first is input and other is base in math
    parseInt('ff', 16) // 255
    - alert( parseInt('a123') ); // NaN
### Other math functions:
   Math.pow(2,10) //2 power of 10
   Math.max and Math.Min
   Math.random

## Strings:
    - In JS all the texts are stored as strings, there no seperate type called char
    -   let single = 'single-quoted';
        let double = "double-quoted";
        let backticks = `backticks`;
    - advantage of using backticks is that they allow a string to span multiple lines
    - let str = `Hello`;
        // the first character
        alert( str[0] ); // H
        alert( str.at(0) ); // H

        // the last character
        alert( str[str.length - 1] ); // o
        alert( str.at(-1) );
    - We can also iterate a string using for
    for(let char of "Hello"){
        alert(char)
    }
### Strings are immutable:
    - Strings cannot be changed,
    - let str = 'Hi';
    str[0] = 'h'; // error
    alert( str[0] ); // doesn't work
### Methods:
    - Methods toLowerCase() and toUpperCase() change the case
    - Searching of a subString ():
    - str.includes(),startswith(), endwith(). returns true false
    - Getting a substring - slice ()
        ex: 
        let str = "stringify";
        alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
        alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0
        if there is no second argument
        let str = "stringify";
        alert( str.slice(2) ); // 'ringify', from the 2nd position till the end
    - Negative values for start/end are also possible. They mean the position is counted from the string end,
        let str = "stringify";
        // start at the 4th position from the right, end at the 1st from the right
        alert( str.slice(-4, -1) ); // 'gif'
    - str.substring(start [, end])
        Returns the part of the string between start and end (not including end).
        This is almost the same as slice, but it allows start to be greater than end (in this case it simply swaps start and end values).
        For instance:
        let str = "stringify";
        // these are same for substring
        alert( str.substring(2, 6) ); // "ring"
        alert( str.substring(6, 2) ); // "ring"
        // ...but not for slice:
        alert( str.slice(2, 6) ); // "ring" (the same)
        alert( str.slice(6, 2) ); // "" (an empty string)
    - substr():
    let str = "stringify";
    alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters
    