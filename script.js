function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // indicar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se o light mode estiver ON, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se o light mode estiver OFF, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  // indicar a tag alt
  const alt = document.querySelector("#profile img")

  // se o light mode estiver ON, adicionar alt light
  if (html.classList.contains("light")) {
    alt.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuros e jaqueta preta com fundo degradê roxo/azul."
    )
  } else {
    // se o light mode estiver OFF, adicionar alt normal
    alt.setAttribute("alt")
  }
}
