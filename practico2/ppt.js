let puntosUsuario = 0; // Puntaje del jugador
let puntosPC = 0; // Puntaje de la computadora
let nombreUsuario = ""; // Almacena el nombre del usuario

// Selección de elementos del DOM
let instrucciones = document.querySelector("#instrucciones"); // Elemento con instrucciones del juego
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario"); // Elemento para mostrar puntaje del usuario
let contenedorPuntosPC = document.querySelector("#puntos-computadora"); // Elemento para mostrar puntaje de la computadora
let mensaje = document.querySelector("#mensaje"); // Elemento para mostrar mensajes durante el juego
let contenedorGanaPunto = document.querySelector("#gana-punto"); // Elemento para mostrar mensaje de ganar punto
let elegiTuArma = document.querySelector("#elegi-tu-arma"); // Contenedor para las opciones de armas

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario"); // Elemento para mostrar la elección del usuario
let contenedorEleccionPC = document.querySelector("#eleccion-computadora"); // Elemento para mostrar la elección de la computadora

let botonesArmas = document.querySelectorAll(".arma"); // Lista de botones de elección de armas

// Agregar eventos a los botones de armas
botonesArmas.forEach((boton) => {
  boton.addEventListener("click", function (e) {
    // Agregar clase para la animación de clic
    boton.classList.add("animacion-click");
    setTimeout(() => {
      boton.classList.remove("animacion-click");
    }, 300);
    iniciarTurno(e); // Llamar a la función para iniciar el turno
  });
});

// Solicitar el nombre al usuario
while (nombreUsuario === "") {
  nombreUsuario = prompt("Por favor, ingresa tu nombre:");
  if (nombreUsuario === null) {
    alert("Debe ingresar un nombre para jugar.");
    window.location.reload(); // Recargar la página para reiniciar
  }
}

// Función para iniciar un turno
function iniciarTurno(e) {
  let eleccionPC = Math.floor(Math.random() * 3);
  let eleccionUsuario = e.currentTarget.id;

  if (eleccionPC === 0) {
    eleccionPC = "piedra 🥌";
  } else if (eleccionPC === 1) {
    eleccionPC = "papel 📋";
  } else if (eleccionPC === 2) {
    eleccionPC = "tijera ✂️";
  }

  // Determinar ganador
  if (
    (eleccionUsuario === "piedra 🥌" && eleccionPC === "tijera ✂️") ||
    (eleccionUsuario === "tijera ✂️" && eleccionPC === "papel 📋") ||
    (eleccionUsuario === "papel 📋" && eleccionPC === "piedra 🥌")
  ) {
    ganaUsuario();
  } else if (
    (eleccionPC === "piedra 🥌" && eleccionUsuario === "tijera ✂️") ||
    (eleccionPC === "tijera ✂️" && eleccionUsuario === "papel 📋") ||
    (eleccionPC === "papel 📋" && eleccionUsuario === "piedra 🥌")
  ) {
    ganaPC();
  } else {
    empate();
  }

  // Mostrar resultados en el mensaje
  mensaje.classList.remove("disabled");
  contenedorEleccionUsuario.innerText = eleccionUsuario;
  contenedorEleccionPC.innerText = eleccionPC;

  // Finalizar el juego si alguien alcanza 3 puntos
  if (puntosUsuario === 3 || puntosPC === 3) {
    if (puntosUsuario === 3) {
      instrucciones.innerText = `${nombreUsuario}, ¡ganaste el juego! 🔥`;
    }
    if (puntosPC === 3) {
      instrucciones.innerText = "La computadora ganó el juego 😭";
    }
    elegiTuArma.classList.add("disabled");
    reiniciar.classList.remove("disabled");
    reiniciar.addEventListener("click", reiniciarJuego);
  }
}

// Funciones para gestionar el puntaje
function ganaUsuario() {
  puntosUsuario++;
  contenedorPuntosUsuario.innerText = puntosUsuario;
  contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥";
}

function ganaPC() {
  puntosPC++;
  contenedorPuntosPC.innerText = puntosPC;
  contenedorGanaPunto.innerText = "La computadora ganó un punto 😭";
}

function empate() {
  contenedorGanaPunto.innerText = "¡Empate! 😱";
}

// Función para reiniciar el juego
function reiniciarJuego() {
  reiniciar.classList.add("disabled");
  elegiTuArma.classList.remove("disabled");
  mensaje.classList.add("disabled");

  puntosUsuario = 0;
  puntosPC = 0;

  contenedorPuntosUsuario.innerText = puntosUsuario;
  contenedorPuntosPC.innerText = puntosPC;

  // Solicitar el nombre al usuario nuevamente
  nombreUsuario = "";
  while (nombreUsuario === "") {
    nombreUsuario = prompt("Por favor, ingresa tu nombre:");
    if (nombreUsuario === null) {
      alert("Debe ingresar un nombre para jugar.");
      window.location.reload();
    }
  }

  instrucciones.innerText = "El primero en llegar a 3 victorias gana!!!";
}

// Seleccionar el botón de reiniciar y agregar evento
let reiniciar = document.querySelector("#reiniciar");
