// Conditional statements let your code make decisions based on certain conditions. 
// You use them to execute different blocks of code depending on whether something is true or false.

// Types of Conditional Statements in JavaScript:

// 1) if statement:-
    // Runs a block only if the condition is true.
    let age = 18;
    if (age>=18) {
        console.log("Congrats you are eligible to Drive!!!")
    }
    
// 2) if....else statement:-
    // If the condition is true, do one thing; else do another.
    if (age>=18) {
        console.log("Congrats you are eligible to Drive!!!");
    } else {
        console.log("So sorry you are not eligible to Drive");
    }

// 3) if...else if...else ladder:-
    // Use this when you have multiple conditions to check:
    if (age >= 30/*Always start with a greater number hence all the values will be going to print ahead if first value is true*/){
        console.log("Congrats you are not a kid")
    }else if (age >= 27){
        console.log("Tum bache nahi ho par bade bhi nahi ho")
    }else if (age >= 20){
        console.log("Congrates you are in twenty's line")
    }else if (age >= 13){
        console.log("Teenager")
    }else{
        console.log("Not Born")
    }

// 4) Ternary Operator:-
    // It works like this- condition ? doThisIfTrue : doThisIfFalse;

    let hungry = true; // Condition
    let message = hungry ? "Let's eat something" : "Don't want anything to eat";
    console.log(message);


// Key Concepts:-
// i) JavaScript treats values like 0, "", null, undefined, and NaN as falsy.
        if (0) { //This will not be going to print beacuse 0 is false
            console.log("Hey There!!!")
        }

        if ("") {
            console.log("This is not going to be printed")
        }

// ii) All other values are truthy.
        if ("Hello") {
            console.log("This runs because 'hello' is truthy.")
        }