document.addEventListener("DOMContentLoaded", function(event) {

    // 1
    const todos = [
        new Todo('wynieść śmieci'),
        new Todo('nakarmić psa'),
        new Todo('pojechać na zakupy')
    ];

    // 2
    TodoRenderer.renderList(todos);

});