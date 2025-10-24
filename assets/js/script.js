document.addEventListener("DOMContentLoaded", function () {
  const addTaskBtn = document.querySelector(".add-task-btn");
  const taskInput = document.getElementById("task");
  const taskList = document.getElementById("task-list");
  const taskTemplate = document.querySelector(".task-item.template");

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") { 
      const taskItem = taskTemplate.cloneNode(true);
      taskItem.classList.remove("template");
      taskItem.style.display = "flex";

      taskItem.querySelector(".task-text").textContent = taskText;
 
      const completeBtn = taskItem.querySelector(".complete-btn");
      completeBtn.addEventListener("click", () => {
        taskItem.querySelector(".task-text").classList.toggle("completed");
        completeBtn.classList.toggle("toggled");   
      });
 
      taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        taskItem.remove();
      });
 
      taskList.appendChild(taskItem);

   
      taskInput.value = "";
    }
  });
});