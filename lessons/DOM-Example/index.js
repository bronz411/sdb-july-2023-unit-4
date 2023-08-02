console.log("it works from index.js");

//! getElementById
let header = document.getElementById("main-header");
console.log(header);
// ? How can we change color
header.style.color = "red";
// ? How can I change the text that is displayed:
header.textContent = "Brent's Todo List";

// TODO: Change the h3 text to chores
let todoCategory = document.getElementById("todo-cat");
// ! if you want to convert html that is inside your string, use innerHTML
todoCategory.innerHTML = "<em>Chores</em>";

//! getElementsByClassName
let todoItems = document.getElementsByClassName("todo-item");
console.log(todoItems);

// How to loop through HTML Collection
// ? If the item has the word help in it, change the style to red.
for (let i = 0; i < todoItems.length; i++) {
  if (todoItems[i].textContent.toLowerCase().includes("help")) {
    todoItems[i].style.color = "red";
  } else {
    todoItems[i].style.color = "green";
  }
}

//! getElementsByTagName
let pTags = document.getElementsByTagName("p");
console.log(pTags);
pTags[0].style.fontStyle = "italic";

//! querySelector
// functions like .find, searches from the top of the HTML and returns the first thing that matches search requirements.
// uses selector syntax like CSS (. for class) (# for id)
let todoItemQuerySelector = document.querySelector(".todo-item");

//! querySelectorAll()
// selects all elements that match a specific CSS selector, returning a NodeList.

let todoQuerySelectorAll = document.querySelectorAll("todo-item");
todoQuerySelectorAll.forEach((todoItem) => console.log(todoItem.textContent));
