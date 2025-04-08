document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const addBtn = document.querySelector(".btn");
    const taskList = document.getElementById("taskList");
  
    // Add task on button click
    addBtn.addEventListener("click", addTask);
  
    // Add task on Enter key press
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addTask();
      }
    });
  
    function addTask() {
      const taskText = input.value.trim();
      if (taskText === "") return;
  
      const li = document.createElement("li");
  
      const taskSpan = document.createElement("span");
      taskSpan.className = "task-text";
      taskSpan.textContent = taskText;
  
      const buttonDiv = document.createElement("div");
      buttonDiv.className = "task-buttons";
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
  
      // Delete task
      deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
      });
  
      buttonDiv.appendChild(deleteBtn);
      li.appendChild(taskSpan);
      li.appendChild(buttonDiv);
      taskList.appendChild(li);
  
      input.value = "";
    }
  });
  