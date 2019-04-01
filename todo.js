const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODO_LS = 'toDos';

function paintTodo(text){
     const li = document.createElement("li");
     const delBtn = document.createElement("button");
     delBtn.innerText = "❌";
     const span = document.createElement("span");
     span.innerText = text;
     li.appendChild(delBtn);
     li.appendChild(span);
     todoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}


function loadTodo(){
    const TODOS = localStorage.getItem(TODO_LS);
    if(TODOS !== null){

    } 
}

function init(){
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit);
}

init();