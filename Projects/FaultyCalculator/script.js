/* 
Rules:
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **  

It performs wrong operation 10% of the times
*/

// Variables
let randomnum = 0.01;//Math.random();
console.log(randomnum);
let num1 = Number(prompt("Enter the First number: "));
let operation = prompt("Enter operation you want to perform: ");
let num2 = Number(prompt("Enter the Second number: "));


// Expressions
let add = (a,b) => a+b
let sub = (a,b) => a-b
let mul = (a,b) => a*b
let div = (a,b) => a/b
let expo = (a,b) => a**b


// Performing the Task

if (randomnum <= 0.1) {

    // If operation is to add
    if (operation == "+") {
        console.log(sub(num1, num2))
    }
        
    // If operation is to subtract
    if (operation == "-") {
        console.log(div(num1, num2))
    }
    
    // If operation is to divide
    if (operation == "/") {
        console.log(expo(num1, num2))
    }
    
    // If operation is to multiply
    if (operation == "*") {
        console.log(add(num1, num2))
    }
    
} else {
    
    // If operation is to add
    if (operation == "+") {
        console.log(add(num1, num2))
    }
        
    // If operation is to subtract
    if (operation == "-") {
        console.log(sub(num1, num2))
    }
    
    // If operation is to divide
    if (operation == "/") {
        console.log(div(num1, num2))
    }
    
    // If operation is to multiply
    if (operation == "*") {
        console.log(mul(num1, num2))
    }

}