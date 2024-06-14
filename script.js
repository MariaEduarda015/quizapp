import { trocarTema, verificarTema } from "./helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
  trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)



