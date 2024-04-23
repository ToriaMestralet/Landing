$(document).ready(() => {
  console.log("JQuery Cargado");


  $(".atras").click(() => {
    volverAtras();
  });

  const enviarBoton = document.getElementById("enviar");
  enviarBoton.addEventListener("click", (e) => {
    e.preventDefault();
    abrirFeedback();
    trasladarDatosDelFormCompletoAFeedback();
  })
});


function abrirFeedback() {
  const formularioDiv = document.getElementById("form-inicial");
  const feedbackDiv = document.getElementById("feedback");

  formularioDiv.style.display = "none";
  feedbackDiv.style.display = "block";
}

function trasladarDatosDelFormCompletoAFeedback() {
  const inputNombre = $("#nombre");

  const nombre = inputNombre.val();

  const spanNombre = $("#dato-nombre");

  spanNombre.html(nombre);
}

function volverAtras() {
  const formularioDiv = document.getElementById("form-inicial");
  const feedbackDiv = document.getElementById("feedback");

  feedbackDiv.style.display = "none";
  formularioDiv.style.display = "block";

  $("#nombre").val("");
}
