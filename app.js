// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const addBtn = document.getElementById("botonAgregar");
const resultado = document.getElementById("resultado");
const elegirBtn = document.getElementById("sortearAmigo");
const ul = document.getElementById("ingresoAmigos");
const texto = document.getElementById("amigo");
let arrayNombres = [];

/*CREANDO FUNCION PARA GUARDAR LO QUE SE ESCRIBE A UN ARRAY Y MUESTRE 
UNO A UNO LOS NOMBRES INGRESADOS*/

function añadirUsuarioArray() {
  if (texto.value === "") {
    alert("Por favor, ingrese un nombre");
    return;
  }
  arrayNombres.push(texto.value);
  console.log(arrayNombres);

  const li = document.createElement("li");
  li.textContent = texto.value;
  ul.appendChild(li);
  texto.value = "";
}

function escorgerAmigo() {
  let amigo = arrayNombres[Math.floor(Math.random() * arrayNombres.length)];
  console.log(amigo);
  const liresultado = document.createElement("li");
  liresultado.textContent = `su amigo secreto es ${amigo}`;
  resultado.appendChild(liresultado);
 
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  añadirUsuarioArray();
});

elegirBtn.addEventListener("click", (e) => {
  e.preventDefault();
  escorgerAmigo();
});
