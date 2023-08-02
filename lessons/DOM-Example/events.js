let myTodoListItems = ["trash", "put kids to bed"];
let addItemButton = document.getElementById("add-item");
let inputItem = document.getElementById("input-item");
let todoItemList = document.getElementById("todo-item-list"); // Parent
let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
  myTodoListItems = [];
  clearTodoList();
});
addItemButton.addEventListener("click", () => {
  /* 
  - add the item typed in the input field to be added to our list.
  - Items should be added (using .push()) to the myTodoListItems array
  - display our todo items
  - Clear the input field
  */

  myTodoListItems.push(inputItem.value);
  inputItem.value = "";
  displayTodoItems();
});

function displayTodoItems() {
  /* 
In order to create elements you ust do the following:

1) identify the parent
2) create the element tags
3) what do we want to put in between the tags
4) append what we were creating to the parent
*/
  clearTodoList();
  myTodoListItems.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.className = "todo-item";
    todoItemList.appendChild(listItem);
  });
  let todoItems = document.getElementsByClassName("todo-item");
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].textContent.toLowerCase().includes("help")) {
      todoItems[i].style.color = "red";
    } else {
      todoItems[i].style.color = "green";
    }
  }
}

function start() {
  myTodoListItems = [];
  clearTodoList();
  displayTodoItems();
}
start();

function clearTodoList() {
  while (todoItemList.hasChildNodes()) {
    todoItemList.removeChild(todoItemList.firstChild);
  }
}
