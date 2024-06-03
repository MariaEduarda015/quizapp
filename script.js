let tema = "claro";

const botaotema = document.querySelector(".tema button");
botaotema.addEventListener("click", trocarTema);

function trocarTema() {
    if (localStorage.getItem("tema")) {
        tema = localStorage.getItem("tema");
    }

    const body = document.querySelector("body");

    if (tema === "claro") {
        body.classList.add("escuro");
        localStorage.setItem("tema", "escuro");
        tema = "escuro"; // Atualiza a variável tema
    } else {
        body.classList.remove("escuro");
        localStorage.setItem("tema", "claro");
        tema = "claro"; // Atualiza a variável tema
    }
}