// Access input field
const input = document.querySelector('#todo-input');

// Listening to click event from "Add" button.
document.querySelector('#submit').addEventListener('click', () => {
    // Get input value and trim spaces
    const inputData = input.value.trim();

    // Prevent adding empty task
    if (inputData === "") {
        alert("Task cannot be empty!");
        return;
    }

    input.value = ""; // Clear input after adding

    // Create todo item element
    const todo_el = document.createElement('div');
    todo_el.classList.add('todo-item');

    const todo_content_el = document.createElement('div');
    todo_el.appendChild(todo_content_el);

    const todo_input_el = document.createElement('input');
    todo_input_el.classList.add('text');
    todo_input_el.type = 'text';
    todo_input_el.value = inputData;
    todo_input_el.setAttribute('readonly', 'readonly');

    todo_content_el.appendChild(todo_input_el);

    const todo_actions_el = document.createElement('div');
    todo_actions_el.classList.add('action-items');

    const todo_done_el = document.createElement('i');
    todo_done_el.classList.add('fa-solid', 'fa-check');

    const todo_edit_el = document.createElement('i');
    todo_edit_el.classList.add('fa-solid', 'fa-pen-to-square', 'edit');

    const todo_delete_el = document.createElement('i');
    todo_delete_el.classList.add('fa-solid', 'fa-trash');

    todo_actions_el.appendChild(todo_done_el);
    todo_actions_el.appendChild(todo_edit_el);
    todo_actions_el.appendChild(todo_delete_el);

    todo_el.appendChild(todo_actions_el);

    // Add the todo-item to list
    document.querySelector('.todo-lists').appendChild(todo_el);

    // Done functionality
    todo_done_el.addEventListener('click', () => {
      todo_input_el.classList.add('done'); 
      todo_done_el.remove(); 
      todo_edit_el.remove(); 
  });

    // Edit functionality with empty check & proper toggle
    todo_edit_el.addEventListener('click', () => {
        if (todo_edit_el.classList.contains("edit")) {
            // Switch to save mode
            todo_edit_el.classList.replace("fa-pen-to-square", "fa-save");
            todo_edit_el.classList.replace("edit", "save");
            todo_input_el.removeAttribute("readonly");
            todo_input_el.focus();
        } else {
            // Prevent saving an empty task
            const editedValue = todo_input_el.value.trim();
            if (editedValue === "") {
                alert("Task cannot be empty!");
                todo_input_el.focus();
                return;
            }
            // Switch back to edit mode
            todo_edit_el.classList.replace("fa-save", "fa-pen-to-square");
            todo_edit_el.classList.replace("save", "edit");
            todo_input_el.setAttribute("readonly", "readonly");
        }
    });

    // Delete functionality
    todo_delete_el.addEventListener('click', () => {
        document.querySelector('.todo-lists').removeChild(todo_el);
    });
});
