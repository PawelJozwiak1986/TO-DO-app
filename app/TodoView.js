
document.addEventListener("DOMContentLoaded", function(event) {
 
    const addTodoInput = document.querySelector('#todo-input'),
    addTodoBtn = document.querySelector('#add-todo-btn');

        
    addTodoBtn.addEventListener('click', function (event) {
        const inputValue = addTodoInput.value;
        alert(inputValue);
    });
 
});