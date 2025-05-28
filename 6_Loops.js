// A Loop is a programming construct that repeats a block of code multiple times, either for a specific number of times and until a certain condition is met

// FOR LOOP:-
    // Use when you know in advance how many times you want to loop.

    for(let i = 1; i<=5; i++){
        console.log(i);
    }

    // Sequence of Execution:-
    // 1) Initialization (let i = 1) => Only once.
    // 2) Condition check (i <= 5) => If false, exit loop.
    // 3) Run loop body (console.log(...)) => Do the task.
    // 4) Update (i++) => Change value of i.
    // 5) Repeat from step 2.


// WHILE LOOP:-
    // Use when you want to loop as long as a condition is true (and maybe don’t know how many times).

    let j = 1;
    while (j<=5) {
        console.log("Value of j is: ",j);
        j++;
    }

    // Execution Flow:-
    // 1) Initialization → let i = 1; (only once)
    // 2) Check condition → Is i <= 5? If true then continue and if false then exit the loop.
    // 3) Run loop body → console.log(...)
    // 4) Increment or update → i++
    // 5) Back to Step 2


// DO...WHILE LOOP:-
    // Like while, but runs the block at least once, even if the condition is false initially.
    
    let b = 10;
    do {
        console.log("The value of b is: ",b);
        b++
    } while (b<=10);

    // Execution Flow Step-by-Step
    // 1)Run the code inside do {} once
    // 2)Check the while condition
    // 3)If condition is true, repeat from step 1
    // 4)If condition is false, exit the loop

    // Real-World Example: User Input
    // let password;
    // do {
    //     password = prompt("Enter the Password: ");
    // } while (password !== "secret1234");
    // console.log("Access Granted");


// FOR..OF LOOPS:-
    // Great for looping through arrays or iterable objects.
    
    // Use case in Arrays
    const fruits = ["Apple", "Mango", "Banana", "Kiwi", "Orange"];
    for(const fruit of fruits){ // You can use let instead of const if you plan to reassign inside the loop.
        console.log(`Fruits are: ${fruit}`); // This is a method of using a variable value inside a string cotted with (``)
    }

    // Use case in Strings
    const word = "Hello";
    for(const char of word){
        console.log(char);
    }
    
    // Execution Flow:-
    // 1) It takes the value of the iterable present on index 0.
    // 2) Gives the taken value t the element created. For ex:- fruit and char.
    // 3) Run the code inside {}.
    // 4) Repeates from step 1 until all the last index.
    
    
// FOR..IN LOOPS:-
    // Used for looping over object properties (keys).
    
    const user = {
        name: "Alice",
        age: 30,
        city: "Paris"
    };
    
    for (const key in user) {
        console.log(`${key}: ${user[key]}`)
    }
    
    // Execution Flow:-
    // 1) for => Starts the loop
    // 1) const key => Holds the current property name (string)
    // 1) in object => Iterates over all enumerable keys in the object
    // 1) { ... } => Loop body — executes once per key   


// USE OF BREAK:-
// Use break to exit a loop early:
for (let io = 1; io < 10; io++) {
    if (io == 5) {
        break;
    }else{
        console.log(io);
    };
};


// USE OF CONTINUE:-
// Use continue to skip current iteration:
for (let io = 1; io < 10; io++) {
    if (io == 5) {
        continue;
    }else{
        console.log("The number are: ",io);
    };
};


