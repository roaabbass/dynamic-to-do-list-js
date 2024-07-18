document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button, input field, and the unordered list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Define the addTask function
    function addTask(taskText, save = true) {
        // Check if taskText is provided, if not get it from input field
        if (taskText === undefined) {
            taskText = taskInput.value.trim();
        }

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item');

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
            removeTaskFromLocalStorage(taskText);
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);

        // Append the li element to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Save the task to Local Storage
        if (save) {
            saveTaskToLocalStorage(taskText);
        }
    }

    // Function to save task to Local Storage
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Add event listener to the add button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    loadTasks();
});
