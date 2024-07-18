document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button, input field, and the unordered list
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Get the value from the input field and trim any whitespace
        const taskText = taskInput.value.trim();

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
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);

        // Append the li element to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the add button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
