// Selecting HTML Element
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const result = document.getElementById("result");

// Place a number
const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);


// Checking Function
function guessHandler() {
const userNum = Number(guessInput.value);
console.log(userNum);

if (userNum === randomNum) {
result.innerText = `You guessed the number! The number is ${randomNum}`;
} else if (userNum < randomNum){
    result.innerText = "Too low, try again";
    guessInput.value = "";
} else {
    result.innerText = "Too High, try again"; 
    guessInput.value = ""; 
} 
}

// Click on Button
guessButton.addEventListener("click", guessHandler); 
