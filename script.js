const input = document.querySelector('#todoInput');
const searchInput = document.querySelector('#searchInput');
const todoList = document.querySelector('#todoList');
const todoForm = document.querySelector('#todoForm');
const todoCount = document.querySelector('#todoCount');




todoForm.addEventListener('submit', function (e) {
    
    // console.log("Form submitted");
    // console.log(input.value);


    e.preventDefault();
    if (input.value.trim() === "") {
        return;
    }

    // Todo parent div
    const todo = document.createElement("div");

    // Todo text span tag 
    const todoText = document.createElement("span");;
    todoText.textContent = input.value;


    // todoteext append krna 
    todo.appendChild(todoText);

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // delete button ko append kra todo me 
    todo.appendChild(deleteBtn);

    // pura todo wala part list me add kra
    console.log(todo);
    todoList.appendChild(todo);

    // Count update 
    // console.log(todoList.childElementCount);
    todoCount.textContent = `${todoList.children.length} items`

    // delete button functionailty 
    deleteBtn.addEventListener('click', function () {
        console.log("Delete clicked");
        todo.remove();
        todoCount.textContent = `${todoList.children.length} items`
    })


    input.value = "";

})



searchInput.addEventListener('input', function () {

    // console.log(searchInput.value);
    const searchText = searchInput.value.toLowerCase();
    console.log(searchText);
    for (const todo of todoList.children) {

        const todoName = todo.querySelector("span");

        // true or false case store krne ke liye.
        const isMatch = todoName.textContent.toLowerCase().includes(searchText);

        if (isMatch) {
            todo.style.display = "";
        } else {
            todo.style.display = "none";
        }


        // console.log(isMatch);
        // console.log(todoName.textContent);
        // console.log(searchText);
        
        // console.log(todo.textContent);

    }
    
});