const inputElement = document.querySelector("#input-element");
const listContainer = document.querySelector("#list-container");
let listArray = [];

function addItem() {
  if (inputElement.value === "") {
    alert("Please enter item first");
  } else {
    listArray.push(inputElement.value);
    inputElement.value = "";
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
  renderItems();
}

function clearAll() {
  listArray = [];
  renderItems();
}

const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener("click", clearAll);
const addButton = document.querySelector("#add-item");
addButton.addEventListener("click", addItem);