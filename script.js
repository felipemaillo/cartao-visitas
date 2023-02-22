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
