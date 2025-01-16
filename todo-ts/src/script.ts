document.addEventListener("DOMContentLoaded", function (): void {
  const taskInput: HTMLInputElement = document.querySelector("#task-input");

  const registerBtn: HTMLButtonElement =
    document.querySelector("#register-btn");

  const taskContainer: HTMLUListElement =
    document.querySelector("#task-container");

  registerBtn.addEventListener("click", function (): void {
    if (taskInput.value === "") {
      alert("cadastre uma task");
      return;
    }

    const taskWrapper: HTMLDivElement = document.createElement("div");
    taskWrapper.classList.add("task-wrapper");

    const task: HTMLLIElement = document.createElement("li");
    const removeBtn: HTMLButtonElement = document.createElement("button");

    task.textContent = taskInput.value;
    removeBtn.textContent = "Remover";

    taskInput.value = "";

    taskContainer.appendChild(taskWrapper);
    taskWrapper.appendChild(task);
    taskWrapper.appendChild(removeBtn);

    removeBtn.addEventListener("click", function (): void {
      taskWrapper.remove();
    });
  });
});
