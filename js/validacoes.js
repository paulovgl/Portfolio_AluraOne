export function validar(input) {
  const tipoDoInput = input.dataset.input;
  const inputDiv = input.parentElement;
  const inputP = inputDiv.childNodes[inputDiv.childNodes.length - 2];

  if (tipoDoInput === "nome" || tipoDoInput === "assunto") {
    if (isEmptyOrBlank(input)) {
      errorMessage(
        "Este campo é obrigatório e não pode estar em branco ou vazio.",
        inputP
      );
      return false;
    } else if (isOverLength(input, tipoDoInput)) {
      errorMessage("Este campo deve ter no máximo 50 caracteres.", inputP);
      return false;
    } else {
      inputP.classList.remove("contato__inputErrorMessage--show");
      return true;
    }
  }

  if (tipoDoInput === "mensagem") {
    if (isEmptyOrBlank(input)) {
      errorMessage(
        "Este campo é obrigatório e não pode estar em branco ou vazio.",
        inputP
      );
      return false;
    } else if (isOverLength(input, tipoDoInput)) {
      errorMessage("Este campo deve ter no máximo 300 caracteres.", inputP);
      return false;
    } else {
      inputP.classList.remove("contato__inputErrorMessage--show");
      return true;
    }
  }

  if (tipoDoInput === "email") {
    if (isEmptyOrBlank(input)) {
      errorMessage(
        "Este campo é obrigatório e não pode estar em branco ou vazio.",
        inputP
      );
      return false;
    } else if (!isValidEmail(input)) {
      errorMessage("O e-mail inserido é inválido.", inputP);
      return false;
    } else {
      inputP.classList.remove("contato__inputErrorMessage--show");
      return true;
    }
  }
}

export function clearFields(input) {
  input.value = "";
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
  let boolean = false;

  if (tipoDoInput === "mensagem") {
    if (input.value.length > 300) {
      boolean = true;
    }
  } else {
    if (input.value.length > 50) {
      boolean = true;
    }
  }

  return boolean;
}

function isValidEmail(input) {
  const emailStructure = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

  if (input.value.match(emailStructure)) {
    return true;
  } else {
    return false;
  }
}

function errorMessage(text, p) {
  p.innerHTML = `${text}`;
  p.classList.add("contato__inputErrorMessage--show");
}
