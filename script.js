// function rollDice() {
//   const numOfDice = document.getElementById("numOfDice").value;
//   const diceResult = document.getElementById("diceResult");
//   const diceImages = document.getElementById("diceImages");

//   // const values = [];
//   const images = [];

//   for (let i = 0; i < numOfDice; i++) {
//     const value = Math.floor(Math.random() * 6) + 1;
//     // values.push(value);
//     images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
//   }

//   // diceResult.textContent = ` ${values.join(", ")}`;
//   diceImages.innerHTML = images.join("");
// }


function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceImages = document.getElementById("diceImages");

  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1; // Random value between 1 and 6
    const imageUrl = `https://i.postimg.cc/${getImageCode(value)}/${value}.png`;
    values.push(value);
    images.push(`<img src="${imageUrl}" alt="Dice ${value}">`);
  }
  diceImages.innerHTML = images.join("");
}

function getImageCode(value) {
  switch (value) {
    case 1:
      return "D06YghPH";
    case 2:
      return "JhgqRnpR";
    case 3:
      return "wMzbdMB7";
    case 4:
      return "CLPJcmbZ";
    case 5:
      return "mZVSr8Xd";
    case 6:
      return "qqg6qXqY";
    default:
      return ""; // Handle other cases if needed
  }
}

