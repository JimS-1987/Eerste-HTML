const aniBut = document.querySelectorAll("big-five-list-item .big-five-button");
const seenAnimals = document.querySelector(".spotted-animals-list");

//const makeSeen = document.querySelector(".big-five-list-item");

Array.from(aniBut).forEach(function (btn) {

  btn.addEventListener("click", function (e) {

    const li = e.target.parentElement;

    li.parentNode.addChild(li)
  });
});



seenAnimals.classList.add(aniBut);






//aniBut.addEventListener("click",sawAnimal);
//console.log()