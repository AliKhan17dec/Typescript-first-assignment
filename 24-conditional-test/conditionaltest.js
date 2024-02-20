// Tests for equality and inequality with strings
var fruit = 'apple';
console.log("Is fruit == 'apple'? Prediction: True.");
console.log(fruit == 'apple');
console.log("Is fruit != 'banana'? Prediction: True.");
console.log(fruit != 'banana');
console.log("Is fruit == 'banana'? Prediction: False.");
console.log(fruit == 'banana');
console.log("Is fruit != 'apple'? Prediction: False.");
console.log(fruit != 'apple');
// Tests using the lower case function
var color = 'Blue';
console.log("Is color.toLowerCase() == 'blue'? Prediction: True.");
console.log(color.toLowerCase() == 'blue');
console.log("Is color.toLowerCase() == 'blue'? Prediction: False.");
console.log(color.toLowerCase() == 'red');
// Numerical tests
var number = 10;
console.log("Is number == 10? Prediction: True.");
console.log(number == 10);
console.log("Is number != 5? Prediction: True.");
console.log(number != 5);
console.log("Is number > 5? Prediction: True.");
console.log(number > 5);
console.log("Is number < 20? Prediction: True.");
console.log(number < 20);
console.log("Is number >= 10? Prediction: True.");
console.log(number >= 10);
console.log("Is number <= 10? Prediction: True.");
console.log(number <= 10);
// Tests using "and" and "or" operators
var x = 5;
var y = 10;
console.log("Is x > 3 and y < 15? Prediction: True.");
console.log(x > 3 && y < 15);
console.log("Is x > 5 or y < 5? Prediction: True.");
console.log(x > 5 || y < 5);
// Test whether an item is in an array
var pets = ['dog', 'cat', 'rabbit'];
console.log("Is 'dog' in the pets array? Prediction: True.");
console.log(pets.includes('dog'));
// Test whether an item is not in an array
console.log("Is 'bird' not in the pets array? Prediction: True.");
console.log(!pets.includes('bird'));
