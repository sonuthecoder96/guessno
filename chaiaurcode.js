let randomno = parseInt(Math.random() * 100 + 1);

console.log(randomno);

const submit = document.querySelector("#subt");

const userinput = document.querySelector("#guessField");

const guessslot = document.querySelector(".guesses");

const remaing = document.querySelector(".lastResult");

const lohi = document.querySelector(".lowOrHi");

const startover = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevguess = [];

let numGuess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (e) {
    //in forms value go to server so prevent that we use preven default function
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number in between 1 to 100");
  } else if (guess > 100) {
    alert("Please enter a number in between 1 to 100");
  } else {
    prevguess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${guess}`);
      Endgame();
    } else {
      displayGuess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess == randomno) {
    displayGuess(`You guessed it right`);
  } else if (guess < randomno) {
    displayMessage(`Number is Smaller`);
  } else if (guess > randomno) {
    displayMessage(`Number is Larger`);
  }
}

function displayGuess(guess) {
  userinput.value = "";
  guessslot.innerHTML += `${guess}`;
  guessslot.innerHTML += " ";
  numGuess++;
  remaing.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lohi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const nb = document.querySelector("#newgame");
  nb.addEventListener("click", function (e) {
    randomno = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numGuess = 1;
    guessslot.innerHTML = "";
    remaing.innerHTML = `${11 - numGuess}`;
    userinput.removeAttribute("disabled");
    startover.removeChild(p);
    playgame = true;
  });
}

function Endgame() {
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newgame" class = "new" >Start New Game</h2>`;
  startover.appendChild(p);

  playgame = false;
  newGame();
}
