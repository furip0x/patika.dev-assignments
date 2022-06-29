// Koşullarla çalışmak bölüm sonu egzersizi

/*

1- prompt ile aldığın bilgiye göre aşağıdaki yapıyı kullanarak notun bilgisini #info'ya yazdır.
  AA 90-100
  BA 85-89
  BB 80-84
  CB 75-79
  CC 70-74
  DD 60-64
  FD 50-59
  FF 0-49

2- kullanıcının girdiği verinin istediğimiz aralıkta olup olmadığını kontrol et
3- ff bilgisinde üzgün surat ikonu çıkart, diğerlerinde ise gülücük olsun.
4- ff class bilgisi text-danger, diğerlerinin ise text-primary olsun.

*/

const info = document.getElementById("info")
let score = prompt("Puan gir...")
let grade
let success = true

if (score >= 90) {
  grade = "AA"
} else if (score >= 85) {
  grade = "BA"
} else if (score >= 80) {
  grade = "BB"
} else if (score >= 75) {
  grade = "CB"
} else if (score >= 70) {
  grade = "CC"
} else if (score >= 60) {
  grade = "DD"
} else if (score >= 50) {
  grade = "FD"
} else if (score <= 49) {
  grade = "BA"
  success = false
} else {
  grade = "Lütfen geçerli bir değer giriniz."
  success = false
}

info.innerHTML = `<p>${score} puan aldın.</p> ${
  success
    ? `<p class="text-primary">${grade} ( ͡❛ ͜ʖ ͡❛)</p>`
    : `<p class="text-danger">${grade} ಠ╭╮ಠ</p>`
}`
