// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable "input" storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.

// Input string
const input = "Hello, world!";

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to print the reversed string
function printReversedString(str) {
  console.log("Original string: " + str);
  const reversedString = reverseString(str);
  console.log("Reversed string: " + reversedString);
}

// Delay function using setTimeout()
function delay(func, delayTime) {
  setTimeout(func, delayTime);
}

// Call the delay function with the printReversedString function as the callback
delay(() => {
  printReversedString(input);
}, 2000);
