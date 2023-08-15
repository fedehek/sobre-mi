const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const sumarButton = document.getElementById("sumar");
const restarButton = document.getElementById("restar");
const multiplicarButton = document.getElementById("multiplicar");
const dividirButton = document.getElementById("dividir");
const borrarButton = document.getElementById("borrar");
const calcularButton = document.getElementById("calcular");
const resultInput = document.getElementById("result");

let operador = "";

// eventos
sumarButton.addEventListener("click", () => setOperator("+"));
restarButton.addEventListener("click", () => setOperator("-"));
multiplicarButton.addEventListener("click", () => setOperator("*"));
dividirButton.addEventListener("click", () => setOperator("/"));
borrarButton.addEventListener("click", clearInputs);
calcularButton.addEventListener("click", calculateResult);

function setOperator(operator) {
  operador = operator;
}

// funcion borrar
function clearInputs() {
  num1Input.value = "";
  num2Input.value = "";
  operador = "";
  resultInput.value = "";
}

// funcion que realiza el calculo y errores
function calculateResult() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2) || operador === "" || num2 === 0) {
    resultInput.value = "Error";
    return;
  }

  let result;

  switch (operador) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Error";
  }

  resultInput.value = result;
}
