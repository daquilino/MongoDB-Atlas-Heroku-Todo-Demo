console.log("js loaded.")

const toDoUl = document.querySelector("#toDoUl");
const addToDoForm = document.querySelector("#addToDoForm");
const addToDoInput = document.querySelector("#addToDoInput");
const toggleBtn = document.querySelector(".toggleComplete");

addToDoForm.addEventListener("submit", e => {
   e.preventDefault();
    const ToDo = addToDoInput.value;
    addToDoInput.value = "";

    console.log("sumbitted")

    const newToDo = {"task": ToDo};

    //Post the todo to the server. If success or fail reload the page.
    fetch('/api/todo',
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newToDo)
    })
    .finally(()=> window.location.reload());
})


// Fetches todos from db and renders them to ul
function loadToDos(){
    fetch("/api/todo")
    .then(todos => todos.json())
    .then(todos => {
        console.log("loading todos")
        console.log(todos)

        //clears ul before rendering li's
        toDoUl.innerHTML = null;

        todos.forEach(todo=>{

            console.log(todo);

            const newLi = document.createElement("li")
            newLi.classList.add("list-group-item");
            newLi.innerText = todo.task;

            const newBtn = document.createElement("button");
            newBtn.classList.add("toggleComplete");
            newBtn.setAttribute("data-toDoId", todo._id);
            newBtn.innerText = "Toggle";

            newLi.append(newBtn);


            toDoUl.append(newLi);
        })
    })
}


loadToDos();