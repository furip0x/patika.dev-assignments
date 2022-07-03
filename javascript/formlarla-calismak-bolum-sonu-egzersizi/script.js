// FORMLARLA CALISMAK: Bolum Sonu Egzersizi

/*
1: Formu Sec
2: Input Bilgisini UL icerisine Ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar
*/

const body = document.querySelector("body")
const userForm = document.getElementById("userForm")
const username = document.getElementById("username")
const score = document.getElementById("score")

userForm.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
  e.preventDefault()

  if (username.value && score.value) {
    createList(username.value, score.value)
    showAlert("Başarılı!", "success")
    userForm.reset()
  } else {
    showAlert("Hatalı giriş. Lütfen formu boş bırakmayınız.", "danger")
  }
}

const showAlert = (text, type) => {
  const alert = document.createElement("div")
  alert.classList.add(
    "alert",
    `alert-${type}`,
    "alert-dismissible",
    "fade",
    "show"
  )
  alert.textContent = `${text}`

  const alertCloseBtn = document.createElement("button")
  alertCloseBtn.classList.add("btn-close")
  alertCloseBtn.setAttribute("data-bs-dismiss", "alert")
  alert.appendChild(alertCloseBtn)

  body.prepend(alert)
}

const createList = (name, score) => {
  const list = document.createElement("li")
  list.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-start"
  )

  const listTitle = document.createElement("div")
  listTitle.classList.add("ms-2", "me-auto")
  listTitle.textContent = name
  list.appendChild(listTitle)

  const listBadge = document.createElement("span")
  listBadge.classList.add("badge", "bg-primary", "rounded-pill")
  listBadge.textContent = score
  list.appendChild(listBadge)

  userList.append(list)
}
