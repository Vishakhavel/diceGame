var randomNumber1= Math.floor((Math.random() * 6) + 1);
var randomNumber2= Math.floor((Math.random() * 6) + 1);

document.getElementById("image1").src = "images/dice"+randomNumber1+".png";
document.getElementById("image2").src = "images/dice"+randomNumber2+".png";

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 wins!";
}
else if (randomNumber2>randomNumber1){
  document.querySelector("h1").textContent="Player 2 wins!";
}
else{
  document.querySelector("h1").textContent="Tie! Refresh again";
}
