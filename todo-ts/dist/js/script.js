document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.querySelector("#task-input");
    const registerBtn = document.querySelector("#register-btn");
    const taskContainer = document.querySelector("#task-container");
    registerBtn.addEventListener("click", function () {
        if (taskInput.value === "") {
            alert("cadastre uma task");
            return;
        }
        const taskWrapper = document.createElement("div");
        taskWrapper.classList.add("task-wrapper");
        const task = document.createElement("li");
        const removeBtn = document.createElement("button");
        task.textContent = taskInput.value;
        removeBtn.textContent = "Remover";
        taskInput.value = "";
        taskContainer.appendChild(taskWrapper);
        taskWrapper.appendChild(task);
        taskWrapper.appendChild(removeBtn);
        removeBtn.addEventListener("click", function () {
            taskWrapper.remove();
        });
    });
});
