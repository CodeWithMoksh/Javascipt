// What is a Variable?
// A variable is a container for storing data. You can think of it like a labeled jar where you store different kinds of values — numbers, text, etc.


// Why Use Variables?
// To store information to be reused later
// To make your code dynamic
// To improve readability and maintainability


// Declaring Variables:
    // var – old-school, avoid unless needed for legacy reasons. Visible throughout the entire function where it's defined. It can be re-declared and re-assigned
        var i = 1;
    // let – block-scoped, preferred for values that will change. Only accessible within the {} block where they are declared. It cannot be re-declared but re-assinged
        let i = 2;
    // const – block-scoped, for constants (values that don’t change). Only accessible within the {} block where they are declared. It cannot be re-assigned or re-declared
        const i = 5;
    

// Rules to declare a variable:
    // i)The variable name can start with a underscore dollar sign or a alpabet but not with a number or a special character
    // ii)We cannot use a reserved js keyword as a variable name
    // iii)Variable names are case sensitive we have to write the same word next ahead
    // iv)The limit of the varible can be infinite 
    // v)We cannot provide any space inbetween the variable

    
// Real world Examples:
    // 1)Const:
        // Config values:- You should not reassign the config object — you only modify its internal properties if needed.
        // DOM references:- A Element in the DOM will never point on some other element it is just fixed.
        // API base URLs:- Using API URL's should be fixed
        // Immutable Functions (when using function expressions):- Functions that are too basic not need to be changed. Ex: Adding two numbers

    // 2)Let:
        // Loop counters:- Creates a new scoped variable per loop iteration
        // Variables that are reassigned:- Allows updates to the value

    // 3)Var:
        // Rare compatibility hacks (like ES5-only environments)


    // What is “block-scoped”?
        // Block-scoped means the variable exists only inside the {} where it's declared.


// Problem with Var: It is function-scoped, so all closures in a function(like setTimeout) share the same i(variable). While on the other hand let is block-scoped and creates a new j(variable) for each iteration.
