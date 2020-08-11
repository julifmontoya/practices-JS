// Get the Dom
let user = 0;
let computer = 0;

const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Roca";
  if (letter === "p") return "Papel";
  return "Tijeras";
}

function win(userChoice, ComputerChoice) {
  user++;
  userScore.innerHTML = user;
  computerScore.innerHTML = computer;
  const userSelect = document.getElementById(userChoice);
  result.innerHTML = `${convertToWord(userChoice)} Vence a ${convertToWord(
    ComputerChoice
  )} ¡Ganaste!`;
  userSelect.classList.add("green-glow");
  setTimeout(() => {
    userSelect.classList.remove("green-glow");
  }, 2000);
}

function lose(userChoice, ComputerChoice) {
  computer++;
  userScore.innerHTML = user;
  const userSelect = document.getElementById(userChoice);
  computerScore.innerHTML = computer;
  result.innerHTML = `${convertToWord(
    userChoice
  )} Es vencido por ${convertToWord(ComputerChoice)} ¡Perdiste!`;
  userSelect.classList.add("red-glow");
  setTimeout(() => {
    userSelect.classList.remove("red-glow");
  }, 2000);
}

function draw(userChoice, ComputerChoice) {
  const userSelect = document.getElementById(userChoice);
  result.innerHTML = `${convertToWord(userChoice)} Es igual a ${convertToWord(
    ComputerChoice
  )} ¡Tablas!`;
  userSelect.classList.add("grey-glow");
  setTimeout(() => {
    userSelect.classList.remove("grey-glow");
  }, 2000);
}

function game(userChoice) {
  const ComputerChoice = getComputerChoice();
  switch (userChoice + ComputerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, ComputerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, ComputerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, ComputerChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", () => {
    game("r");
  });

  paper.addEventListener("click", () => {
    game("p");
  });

  scissors.addEventListener("click", () => {
    game("s");
  });
}

main();
