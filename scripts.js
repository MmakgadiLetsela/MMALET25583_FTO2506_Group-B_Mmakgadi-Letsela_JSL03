
// Create a tasks array that has 5 task objects

const tasks = [];

function createTask(id) {
  const taskTitle = prompt(`Enter task ${id} title:`);
  const taskDescription = prompt(`Enter task ${id} description:`);

  let taskStatus = prompt(`Enter task ${id} status (todo, doing, done):`).toLowerCase();
  while (!["todo", "doing", "done"].includes(taskStatus)) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    taskStatus = prompt(`Enter task ${id} status (todo, doing, done):`).toLowerCase();
  }

  return { id, taskTitle, taskDescription, taskStatus };
}

// Add a maximum of 5 tasks
for (let id = 1; id <= 5; id++) {
  if (tasks.length = 5) {
    alert("There are enough tasks on your board, please check them in the console.");
    break;
  }
  tasks.push(createTask(id));
}
console.log (tasks).label = "All Tasks";












