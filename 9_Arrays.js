// An array is a special type of object in JavaScript used to store multiple values in a single variable.
// Can hold any type: strings, numbers, objects, functions, even other arrays!

let fruits = ["Apple","Orange","Mango","Kiwi"];
// This fruits array holds 4 string elements. Each element has an index, starting from 0.


// Accessing Elements:-
console.log(fruits[0], fruits[1]);


// Modifying Elements:- As arrays are mutable their values can be changed.
fruits[0] = "Pineapple"; //The value present on index 0 has been changed.
console.log(fruits);


// Methods Used:-
    let ex = [1,"Hello",true,"World",67];
    console.log("Actual Array--", ex)

    // 1) .length --> Number of elements
        console.log("Length--",ex.length);


    // 2) .pop() --> Removes the last element from an array and returns it. If the array is empty, undefined is returned
        ex.pop(); //Removing the last value
        console.log("Popping the last element-- ",ex);


    // 3) .join() --> Adds all the elements of an array into a string, separated by the specified separator string.
        console.log("Join-- ",ex.join(" and ")); //This only replaces the (,) in the array
        

    // 4) .toString() --> Array to String.
        console.log("Converted to String-- ",ex.toString()); //This converts the array into string; The value and the (,) or we can say the writing style in the array remains the same. Only the datatype changes.


    // 5) .push() --> Appends new elements to the end of an array, and returns the new length of the array.
        ex.push("Mokshisgood");
        console.log("Push-- ",ex);


    // 6) .shift() --> Removes the first element from an array and returns it. If the array is empty, undefined is returned.
        ex.shift()
        console.log("Shift-- ",ex);
    

    // 7) .unshift() --> Inserts new elements at the start of an array
        ex.unshift(7);
        console.log("Unshift-- ",ex );


    // 8) .indexOf(value) --> Get index of a value
        console.log("IndexOF--", ex.indexOf("Mokshisgood"));


    // 9) .includes(value) --> Check if value exists
        console.log("Include check--", ex.includes(77));


    // 10) delete --> It is used to delete a specific index value from an array.
        delete ex[2];
        console.log("Delete-- ",ex);

        // It removes the value but does not update the array length or reindex the array.
        // It replaces that index value as undefined


    // 11) .splice() -->  Adds or removes elements from an array in-place. It modifies the original array.
        let ex1 = [1,2,3,4,5,"Hello", true, false, "Moksh"];

        // Syntax-- array.splice(startIndex, deleteCount, item1, item2, ...)
        // startIndex	The index at which to start changing the array
        // deleteCount	Number of elements to remove starting from startIndex
        // item1, ...	(Optional) Items to add at startIndex

        ex1.splice(1,3); //Starts from index 1 and delete 3 elements in continuation.
        console.log("Removing elements-- ",ex1);
        // This is'nt like count it removes the specified range of elememts and then updates the length also. It dont replaces the element's index as undefined.
        
        // Adding Elements with splice()
        ex1.splice(1,0,"IamAdded","Added2"); //This range starts from index 1 and as the deletecount is 0 nothing will be deleted. As we have given the items to be added. It adds the items from index[1];
        console.log("Adding items-- ",ex1);

        // Replace Elements with splice()
        ex1.splice(1,2,9,8); //Remove 2 elements at index 1, insert 9 and 8 from index[1];
        console.log("Replacing items-- ",ex1);

        // NOTE:- Splice only returns what is removed or replaced not the thing which is being added.
         

    // 12) .slice() --> returns a shallow copy of a portion of an array into a new array, selected from start to end (end not included). It does not modify the original array.
        // Syntax-- array.slice(startIndex, endIndex);
        // startIndex	(Optional) The index to begin extraction (default: 0)
        // endIndex	(Optional) Extract up to, but not including this index

        // Basic Slicing
        console.log("Slicing-- ",ex1.slice(1,4)); //This will create a new array slicing from index[1](included in the array) to index[4](not included in the array)

        // Omiting endindex
        console.log("Slicing without endindex-- ",ex1.slice(3)); //If the endindex is not defined then for default it is the length of the array.

        // We can even use Negative indices to locate the index value
        console.log("Slicing through negative indices-- ",ex1.slice(-6));

        // We can copy the whole array using slice
        console.log("Copying the Array-- ",ex1.slice()); //This can be done beacuse the default of startIndex and endIndex are 0 and the length of the array respectively
        

    // 13) .concat() --> The concat() method concatenates (joins) two or more arrays.Returns a new array, containing the joined arrays. It does not change the existing arrays.
        let arr1 = [1,2,3,4, true];
        let arr2 = [5,6,false,7, "Moksh"];
        let arr3 = [8,9,"Hello", "World"];

        console.log("Concat-- ",arr1.concat(arr2, arr3));
        console.log("Original array-- ",arr1);

        
    // 14) .sort() --> The sort() method sorts an array alphabetically. Converts elements to strings
        let fruits1 = ["banana", "Apple", "Cherry"];
        fruits1.sort(); // Capital letters come first
        console.log("Fruits-- ",fruits1); // ["Apple", "banana", "cherry"]


    // 15) .map() --> Creates a new array by applying a function to each element of the original array.

        // Syntax -- array.map((element, index, array) => {
        //     return newValue;
        // });

        let numlist = [1,693,69,123,6,9,2335];
        console.log("Map-- ",numlist.map((value)=>{ //There also the other parameters index and array
            return value * value
        }))

        // This is used to run a function on each of the element and after that add that value to a new array.

        // Real World Usecase:-- Convert prices (e.g., USD → EUR) as it transform each element
        

    // 16) .filter() --> Creates a new array with only the elements that pass a condition (return true in the callback).
        // Syntax-- 
            // array.filter((element, index, array) => {
                // return condition;
            // });
        
        // Single condition
        console.log("Filter-- ",numlist.filter((value) => { //There also the other parameters index and array
            return value%2 == 0;
        }));
        
        // Using with if-else:-
        console.log("Filter with if-else-- ",numlist.filter((value) =>{
            if(value > 10){
                return true //If the condition gets to be true then that value will be added to the new array
            }else{
                return false // If not then it will be rejected
            }
        }));
        
        // Real World Usecase:-- Remove invalid emails as it keep only valid ones
        
        
    // 17) .reduce() --> "Reduces" the array to a single value by applying a function from left to right.
        const num = [1,2,3,4,5,6];

        console.log("Reduce-- ",num.reduce((previousvalue, currentvalue) => {
            return previousvalue + currentvalue
        }));

        // In this what is going on actually is: 
        // 1) It takes the first and second value from the array.
        // 2) It performs the condition on those two value.
        // 3) After performing it goes to the next value.
        // 4) And performs the same task with it in which the first value is the result of previous operation and the second value is the number itself.
        // 5) The cycle goes on till the end
        // For ex in this array-- "1+2" = 3, "3+3" = 6, "6+4" = 10, "10+5" = 15, "15+6" = 21(The final result)

        // Real World Usecase:-- Remove invalid emails as it keep only valid ones
        