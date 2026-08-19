const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");

// Get tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// Display tasks on the page
function displayTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    tasks.forEach((task) => {

        const listItem = document.createElement("li");
        listItem.classList.add("task-item");

        const taskLeft = document.createElement("div");
        taskLeft.classList.add("task-left");

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        // Task title
        const taskTitle = document.createElement("span");
        taskTitle.textContent = task.title;
        taskTitle.classList.add("task-title");

        if (task.completed) {
            taskTitle.classList.add("completed");
        }

        // Update task when checkbox changes
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;

            saveTasks();
            displayTasks();
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", () => {
            deleteTask(task.id);
        });

        taskLeft.appendChild(checkbox);
        taskLeft.appendChild(taskTitle);

        listItem.appendChild(taskLeft);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
    });
}


// Add a new task
taskForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const title = taskInput.value.trim();

    if (title === "") {
        return;
    }

    const newTask = {
        id: Date.now(),
        title: title,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    displayTasks();

    taskInput.value = "";
});


// Delete a task
function deleteTask(id) {

    tasks = tasks.filter((task) => task.id !== id);

    saveTasks();

    displayTasks();
}


// Display saved tasks when page loads
displayTasks();