const todoInput = document.querySelector(".add");
const  todoButton = document.querySelector(".btn");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener('click',addTodo);

todoList.addEventListener('click', deleteCheck);


function deleteCheck(event) {

    const item = event.target;
    console.log(item.value);

    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.classList.add("fade");
        
        todo.style.opacity = '0';
        setTimeout(function(){todo.parentNode.removeChild(todo);}, 1000);
       
    }

    if (item.classList[0] === 'done-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        if (item.innerHTML === "Done") {
        item.innerHTML = "Undo";
        } else {
            item.innerHTML = "Done";
        }
    }

}


function addTodo(event){
    console.log("Hello World");
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    const doneButton = document.createElement('button');
    doneButton.innerHTML = 'Done';
    doneButton.classList.add("done-btn");
    todoDiv.appendChild(doneButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";

}



