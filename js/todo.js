const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input:first-child");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = (e) => {
  console.log(e);
  console.dir(e.target);
  //   const info = e.path[1]; 이것도 됨
  //   info.remove();
  const li = e.target.parentElement;
  toDos = toDos.filter((item) => {
    return item.id !== parseInt(li.id);
  });
  console.log(li);
  console.log(toDos);
  saveToDos();
  li.remove();
};

const paintToDo = (value) => {
  const li = document.createElement("li");
  li.id = value.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = value.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const handleToDoSubmit = (e) => {
  e.preventDefault();
  const vv = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: vv,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
