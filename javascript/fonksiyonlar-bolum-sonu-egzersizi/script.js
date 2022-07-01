const container = document.querySelector(".container")
const counter = document.getElementById("counter")
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
let count = 0

/* EVENT BUBBLING YÖNTEMİ */

container.addEventListener("click", (event) => {
  if (event.target.closest("button")) {
    event.target.id === "increase" ? count++ : count--
    counter.textContent = count
  }
})

/*
TEK FUNCTION İLE YAPILAN YÖNTEM

increaseBtn.addEventListener("click", changeCountVal)
decreaseBtn.addEventListener("click", changeCountVal)

function changeCountVal(event) {
  this.id === "increase" ? count++ : count--
  counter.textContent = count
}
*/

/*
BUTONLARA AYRI EVENT VERİLEREK YAPILAN YÖNTEM

increaseBtn.addEventListener("click", () => {
  count++
  counter.textContent = count
})

decreaseBtn.addEventListener("click", () => {
  count--
  counter.textContent = count
})
 */
