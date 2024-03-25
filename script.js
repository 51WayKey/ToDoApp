const inputTextBox = document.getElementById("input-textbox")
const tasklist = document.getElementById("tasklist")
const tasks = JSON.parse(localStorage.getItem('tasks'))



function addTask() {
    const textTask = inputTextBox.value.trim()

    if (!textTask) {
        alert("Veuillez rentrer une tâche")
    }

    const task = { text : textTask }
    tasks.push(task)

    localStorage.setItem("tasks", JSON.stringify(tasks))

    inputTextBox.value === "";

}

function deleteTask (index) {
    tasks.splice(index, 1)

    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function editTask (index) {

    const taskEdit = prompt("Edit the task: ", tasks[index].text)

    if(taskEdit !== null) {
        tasks[index].text == taskEdit;
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

}

function affichage() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li")
        li.innerHTML = `
        <span>${task.text}</span>
        <button class="edit-button" onclick="editTask(${index})">Modifier</button>
        <button class="delete-button" onclick="deleteTast(${index})">Supprimer</button>
        
        `;

        taskList.appendChild(li)
    })
        
    };



