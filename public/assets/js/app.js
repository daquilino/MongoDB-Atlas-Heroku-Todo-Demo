console.log("js loaded.")

const toDoUl = document.querySelector("#toDoUL");
const addToDoForm = document.querySelector("#addToDoForm");
const addToDoInput = document.querySelector("#addToDoInput");


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






function loadToDos(){
    fetch("/api/todo")
    .then(todos => todos.json())
    .then(todos => {
        console.log("loading todos")
        console.log(todos)
    })
}


loadToDos();