let displayHex = document.getElementById("1");
let displayHex1 = document.getElementById("2");

let letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colors;
let hex;
let hex1;
let hex2;

function clickme() {
  hex1 = generateHex();
  hex2 = generateHex();

  displayHex.innerText = hex1;
  displayHex1.innerText = hex2;
  document.body.style.background = `Slinear-gradient(${hex1},${hex2})`;
}


function generateHex() {
  hex = "#";
  for (var i = 0; i <= 5; i++) {

    color = (Math.floor(Math.random() * 16));
    hex += letters[color];

  }
  console.log(hex);
  return hex;
}