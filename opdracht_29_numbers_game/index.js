let numberToBeGuessed = null;
let Name;
let guess;
const min = 0;
const max = 25;



while ( Name===undefined||Name === null|| Name.length ===0){

Name = prompt("please enter your name");
}


alert(" Guess a number between 1 and 25 " + Name + "!!");

numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min;


while (guess !== numberToBeGuessed) {
  guess = parseInt(prompt("Insert a number.."));
  alert("Your guess :" + guess);
  if (guess > numberToBeGuessed) {
    alert("to high!");
  } else if (guess < numberToBeGuessed) {
    alert("to low! ");
  } else {
    alert("Yes the number was:   " + guess);
    
  }
}
