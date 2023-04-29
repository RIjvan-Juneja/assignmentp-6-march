// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.

// Delay in seconds
const delayInSeconds = 3;

// Function to generate random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
}

// Function to display countdown message
function displayCountdownMessage(seconds) {
  console.log("Countdown: " + seconds + " seconds remaining");
}

// Function to print the generated random number
function printRandomNumber(randomNumber) {
  console.log("Random Number: " + randomNumber);
}

// Delay function using setTimeout()
function delay(func, delayTime) {
  setTimeout(func, delayTime * 1000);
}

// Call the delay function with the generateRandomNumber function as the callback
// and the delayInSeconds as the delay time
delay(() => {
  let countdown = delayInSeconds;
  const countdownInterval = setInterval(() => {
    displayCountdownMessage(countdown);
    countdown--;
    if (countdown === 0) {
      clearInterval(countdownInterval);
      const randomNumber = generateRandomNumber();
      printRandomNumber(randomNumber);
    }
  }, 1000);
}, delayInSeconds);
