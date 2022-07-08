const taskInput = document.getElementById("task")
const addBtn = document.getElementById("liveToastBtn")
const list = document.getElementById("list")

const getTodoList = () => {
  return localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : []
}

const newElement = () => {
  if (taskInput.value.trim().length !== 0) {
    createTodo()
    showTodos()
    $("#liveToast.success").toast("show")
    taskInput.value = ""
  } else {
    $("#liveToast.error").toast("show")
  }
}

list.addEventListener("click", (e) => {
  const target = e.target
  if (target.classList.contains("delete-item")) {
    const todoID = target.parentElement.getAttribute("data-id")
    deleteTodo(todoID)
    showTodos()
  }
  if (e.target.tagName === "LI" || e.target.tagName === "SPAN") {
    const todoID = target.closest("li").getAttribute("data-id")
    checkTodo(todoID)
    showTodos()
  }
})

const createTodo = () => {
  const todoID = new Date().getTime().toString()
  const todoText = taskInput.value
  const todoItem = { id: todoID, text: todoText, checked: false }
  let newList = getTodoList()
  newList.push(todoItem)
  localStorage.setItem("todo", JSON.stringify(newList))
}

const deleteTodo = (id) => {
  const newList = getTodoList().filter((todo) => todo.id !== id)
  localStorage.setItem("todo", JSON.stringify(newList))
}

const checkTodo = (id) => {
  const newList = getTodoList().map((todo) => {
    if (todo.id === id) {
      return { ...todo, checked: !todo.checked }
    }
    return todo
  })
  localStorage.setItem("todo", JSON.stringify(newList))
}

const showTodos = () => {
  const todosHTML = getTodoList()
    .map((todo) => {
      return `<li data-id=${todo.id} class="${
        todo.checked && "checked"
      } todo-item d-flex justify-content-between align-items-center">
                      <span class="text-truncate">${todo.text}</span>
                      <button type="button" class="delete-item btn btn-outline-danger border-0 font-weight-bold">&times;</button>
                    </li>`
    })
    .join("")
  list.innerHTML = todosHTML
}

showTodos()
