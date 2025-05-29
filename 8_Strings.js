// A string is a sequence of characters used to represent text.
// You can define strings using:
// 1) Double quotes " "
// 2) Single quotes ' '
// 3) Backticks ` ` (used for template literals)

// String Methods:-

// 1) .length --> Returns the number of characters in a string.
    console.log("Javascript".length);


// 2) .toUpperCase() --> Changes the string to uppercase.
    console.log("moksh".toUpperCase());

    
// 3) .toLowerCase() --> Changes the string to lowercase.
    console.log("HELLO WORLD".toLowerCase());


// 4) .includes(substring) --> Checks if the string contains a given substring. Gives the answer in TRUE or FALSE.
    console.log("developerMoksh".includes("Moksh"));


// 5) .indexOf(substring) --> Returns the first index where the substring occurs. Returns -1 if not found.
    // NOTE: Index counting starts from 0.
    console.log("Moksh jain is a good boy".indexOf("is"));


// 6) .slice(start, end) --> Extracts a portion of the string. End index is not included.
    console.log("developer".slice(4,9)) //loper
    
    // If we left the end index space empty then it's by default takes the last present index number
    console.log("JavaScript".slice(-4,)) //ript

    // Negative Indexing :- Accessing elements from the end of a sequence (like an array or a string), by using negative numbers. 
    // When you pass a negative value to .slice(), it counts from the end of the string:

    //  Index:       0   1   2   3   4   5   6   7   8   9
    // String:      "J   a   v   a   S   c   r   i   p   t"
    // Negative:    -10 -9  -8  -7  -6  -5  -4  -3  -2  -1

    console.log("JavaScript".slice(-8, -2)); //vaScri as it never takes the last index value. And if we want it we just have to take the next of it.

    // Getting a portion using both negative and positive indexes
    console.log("HelloWorld".slice(2,-2)); //lloWor


// 7) .substring(start, end) --> Similar to .slice(), but cannot accept negative indices.
    console.log("CyberSecurity".substring(0,4)) //Last index value we entered will not be in the output. So the Output would be 'Cybe'

    // Trying to do Negative Indexing:-
    console.log("CodeWithMoksh".substring(-5)); //Expected Output-- Moksh   Actual Output-- CodeWithMoksh

    // .substring() treats the negative values as 0

    console.log("JavaScript".substring(5, 2));     // "vaS" (automatically swaps to substring(2, 5))


// 8) .replace(searchValue, newValue) --> Replaces part of the string.
    console.log("Hello World".replace("World", "Moksh"));


// 9) .trim() --> Removes whitespace from both ends.
    console.log("   space kills     ".trim());


// 10) .split(separator) --> Converts string to array, splitting at each occurrence of separator.
    let str = "apple,banana,kiwi,orange";
    console.log(str.split(",")); //Splits the string wherever this seperator occurs


// 11) .charAt(index) --> Gives the character at the provided index
    console.log("ABCD".charAt(1)); //B

    // You might think of that we can use "ABCD"[index] but there are some drawbacks:-
    let char = "Hi";
    char.charAt(5);  // ""  (empty string)
    char[5];         // undefined

    // If you're checking for character existence, .charAt() might behave more gracefully.


// 12) .startsWith() / .endsWith() --> Check how the string begins or ends. Returns True or False
    console.log("developerMoksh".startsWith("dev")); //True
    console.log("developerMoksh".endsWith("moksh")); //False because of case sensitivity
    

// 13) .repeat(count) --> Repeats the string count times.
    console.log("JS".repeat(5)) //JSJSJSJSJS

// 14) .concat() --> Used to join two or more strings together into one.
    let str1 = "Hello";
    let str2 = "World";
    console.log(str1.concat(" ", str2)) //This will first concat the space and then the other string.

    console.log("Hello".concat(", ","Moksh","!")); // "Hello, Moksh!"


// Template Literals (Backticks)
let full_name = "Moksh jain";
let msg = `Hello, ${full_name}! Welcome to JavaScript World.`;
console.log(msg);


// NOTE:-
    // Strings are immutable in JavaScript. Any method like .replace() or .slice() returns a new string — they don't change the original.
