let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul")
let todos = [];

function addToDo(){
    todos.push(input.value);

    adder(todos[todos.length - 1])
}

function adder(todo) {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    li.innerText = todo
    ul.appendChild(li);
    btn.innerText = "Remove";
    for (let i = 0; i < todos.length; i++){
        btn.setAttribute("id", i);
        li.setAttribute("id", i)
    }
    li.insertAdjacentElement("beforeend", btn);
    removeToDo(); 
}

function removeToDo() {    
    let btn = document.querySelectorAll("button");
    btn.forEach(e => e.addEventListener("click", e => {
        let idClicked = e.target.parentElement.getAttribute("id")
        let remove = document.getElementById(idClicked);
        remove.remove();
    }))
}

form.addEventListener("submit", e => {
    e.preventDefault()

    addToDo();
})