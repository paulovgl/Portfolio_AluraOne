export function validar(input) {
  const tipoDoInput = input.dataset.input;

  if (isEmptyOrBlank(input)) {
    return console.log(
      "Este campo é obrigatório e não pode estar em branco ou vazio."
    );
  } else if (
    tipoDoInput === "nome" ||
    tipoDoInput === "assunto" ||
    tipoDoInput === "mensagem"
  ) {
    !isOverLength(input, tipoDoInput)
      ? console.log("Passou")
      : console.log("Ficou");
  } else if (tipoDoInput === "email") {
    isValidEmail(input) ? console.log("Passou_2") : console.log("Ficou_2");
  }
}

// Funções Internas

function isEmptyOrBlank(input) {
  const blankSpace = new RegExp(/^[ \t]+$/);

  if (input.value === "" || input.value.match(blankSpace)) {
    return true;
  } else {
    return false;
  }
}

function isOverLength(input, tipoDoInput) {
  const maxLength = new RegExp(/^.{3,50}$/);
  const maxLengthTextArea = new RegExp(/^.{3,300}$/);
  switch (tipoDoInput) {
    case "mensagem":
      if (input.value.match(maxLengthTextArea)) {
        return false;
      } else {
        return true;
      }

    default:
      if (input.value.match(maxLength)) {
        return false;
      } else {
        return true;
      }
  }
}

function isValidEmail(input) {
  const emailStructure = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

  if (input.value.match(emailStructure)) {
    return true;
  } else {
    return false;
  }
}
