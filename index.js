const inputSection = document.getElementById("select");
const removeIcon = document.getElementById("remove");
const addSection = document.querySelector(".addButton");
const input = document.getElementById("inputText");
const date = document.getElementById("inputDate");
const okBtn = document.getElementById("ok");
const taskContiner = document.getElementById("task-wrap");
const inputName = document.getElementById("todoName")


addSection.addEventListener("click", ()=>{
    inputSectionHendle();
})

const inputSectionHendle = () =>{
    inputSection.style.display = "block";
    
}

removeIcon.addEventListener("click", ()=>{
    removeHendle();
})

const removeHendle = () =>{
    inputSection.style.display = "none";
}

const cancleHendle = () => {
    inputSection.style.display = "none";
}

okBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    formHendel();
})

const formHendel = () => {
    if(inputName.value === ""){
        const todo =  document.getElementById("name");
        todo.innerHTML = "Input Task Name"
    }

    else if(input.value === ""){
        const todo =  document.getElementById("todo");
        todo.innerHTML = "Input Your Task"   
    }
    else{
        taskHendel()
        index ++;
    }
}

let index = 1;
const taskHendel = () => {
    inputSection.style.display = "none";
    addTask();

}


const addTask = () =>{
    taskContiner.innerHTML += `
    <div class="task">
        <h5 class="taskNumber">${todoName.value}</h5>
        <p><small>${date.value}</small></p>
        <p>${input.value}</p>

        <div class="icon">
            <i onclick="editTask(this)" class="fa-solid fa-pen-to-square"></i>
            <i onclick="deletTask(this)" class="fa-solid fa-trash"></i>
        </div>
    </div>
    `
    console.log(date.calue)
    input.value = "";
    date.value = "";
    todoName.value = ""
}

const deletTask = (e) => {
    e.parentElement.parentElement.remove();
}
const editTask = (e) => {
    inputSectionHendle();
    
    const seletTask = e.parentElement.parentElement;

    inputName.value = seletTask.children[0].innerHTML;
    date.value = seletTask.children[1].textContent;;
    input.value = seletTask.children[2].innerHTML;


    e.parentElement.parentElement.remove();
}
