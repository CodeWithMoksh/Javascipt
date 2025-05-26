// DataTypes in JS

// JavaScript has two main categories of data types:

// 1. Primitive Types (Immutable, stored by value):-
    // When we say primitive values are immutable, we mean: The actual value itself cannot be changed once it's created.
    // BUT… You can reassign a variable to a new value. What you cannot do is change the existing primitive value itself — because it’s not an object with internal state.
        
    // i) Strings: Text, wrapped in quotes ' or "
        let strn = "Hello World";

    // ii) Numbers: Integer or floating point
        let numb = 123;

    // iii) BigInt: Large integers beyond Number limits
        let big = 6574656456983648569n;

    // iv) Boolean: Logical value
        let boolean = true;

    // v) Undefined: Value which is declared but not assigned.
        let x;

    // vi) Null: Value is given but still its empty
        let y = null;

    // vii) Symbol: Unique identifiers
        Symbol();


// 2. Reference Types (Mutable, stored by reference):-

    // i) Arrays: Ordered list (also an object)
        let arr = [1,2,3,54,5];

    // ii) Object: Collection of key-value pairs
        let obj = {"key": "value"}


// We can check the type of the values using "typeof" function as :
console.log([
    typeof(str),
    typeof(num),
    typeof(big),
    typeof(bool),
    typeof(x),
    typeof(y),
    typeof(obj)
])


// What is the difference between null and undefined?
    // i)We can say that null is a value which is given to the respected variable and it means empty for example=
        // let chaR = null; The value is assigned but it is empty
        // The data type of null is object
    // ii)Undefined is a data type we can say that the value is not assigned to the variable for example
        // let chaR; The value is not assigned


// TypeConversion: JavaScript is dynamically typed, so you can do:
    let a = "5"
    let b = 2;
    console.log(a+b) // Here the output would be 52 which means 2 is converted into string

    let num = Number("123"); // Converts to 123
    let str = String(true);  // Converts to "true"
    let bool = Boolean(0);   // Converts to false
