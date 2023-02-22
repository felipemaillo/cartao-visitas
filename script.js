function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-lm.png")
    img.setAttribute("alt", "Foto de Felipe Maillo com óculos escuros")
  } else {
    img.setAttribute("src", "./assets/avatar-dm.png")
    img.setAttribute("alt", "Foto de Felipe Maillo segurando guitarra")
  }
}

function changeLanguage(lang) {
  location.hash = lang
  location.reload()
}

var msgFooter1 = document.getElementById("span-footer")
var msgFooter2 = document.getElementById("msg-kind-device")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")

var language = {
  eng: {
    btn1: "Know my history",
    btn2: "My professional trajectory",
    btn3: "My Skills",
    btn4: "My Resume",
    msgFooter1: "Make with ♥ by Felipe Maillo",
    msgFooter2Web: "for WEB",
    msgFooter2Mobile: "for your mobile device",
  },

  ptbr: {
    btn1: "Conheça minha história",
    btn2: "Minha trajetória profissional",
    btn3: "Minhas Skills",
    btn4: "Meu Currículo",
    msgFooter1: "Feito com ♥ por Felipe Maillo",
    msgFooter2Web: "para WEB",
    msgFooter2Mobile: "para seu dispositivo móvel",
  },
}

if (window.location.hash) {
  if (window.location.hash == "#eng") {
    btn1.textContent = language.eng.btn1
    btn2.textContent = language.eng.btn2
    btn3.textContent = language.eng.btn3
    btn4.textContent = language.eng.btn4
    msgFooter1.textContent = language.eng.msgFooter1
    msgFooter2.textContent = changeMsgKindDevice(
      document.body.clientWidth,
      window.location.hash
    )
  } else if (window.location.hash == "#ptbr") {
    btn1.textContent = language.ptbr.btn1
    btn2.textContent = language.ptbr.btn2
    btn3.textContent = language.ptbr.btn3
    btn4.textContent = language.ptbr.btn4
    msgFooter1.textContent = language.ptbr.msgFooter1
    msgFooter2.textContent = changeMsgKindDevice(
      document.body.clientWidth,
      window.location.hash
    )
  }
}

function changeMsgKindDevice(screenWidth, lang) {
  if (screenWidth < 700) {
    if (lang == "#eng") {
      return language.eng.msgFooter2Mobile
    } else {
      return language.ptbr.msgFooter2Mobile
    }
  } else {
    if (lang == "#eng") {
      return language.eng.msgFooter2Web
    } else {
      return language.ptbr.msgFooter2Web
    }
  }
}

changeMsgKindDevice(document.body.clientWidth, window.location.hash)

document.body.onresize = function () {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  changeLanguage(window.location.hash)
  changeMsgKindDevice(screenWidth, window.location.hash)
}
