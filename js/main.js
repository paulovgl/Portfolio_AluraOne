import { validar } from "./validacoes.js";

const inputs = document.querySelectorAll("[data-input]");

inputs.forEach(input => {
    input.addEventListener("blur", e => {
        validar(e.target);
    })
});
