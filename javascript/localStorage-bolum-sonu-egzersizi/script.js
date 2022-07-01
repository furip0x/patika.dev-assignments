const container = document.querySelector(".container")
const counter = document.getElementById("counter")
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
let counterValue = localStorage.getItem("count")
  ? JSON.parse(localStorage.getItem("count"))
  : 0

counter.textContent = counterValue

increaseBtn.addEventListener("click", changeCountVal)
decreaseBtn.addEventListener("click", changeCountVal)

function changeCountVal(event) {
  this.id === "increase" ? counterValue++ : counterValue--
  localStorage.setItem("count", counterValue)
  counter.textContent = counterValue
}
