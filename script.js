const todoBox = document.getElementById("todo-box");
const listTodo = document.getElementById("todo-list");

function addTask() {
  if (todoBox.value === "") {
    alert("You need to write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todoBox.value;
    listTodo.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  todoBox.value = "";
  saveData();
}

listTodo.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listTodo.innerHTML);
}

function showTask() {
  listTodo.innerHTML = localStorage.getItem("data");
}

showTask();
