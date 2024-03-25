const inputTextBox = document.getElementById("input-textbox")
const addButton = document.getElementById("tasklist")
const tasks = JSON.parse(localStorage.getItem('tasks'))



function addTask() {
    const textTask = inputTextBox.value

    if (!textTask) {
        alert("Veuillez rentrer une tâche")
    }else {
        let li = document.createElement("li")
        li.innerHTML = textTask
        addButton.appendChild(li)
    }

    const task = { text : textTask }
    tasks.push(task)

    localStorage.setItem("tasks", JSON.stringify(tasks))

    inputTextBox.value === "";

}

function deleteTask (taskD) {
    tasks.splice(taskD, 1)

    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function editTask (taskE) {

    const taskEdit = prompt("Edit the task: ", tasks[index].text)

    if(taskEdit !== null) {
        tasks[taskE].text == taskEdit;
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

}


