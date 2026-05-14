const formEL = document.querySelector(".form");
const inputEL = document.querySelector(".input");
const ulEl = document.querySelector(".list");

formEL.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList() {
  let newTask = inputEL.value;
  const liEl = document.createElement("li");
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEL.value = "";
}
