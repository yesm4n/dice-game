//

function diceGame() {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);

  let randomNumber2 = Math.floor(Math.random() * 6 + 1);

  const playerOne = (document.getElementsByClassName("dice-1")[0].src =
    "Images/dice" + randomNumber1 + ".png");

  const playerTwo = (document.getElementsByClassName("dice-2")[0].src =
    "Images/dice" + randomNumber2 + ".png");

  // Images/dice6.png

  if (playerOne > playerTwo) {
    document.getElementById("heading").innerHTML = "🎉 Player 1 wins 🎉";
  } else if (playerOne < playerTwo) {
    document.getElementById("heading").innerHTML = "🎉 Player 2 wins 🎉";
  } else {
    document.getElementById("heading").innerHTML = "Draw!!";
  }
}
