var TodoRenderer = (function(renderer) {
 

  3
  4
  5
  6
  7
  8
  9
  10
  11
  12
  13
  14
  15
  16
  17
  18
  19
  20
  21
  22
  23
  24
  25
  26
  27
  28
  29
  30
  31
  32
  33
  34
  35
  36
  37
  38
  39
  var TodoRenderer = (function (renderer) {
   
      var _listRoot = null;
   
      // public
      renderer.renderList = function (todos) {
          _initializeRoot();
   
          for (var i = 0; i < todos.length; i++) {
              _createTodoItem(todos[i]);
          }
      };
   
      // private
      function _initializeRoot() {
          if (!_listRoot) {
              _listRoot = document.querySelector('#todo-list-root');
          } else {
              _clearItems();
          }
      }
   
      function _clearItems() {
          while (_listRoot.firstChild) {
              _listRoot.removeChild(_listRoot.firstChild);
          }
      }
   
      function _createTodoItem(todo) {
          _listRoot.innerHTML += _createTodoFromTemplate(todo);
      }
   
      function _createTodoFromTemplate(todo) {
          return '<p>' + todo.description + '</p>'
      }
})(TodoRenderer || {});