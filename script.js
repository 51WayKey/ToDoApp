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

    localStorage.setItem(...)

    inputTextBox.value === "";
    
}
