const but1 = document.querySelector(".btn-alert");
const buttons2 = document.querySelector(".but2");

const toggleBody = document.querySelector(".blue-background");
but1.addEventListener("click", myFunction);

function myFunction() {
  alert ("Button has been clicked");
}

const toggleBodyColor = () => {

toggleBody.classList.toggle("blue-background");
toggleBody.classList.toggle("red-background");


};

buttons2.addEventListener("click", toggleBodyColor);


