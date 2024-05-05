const todoBox = document.getElementById("todo-box");
const listTodo = document.getElementById("todo-list");

function addTask() {
  if (todoBox.value === "") {
    alert("You need to write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todoBox.value;
    listTodo.appendChild(li);
  }
}
