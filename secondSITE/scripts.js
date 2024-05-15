const button = document.querySelector('.button__add__task');
const input = document.querySelector('.input__task');
const fullList = document.querySelector('.list__task');

let myList = [];

function addNewTask() {
    if(input.value == '' || input.value == undefined){
        window.alert(`Para poder adicionar, digite algo!`);
        return;
    }
    myList.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = '';

    tasks();
}

function tasks() {

    let newLi = '';

    myList.forEach((item, index) => {
        newLi = newLi + `
        <li class="task ${item.concluida && "done"}">
            <img src="./img1/checked.png" alt="confere_na_tarefa" onclick="taskOky(${index})">
            <p>${item.tarefa}</p>
            <img src="./img1/trash.png" alt="excluir_a_tarefa" onclick="deletItem(${index})">
        </li> 
     
        `
    })
    fullList.innerHTML = newLi;

    localStorage.setItem('list', JSON.stringify(myList));
}

function taskOky(index) {
    myList[index].concluida = !myList[index].concluida;

    tasks();
}

function deletItem(index) {
    myList.splice(index, 1);

    tasks();
}

function tasksSalved() {
    const taskLocalStorage = localStorage.getItem('list')

    if (taskLocalStorage) {
        myList = JSON.parse(taskLocalStorage)
    }

    tasks();
}

tasksSalved()
button.addEventListener('click', addNewTask);