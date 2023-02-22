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
function changeMsgKindDevice(screenWidth) {
  if (screenWidth < 700) {
    msg.innerHTML = "para seu dispositivo mobile"
  } else {
    msg.innerHTML = "para a WEB"
  }
}

const msg = document.getElementById("msg-kind-device")

changeMsgKindDevice(document.body.clientWidth)

document.body.onresize = function () {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  changeMsgKindDevice(screenWidth)
}
