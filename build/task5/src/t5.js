"use strict";
// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value) {
    // TODO: Use a type guard to check the actual type of 'value'
    if (typeof value === "string") {
        // if type is string, retrurn the length of the string
        return value.length;
    }
    else {
        // if type is number return the square of the number
        return Math.sqrt(value);
    }
}
// Prompt the user to enter a value as either a string or a number
const uInput = (prompt("Give me a number or string")); /* TODO: Get user input */
const parsedValue = uInput !== null && !isNaN(Number(uInput))
    ? Number(uInput)
    : uInput; /* TODO: If userInput is numeric, convert it to number else keep it as string */
// Call the lengthOrSquare function
const res = lengthOrSquare(parsedValue);
console.log(typeof res);
console.log(res);
