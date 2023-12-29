// Global variables
let secretNumber = generateRandomNumber();

// 4. Function to generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor((Math.random() * 10) + 1);
}

// Function to check the user's guess
function checkGuess() {

  // Local variable
  let userGuess = document.getElementById("userGuess").value;
  let resultElement = document.getElementById("result");

  // 5. Here should be an if-else statement.
  if(userGuess == secretNumber){
    resultElement.innerHTML = "Congratulations! You guessed the correct number!";
    resultElement.innerHTML += '<p><img src="picture2.jpeg"></p>';
    resultElement.innerHTML += '<audio autoplay><source src="music2.mp3" type="audio/mp3"></audio>';

    secretNumber = generateRandomNumber();
  } else {
    resultElement.innerHTML = "Sorry, try again!";
    resultElement.innerHTML += '<p><img src="picture1.jpeg"></p>';
    resultElement.innerHTML += '<audio autoplay><source src="music1.mp3" type="audio/mp3"></audio>';
  }
  // If the answer is correct, then output "Congratulations! You guessed the correct number!" with picture2 and music2.

  // If the answer is wrong, then output "Sorry, try again!" with picture1 and music1.

  // P.S. Generate a new random number for the next round after getting the correct answer.

  // Clear the input field for the next guess
  document.getElementById("userGuess").value = "";
}

// Function to show image and play sound
function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}
