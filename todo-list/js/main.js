// Get references to elements
const personalInput = document.getElementById('personal-input');
const addPersonalBtn = document.getElementById('add-personal-btn');
const personalTodoList = document.getElementById('personal-todo-list');

const businessInput = document.getElementById('business-input');
const addBusinessBtn = document.getElementById('add-business-btn');
const businessTodoList = document.getElementById('business-todo-list');

// Function to create a todo item
function createTodoItem(task, isBusiness = false) {
  // Create the list item
  const li = document.createElement('li');
  li.classList.add('todo-item');

  // Create the task text
  const taskText = document.createTextNode(task);
  li.appendChild(taskText);

  // Create a delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  li.appendChild(deleteButton);

  // Event to mark task as completed
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Event to delete the task
  deleteButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent triggering 'completed' event
    li.remove();
  });

  // Append the task to the appropriate list (Personal or Business)
  if (isBusiness) {
    businessTodoList.appendChild(li);
  } else {
    personalTodoList.appendChild(li);
  }
}

// Event listener for adding Personal task
addPersonalBtn.addEventListener('click', () => {
  const task = personalInput.value.trim();
  if (task) {
    createTodoItem(task);
    personalInput.value = ''; // Clear the input
  } else {
    alert("Please enter a personal task.");
  }
});

// Event listener for adding Business task
addBusinessBtn.addEventListener('click', () => {
  const task = businessInput.value.trim();
  if (task) {
    createTodoItem(task, true);
    businessInput.value = ''; // Clear the input
  } else {
    alert("Please enter a business task.");
  }
});

// Allow pressing 'Enter' to add task
personalInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addPersonalBtn.click();
  }
});

businessInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addBusinessBtn.click();
  }
});
