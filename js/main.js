import { validar, clearFields } from "./validacoes.js";

const inputs = document.querySelectorAll("[data-input]");
const enviarEmail = document.querySelector("[data-button]");

enviarEmail.addEventListener("click", (e) => {
  e.preventDefault();

  let nome = false;
  let email = false;
  let assunto = false;
  let mensagem = false;

  inputs.forEach((input) => {
    const tipoDoInput = input.dataset.input;

    switch (tipoDoInput) {
      case "nome":
        nome = validar(input);
        break;
      case "email":
        email = validar(input);
        break;
      case "assunto":
        assunto = validar(input);
        break;
      case "mensagem":
        mensagem = validar(input);
        break;
      default:
        break;
    }
  });

  if (
    nome === true &&
    email === true &&
    assunto === true &&
    mensagem === true
  ) {
    inputs.forEach((input) => {
      clearFields(input);
    });
    alert("Enviado com Sucesso");
  }
});
