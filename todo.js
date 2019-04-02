const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODO_LS = "toDos";
const todos = [];


function savTodos() {
    localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function paintTodo(text){
     const li = document.createElement("li");
     const delBtn = document.createElement("button");
     const span = document.createElement("span");
     const newID = todos.length + 1;
     const todoObj = {
        text: text,
        id: newID
    };
     delBtn.innerText = "❌";
     span.innerText = text;
     li.appendChild(delBtn);
     li.appendChild(span);
     todoList.appendChild(li);
     todos.push(todoObj);
     savTodos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}


function loadTodo(){
    const loadedTodos = localStorage.getItem(TODO_LS);
    if(loadedTodos !== null){
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function(todo){
            paintTodo(todo.text);
        });
    } 
}

function init(){
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit);
}

init();