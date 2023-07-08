// Array to store todo items
let todos = [];

// Function to render the todo list
function renderTodoList() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.innerHTML = `
      <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
      <div>
        <button class="btn btn-success btn-sm mr-2" onclick="markAsCompleted(${index})">Complete</button>
        <button class="btn btn-primary btn-sm mr-2" onclick="editTodoText(${index})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTodoItem(${index})">Delete</button>
      </div>
    `;
    todoList.appendChild(listItem);
  });
}

// Function to add a new todo item
function addTodoItem() {
  const todoInput = document.getElementById('todoInput');
  const todoText = todoInput.value.trim();

  if (todoText === '') {
    alert('Please enter a todo item.');
    return;
  }

  const newTodo = {
    text: todoText,
    completed: false
  };

  todos.push(newTodo);
  renderTodoList();

  todoInput.value = '';
}

// Function to mark a todo item as completed
function markAsCompleted(index) {
  todos[index].completed = !todos[index].completed;
  renderTodoList();
}

// Function to edit the text of a todo item
function editTodoText(index) {
  const newText = prompt('Enter the new text for the todo item:', todos[index].text);

  if (newText !== null) {
    todos[index].text = newText.trim();
    renderTodoList();
  }
}

// Function to delete a todo item
function deleteTodoItem(index) {
  todos.splice(index, 1);
  renderTodoList();
}

// Event listener for add todo button click
document.getElementById('addTodoBtn').addEventListener('click', addTodoItem);
