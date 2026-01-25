## Objects
- Objects are used to store keyed collections of various data and more complex entities.
- An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

### Object Creation:
- It can be created with one of two syntax,
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax
- Usually when the figure brackets are used then that declaration is called object literal.
- We can add or delete and move properties in the object.
- The property can string and the value can be of any type.
- The last property in the list may end with a comma: That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.
- // this would give a syntax error
user.likes birds = true
### Squared brackets:
- We can access the properties in an object by using square brackets,
let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;
- Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.
- `` let user = {
name: "John",
age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name") ``
### Computed properties:
- We can use square brackets in an object literal, when creating an object. That’s called computed properties.
``
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
[fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
``
### Property value short hand:
- function makeuser(name, age) {
return (
name: name,
age: age,
)
}
let user = makeuser ("john", 30);

The above code is similar to below,
- func makeuser(name, age){
return(
name, // same as name: name
age,
)
}
- The above notation is called property value shortHand.
### Property name Limitation:
- There is not limitation for the property names as the variable names. We can use property names like for, let and return.
- Only restriction is we cannot add property name as _proto_, if we try to access obj._proto_ then we get result as object, object. We do not get exact value.
### Property existence test and in operator:
- We can access any property in an object, even property is non existant. This is a special feature in JS. We get error as undefined.
- In property: We can check whether the property is existed in the object. This is a special key word and used rarely.
- We can check whether the property is undefined or not. But in a rare case this fails
``
let obj = {
key = undefined,
}
``
- Here if we check key == undefined then value would be true. But to check the existence of the object we can check if(key in obj)
- Also used to access the properties,
``
let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
``
### for in loop:
- It executes the loop body for all the properties in the object.
``
for( key in obj)
``
- let user = {
name: "John",
age: 30,
isAdmin: true
};

for (let key in user) {
// keys
alert( key ); // name, age, isAdmin
// values for the keys
alert( user[key] ); // John, 30, true
}
- ordered like an object:
When we loop the properties in for loop, non integers are listed in the created order. But integer property names are listed in sorted order.

### Object references and copying:
- Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.
- All operations via copied references (like adding/removing properties) are performed on the same single object.
- To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) or a “deep cloning” function structuredClone or use a custom cloning implementation, such as _.cloneDeep(obj).
- structuredClone(): makes deep copy of the oject, it creates different refence for both the oject.
- object.assign(): Object.assign(dest, ...sources) - it does a shallow copy the reference of all the oject is same.
-
``
let user = {
name: "John",
age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object
``
### Garbage collection:
- Memory managment in JS is invisible for us, all primitives, objects and functions take memory.
- Main concept in JS is reachablility .
- “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.
- The currently executing function, its local variables and parameters.
- Other functions on the current chain of nested calls, their local variables and parameters.
- Global variables.(there are some other, internal ones as well)
- Any other value is considered reachable if it’s reachable from a root by a reference or by a chain of references.
- For instance, if there’s an object in a global variable, and that object has a property referencing another object, that object is considered reachable. And those that it references are also reachable. Detailed examples to follow.
- The basic garbage collection algorithm is called “mark-and-sweep”.
- The following “garbage collection” steps are regularly performed:
- The garbage collector takes roots and “marks” (remembers) them.
- Then it visits and “marks” all references from them.
- Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
- …And so on until every reachable (from the roots) references are visited.
- All objects except marked ones are removed.
- Optimizations:
Generational collection – objects are split into two sets: “new ones” and “old ones”. In typical code, many objects have a short life span: they appear, do their job and die fast, so it makes sense to track new objects and clear the memory from them if that’s the case. Those that survive for long enough, become “old” and are examined less often.
Incremental collection – if there are many objects, and we try to walk and mark the whole object set at once, it may take some time and introduce visible delays in the execution. So the engine splits the whole set of existing objects into multiple parts. And then clear these parts one after another. There are many small garbage collections instead of a total one. That requires some extra bookkeeping between them to track changes, but we get many tiny delays instead of a big one.
Idle-time collection – the garbage collector tries to run only while the CPU is idle, to reduce the possible effect on the execution.
### Object methods, this :
- The functions which are the properties of an object is called as method.
- method examples:
let user ={
name = "sanketh",
age = "20",
}
user.sayHi = function (){
alert("SayHi");
}
user.sayHi();
- Method shortHand:
``
user = {
sayHi: function() {
alert("Hello");
}
};

// method shorthand looks better, right?
user = {
sayHi() { // same as "sayHi: function(){...}"
alert("Hello");
}
};
``
- this Key word: To access the object, a method can use the this keyword.
example:
let user = {
name: "John",
age: 30,

sayHi() {
// "this" is the "current object"
alert(this.name);
}

};

user.sayHi(); // John
- this is not bound: this keyword can be used in any function, even if its not a method of an object.
- Then here the value of this will determined during the runtime based on the contxt.
- example: let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John (this == user)
admin.f(); // Admin (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
- if there is no object while calling the method then this == undefined in the strict mode and in non strict mode the this value is window, that is the global object.
- In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.
### Constructor??
### Optional Chaining:
- The optional chaining ?. syntax has three forms:
- obj?.prop – returns obj.prop if obj exists, otherwise undefined.
- obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
- obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
- As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.
- A chain of ?. allows to safely access nested properties.
- Still, we should apply ?. carefully, only where it’s acceptable, according to our code logic, that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur.
### object to primitive coversion :
- The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.
- There are 3 types of it:
string
number
default
- obj.tostring();