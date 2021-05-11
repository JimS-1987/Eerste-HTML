const animalButtons = document.querySelectorAll(".big-five-button");
const big5 = document.querySelector(".big-five-list")
const makeSeen = document.querySelector(".big-five-list-item");
const spotAnimal = document.getElementById("spotted-animals-list")
const deleteFirst = document.getElementById("remove-first-item-button")
const parent = document.getElementById("spotted-animals-list").getElementsByTagName("ul")[0];
const deleteAll = document.getElementById("remove-all-button")


Array.from(animalButtons).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const newItem = document.createElement("li")
    newItem.innerHTML = e.target.textContent
    spotAnimal.append(newItem)
  });
});
deleteFirst.addEventListener("click", (e) => {
  if (spotAnimal.children[0]) {
    spotAnimal.children[0].remove()
  }
})


deleteAll.addEventListener("click", (e) => {
  while (spotAnimal.children[0]) {
    spotAnimal.children[0].remove()
  }
})