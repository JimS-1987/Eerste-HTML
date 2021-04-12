const Name = prompt("please enter your name");


while (Name != null){

 console.log("hello there "+ Name+" How are you today?");
}

  console.log("We didn't got your name yet");




 const Number = prompt ("pick a number between 1 and 25");

 function getRandomInt(min,max)
 Math.floor(Math.random(min,max) * (max));


if (Number === getRandomInt(1,26)){
  console.log ("You got it right!");
}
else if(Number > getRandomInt(1,26)) {
  console.log ("Your guess was " + Number + ". That's too high. Try Again!");
}
else if(Number < getRandomInt(1,26)) {
console.log ("Your guess was " + Number + ". That's too low. Try Again!");
}
 