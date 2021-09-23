document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm(e.target.new_task_description.value, e.target.due_date.value);
  
      form.reset()
    });
});

//submit form
function submitForm(todo, date) {
  let li = document.createElement("li");
  let p = document.createElement("p")
  let btn = document.createElement("button");
  
  btn.addEventListener("click", deleteTask)

  li.innerText = `${todo} `;
  p.innerText = `due by ${date}`
  li.appendChild(p)
  btn.innerText = "x";
  li.appendChild(btn);
  document.querySelector("#tasks").appendChild(li);
}

//delete form
function deleteTask(e) {
  e.target.parentNode.remove();
}

