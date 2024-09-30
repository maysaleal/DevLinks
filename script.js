function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")

    // texto novo quando estiver no modo light
    img.setAttribute("alt", "Foto de dois personagem de novel chinesa")
  } else {
    // ser tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")

    // texto quando estiver no modo normal
    img.setAttribute("alt", "Foto de personagem de novel chinesa")
  }




}