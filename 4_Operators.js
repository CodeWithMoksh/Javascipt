// Operators are symbols or keywords that perform operations on values(also called operands)
a = 100;
b = 200;

// 1) Arithmetic Operators : Used for basic math calculations

    // i) Addition:
        let add = a+b;
        console.log("Addition: ", add);
        
    // ii) Subtraction:
        let sub = a-b;
        console.log("Subtraction: ", sub);

    // iii) Multiplication:
        let mul = a*b;
        console.log("Multiplication: ", mul);

    // iv) Division:
        let div = a/b;
        console.log("Division: ", div)

    // v) Modules(remainder):
        let mod = 3%2;
        console.log("Modules: ", mod);
        
    // vi) Exponentiation:
        let expo = a**b;
        console.log("Exponentiation: ", expo);

    // vii) POSTFIX (x++, x--): "Give now, change later":- "I’ll give you the number first, then I’ll increase/decrease it."
        // The operator ++ doesn't just return a value — it also modifies the variable it's used on. Even if you're only assigning the value to another variable (given), the side effect is that apples gets incremented.
        let apples = 1;
        let given = apples++;//Gets the value of apples(1) assigns to given(variable) and then increments the apples value
        let taken = apples--; 
        console.log("Apples are: ", apples); //1
        console.log("Taken are: ",taken) //2
        console.log("Given are: ",given); //1

    // viii) PREFIX (++x,--x): I’ll increase/decrease it first, then give you the new number.
        let mango = 10;
        let borrow = ++mango; //Incremets the value of mango first(which is now 11) then assigns it to borrow(variable)
        let lend = --mango; // 10
        console.log("Mango: ", mango); // 10
        console.log("Borrow: ", borrow); //11
        console.log("Lend: ", lend); //10


// ii)Assignment operator
    let x = 5;

    //  i) Simple assignment
        x = 10;
        console.log("x = 10:", x);

    //  ii) Add and assign
        x += 2; // Same as x = x + 2
        console.log("x += 2:", x); // 12

    //  iii) Subtract and assign
        x -= 3;
        console.log("x -= 3:", x); // 9

    //  iv) Multiply and assign
        x *= 2;
        console.log("x *= 2:", x); // 18

    //  v) Divide and assign
        x /= 3;
        console.log("x /= 3:", x); // 6

        
// iii)Comparsion operators:

    // Loose equality
        console.log("5 == '5':", 5 == '5'); // true — compares value, not type

    // Strict equality
        console.log("5 === '5':", 5 === '5'); // false — compares value AND type

    // Loose inequality
        console.log("5 != '5':", 5 != '5'); // false — same value

    // Strict inequality
        console.log("5 !== '5':", 5 !== '5'); // true — different types

    // Greater than
        console.log("5 > 2:", 5 > 2); // true

    // Less than
        console.log("5 < 2:", 5 < 2); // false

    // Greater than or equal
        console.log("5 >= 5:", 5 >= 5); // true

    // Less than or equal
        console.log("5 <= 4:", 5 <= 4); // false


// iv) Logical Operators:
    let isTrue = true;
    let isFalse = false;

    // AND: true if both are true
        console.log("isTrue && isFalse:", isTrue && isFalse); // false

    // OR: true if at least one is true
        console.log("isTrue || isFalse:", isTrue || isFalse); // true

    // NOT: inverts boolean value
        console.log("!isTrue:", !isTrue); // false


// Loose Equality (==) Type Conversion Rules:-  The loose equality operator compares two values for equality after attempting to convert them to a common type, a process known as type coercion
    // When comparing a == b, if types differ:
    // JavaScript applies a sequence of conversion rules to try and make the comparison work. Let's walk through them one by one...

    // 1) If both the value are of same type = Just compare
        console.log("5 == 5: ", 5==5); //True

    // 2) If one is null and one is undefined = True(This is termed as special case)
        console.log("null == undefined", null == undefined); //True

    // 3) If one is String and one is Number = String will be converted into number
        console.log("'5' == 5", ("5" == 5)); // True

    // 4) If one is boolean convert to number
    // NOTE: True==1, False==0
    console.log("true == 1", true == 1); //True because the value is converted into number which is 1

    // NOTE: Always use === and !==, unless you have a very specific, well-reasoned need for == or !=.


// Strict Equality (===): The strict equality operator does not perform any type conversion; it checks whether both the value and the type are the same
    console.log("'5' == 5", ('5' == 5)) // False as it checks the value and the datatype simultaneously


// What is NaN?
    // NaN stands for "Not a Number", and it’s what you get when you try to do invalid numeric operations.
