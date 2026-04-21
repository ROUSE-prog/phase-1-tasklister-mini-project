document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const input = document.querySelector('#new-task-description');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;
    buildToDo(task);

    form.reset(); // optional but good practice
  });

  function buildToDo(task) {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  }
});