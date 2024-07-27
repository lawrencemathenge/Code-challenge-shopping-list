const inputElement = document.querySelector("#input-element");
const listContainer = document.querySelector("#list-container");
let listArray = [];
let listFromStorage = JSON.parse(localStorage.getItem("tasks"));
if (listFromStorage) {
  listArray = listFromStorage;
  renderItems();
}

function addTask() {
  if (inputElement.value === "") {
    alert("Please enter task first");
  } else {
    listArray.push(inputElement.value);
    inputElement.value = "";
    localStorage.setItem("tasks", JSON.stringify(listArray));
    renderItems();
  }
}
function renderItems() {
  let itemsList = "";

  for (let i = 0; i < listArray.length; i++) {
    itemsList += `<li> ${listArray[i]} <button class="delete-btn" data-index="${i}">Delete</button></li>`;
  }
  listContainer.innerHTML = itemsList;
  let deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteItem);
  });
}

function deleteItem(event) {
  let index = event.target.getAttribute("data-index");
  listArray.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(listArray));
  renderItems();
}

function clearAll() {
  listArray = [];
  localStorage.removeItem("tasks");
  renderItems();
}

const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener("click", clearAll);
const addButton = document.querySelector("#add-item");
addButton.addEventListener("click", addTask);