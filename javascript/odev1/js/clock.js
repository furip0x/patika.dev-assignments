const myName = document.getElementById("myName")
const myNameText = prompt("Adınız nedir?")

myName.textContent = myNameText || "İsimsiz"

function showTime() {
  const clockText = document.getElementById("myClock")
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ]

  setInterval(() => {
    const newDate = new Date()
    const hours = newDate.getHours()
    const minutes = String(newDate.getMinutes()).padStart(2, "0")
    const seconds = String(newDate.getSeconds()).padStart(2, "0")
    const day = days[newDate.getDay()]

    clockText.textContent = `${hours}:${minutes}:${seconds} ${day}`
  }, 1000)
}
