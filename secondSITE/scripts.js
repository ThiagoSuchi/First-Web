const button = document.querySelector('.button__add__task');
const input = document.querySelector('.input__task');
const fullList = document.querySelector('.list__task');

let myList = [];

function addNewTask() {
    myList.push(input.value);

    input.value = '';

    tasks()
}

function tasks() {

    let newLi = '';

    myList.forEach((tarefa, index) => {
        newLi = newLi + `
        <li class="task">
            <img src="./img1/checked.png" alt="confere_na_tarefa" onclick="taskOky()">
            <p>${tarefa}</p>
            <img src="./img1/trash.png" alt="excluir_a_tarefa" onclick="deletItem(${index})">
        </li> 
     
        `
    })
    fullList.innerHTML = newLi;
}

function deletItem(index) {
    console.log(index)
}
function taskOky() {
    console.log('task performed');
}

button.addEventListener('click', addNewTask);