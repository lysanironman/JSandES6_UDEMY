// Posts messages on the console. 
console.log("Hello World! My Name is Adam Kadmon.");
//Creates HTML elements via JS code by locating tag via id.
document.getElementById("example").innerHTML = "JavaScript Rules!";
// Objects
let dog = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    weight: 60
};
// Assigning function to a variable. 
let check = function(number) {
// Conditionals and if/else statements 
    if (number % 2 == 0) {
        console.log(number + " is even!");
// If the 'if' statement is false, 'else' will display in the console. 
    } else {
        console.log(number + " is odd!")
    }
}
// Calling a function.
check(3*7);
check(3*4);
// Switch statements allow one to run code depending on if the parameters match up with the variables present 
let x=4;
switch(x) {
// Switch statements REQUIRE the Break keyword to terminate the code.
    case 1: 
        console.log("The answer is One!");
        break;
    case 2:
        console.log("The answer is Two!");
        break;
    case 3:
        console.log("The answer is Three!");
        break;
// If none of the cases return true, then the 'default' code runs, thus terminating the code.
    default:
        console.log("The answer is " + x + "!");
}
