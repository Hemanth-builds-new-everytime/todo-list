const input = document.querySelector('#todoInput');
const searchInput = document.querySelector('#searchInput');
const todoList = document.querySelector('#todoList');
const todoForm = document.querySelector('#todoForm');
const todoCount = document.querySelector('#todoCount');


// Todo count update
function updateTodoCount() {
    todoCount.textContent = `${todoList.children.length} items`;
}

// Search ke according todos show/hide krne kaa part
function filterTodos() {
    const searchText = searchInput.value.toLowerCase();

    for (const todo of todoList.children) {

        const todoText = todo.querySelector('span').textContent.toLowerCase();
        const isMatch = todoText.includes(searchText);
        todo.style.display = isMatch ? '' : 'none';
    }
}


// New todo add karna
todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const todoValue = input.value.trim();
    if (todoValue === '') {
        return;
    }

    // Todo parent div
    const todo = document.createElement('div');

    // Todo text
    const todoText = document.createElement('span');
    todoText.textContent = todoValue;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    // Dono elements ko todo me add krne ke liye
    todo.appendChild(todoText);
    todo.appendChild(deleteBtn);

    // Todo ko list me add kiya
    todoList.appendChild(todo);

    // Delete functionality
    deleteBtn.addEventListener('click', function () {
        todo.remove();
        updateTodoCount();
    });

    input.value = '';

    updateTodoCount();
    filterTodos();
});


// Search functionality
searchInput.addEventListener('input', filterTodos);
