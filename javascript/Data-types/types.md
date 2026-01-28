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
=======================
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
=========================
### Arrays:
    - Objects allows us to store keyed collection of values, but often we need ordered collection. For this there exists a special data structure called Arrays.
    - Declaration :
     let arr = new array () ;
     or 
     let arr = [];
     we can give intial elements in the array.
     - Arrays are ordered and It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.
     - Array can store any type of element.
     - In Array we add a trailing comma like objects.

    ** Get the last element with at.
    We cant array[-1] as the last element in JS. But we can get it using arr[arr.length - 1] => last element.
    Also we have a function to get the last element is 'at' arr.at(-1).

### Methods like push, pop, shift, unshift:
    - A queue is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:
        - push appends an element to the end.
        - shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
    - Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements, both to/from the beginning or the end.
    - Both fruits.pop() and fruits.at(-1) return the last element of the array, but fruits.pop() also modifies the array by removing it.
    - pop() - removes the last element of an array.
    - push() - appends the last element of an array.
    - shift() - removes the first element of an array.
    - unshift() - adds the first element of an array.
### Internals:
    - They are similar to object in JS, but they extend special function to manage and access data.
    - They are stored in the order even when you are referencing
    - The ways to misuse an array:
        Add a non-numeric property like arr.test = 5.
        Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
        Fill the array in the reverse order, like arr[1000], arr[999] and so on.
### Performance:
    - Methods push/pop are fast and shift/unshift are slow.
    - shift operation does three things,
        Remove the element with the index 0.
        Move all elements to left and renumber them.
        update the length property
    - Hence it takes time to update and read the elements at the start rather than accessing elements at the end of an
    array.
    - The pop method does not need to move anything, because other elements keep their indexes. That’s why it’s fast. Also push method
### Loops:
    - Similar to objects, arrays can be iterated through out, 
        let arr = ["Apple", "Orange", "Pear"];
        for (let key in arr) {
        alert( arr[key] ); // Apple, Orange, Pear
        }
    - for 
    - for of() - iterates though out the loop to get the values of an array and not particular number of it.
    - for in() -
### Length:
    - length property automatically updates when we modify an array.
    - It doesnt iterate everything but gets the highest index and adds +1.
    - If the length of an array is truncated and resized back we cannot access elements again. those will be undefined.
    - simplest way to clear the array is array.length = 0.
### new Array ():
    - we can create array like this -> let arr = new Array("Apple", "Pear", "etc");
    - Its rarely used because [] is shorter way and easier.
    - If new Array is called with single argument and its a number then it creates an array with the mentioned length.
    - The value of the index is undefined but it creates an array with specfic length.
        let arr = new Array(2); // will it create an array of [2] ?
        alert( arr[0] ); // undefined! no elements.
        alert( arr.length ); // length 2
### Multi-dimensional Arrays:
    - Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:
    - let matrix = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                    ];
        alert( matrix[0][1] ); // 2, the second value of the first inner array
### toString:
    - Arrays have their own implementation of toString method that returns a comma-separated list of elements.
    - let arr = [1, 2, 3];
      alert( arr ); // 1,2,3  
      alert( String(arr) === '1,2,3' ); // true
### Dont compare arrays with ==:
    - These arrays are technically different objects. So they aren’t equal. The == operator doesn’t do item-by-item comparison.
    - alert( [] == [] ); // false
      alert( [0] == [0] ); // false
    - alert( 0 == [] ); // true
      alert('0' == [] ); // false
    - To compare array - don’t use the == operator. Instead, compare them item-by-item in a loop or using iteration methods explained in the next chapter.
========================
## Array methods:
    - arr.splice: this can add remove replace elements any where in the array,
        arr.splice(start,[deletecount, elem1, ...., elemn])
    - arr.slice: it is much simpler than splice.
        arr.slice([start], [end]);
    - We can also call it without arguments: arr.slice() creates a copy of arr. That’s used to obtain a copy for further changes that should not affect the original array.
    - let arr = ["t", "e", "s", "t"];
       alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
       alert( arr.slice(-2) ); // s,t (copy from -2 till the end)
    - concat: arr.concat(arg1, arg2...) arguments can be numbers, array or values.
        example:
        let arr = [1, 2];
        // create an array from: arr and [3,4]
        alert( arr.concat([3, 4]) ); // 1,2,3,4
        // create an array from: arr and [3,4] and [5,6]
        alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
        // create an array from: arr and [3,4], then add values 5 and 6
        alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
    - array.foreach: it allows to run every element of an array.
    // for each element call alert
        ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
    // ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
        alert(`${item} is at index ${index} in ${array}`);
        });
### searching in an array:
    - indexOf(), lastIndexOf() and includes().
    - indexOf(): arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
    - includes(): similar to index of but returns true/false.
    - lastIndexOf(): similar to indexOf(). But iterates for last to first.
        let arr = [1, 0, false];
        alert( arr.indexOf(0) ); // 1
        alert( arr.indexOf(false) ); // 2
        alert( arr.indexOf(null) ); // -1
        alert( arr.includes(1) ); // true
    - indexOf uses the strict equality === for comparison. So, if we look for false, it finds exactly false and not the zero.
    - find():let result = arr.find(function(item, index, array) {
        // if true is returned, item is returned and iteration is stopped
        // for falsy scenario returns undefined
        });
        item -> element
        index -> position
        array -> array itself
    example: let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
        ];
        let user = users.find(item => item.id == 1);
        alert(user.name); // John
    - findIndex(): method has the same syntax but returns the index where the element was found instead of the element itself. 
    - findLastIndex(): method is like findIndex, but searches from right to left.
    - filter(): let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
        ];
        // returns array of the first two users
        let someUsers = users.filter(item => item.id < 3);
        alert(someUsers.length); // 2
### Transform an Array:  
    - map(): It calls the function for each element of the array and returns the array of results.
        let result = arr.map(function(item, index, array) {
        // returns the new value instead of item
        });
    - let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
       alert(lengths); // 5,7,6
    - sort():
    - reverse():
    - split() : split(with a delimiter).
    - it has optional second param - let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
    - let str = "test"; alert( str.split('') ); // t,e,s,t
    - join () : let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
                let str = arr.join(';'); // glue the array into a string using ;
                alert( str ); // Bilbo;Gandalf;Nazgul
    - When we need to iterate over an array – we can use forEach, for or for..of.
    - When we need to iterate and return the data for each element – we can use map.  
    - reduce, reduceright().
    - Please note that methods sort, reverse and splice modify the array itself.