// A function is like a reusable machine in your code.
// You feed it input, it does some work, and gives you output.


// 1) Declaring the Machine:-
    function greet(name) {
        return (`Hello ${name}. You are looking good today!`);
    };

    // function: keyword
    // greet: name of the machine
    // name: input (parameter)
    // return: gives back the result


// 2) Running the Machine:-
    console.log(greet("Moksh jain"));
    console.log(greet("Aryaman Arora"));

    // That’s it — define it, then use it.


// Anonymous Function
    // A function with no name. Used when the name isn’t needed.You often assign it to a variable
    const sum = function (a,b) {
        return a+b
    }
    console.log(sum(2,3));


// Arrow Function
    // Shorthand for writing functions
    const add = (a,b, c=3/*This is a optional parameter*/) => a+b+c
    console.log(add(2,6));


