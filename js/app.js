const container = document.getElementById("container");
console.log(typeof container);
console.log(container);
console.log(container.className);
console.log(container.innerHTML);

const titulo = document.getElementById("titulo");
console.log(titulo);
console.log(typeof titulo);
console.log(titulo.innerHTML);
console.log(titulo.innerText);

//! get
const fruta = document.getElementsByClassName("fruta");
console.log(typeof fruta);
console.log(fruta[0]);

const verdura = document.getElementsByClassName("verdura");
console.log(verdura);
console.log(verdura[1].innerText);

//! querySelector()
// permite seleccionar el primer elemento que cumpla ese criterio

const ingrediente = document.querySelector(".ingrediente");
console.log(ingrediente);

const ingreVerdura = document.querySelector(".ingrediente.verdura");
console.log(ingreVerdura);
console.log(typeof ingreVerdura);

const ingreFruta = document.querySelector("ul li.fruta");
console.log(ingreFruta);

//! querySelectorAll()
// permite seleccionar todos los elementos que cumplan ese criterio

const listaVerduras = document.querySelectorAll(".verdura");
console.log(listaVerduras.length);
console.log(listaVerduras[1].innerText);

//! trabajar con estilos en js

const primerIngrediente = document.querySelector(".ingrediente");
console.log(primerIngrediente); //mozarella
console.log(primerIngrediente.innerHTML);
primerIngrediente.style.backgroundColor = "yellow";

//Ejercicio
const ingrecabra = document.getElementById("cabra");
ingrecabra.style.backgroundColor = "black";

const ingrePimientos = document.getElementById("pimientos");
ingrePimientos.style.backgroundColor = "purple";

const ingreAceitunas = document.getElementById("aceitunas");
ingreAceitunas.style.backgroundColor = "blue";
ingreAceitunas.style.textTransform = "uppercase";

document.getElementById("pina").style.backgroundColor = "grey";

//! Trabajar con el texto

console.log(titulo);

//formas de recuperar un texto
console.log(titulo.innerText);
console.log(titulo.innerHTML);
console.log(titulo.textContent);

titulo.innerText = "Lista pizza";

//! Modificar atributos

const anchor = document.querySelector("a");
console.log(anchor);
console.log(anchor.getAttribute("href"));
anchor.setAttribute("href", "https://developer.mozilla.org/en-US/");
anchor.setAttribute("class", "enlace"); // crea clase nueva que puede, por ejemplo, responder en CSS. ver .enlace

//! Modificar clases

console.log(listaVerduras);
const queso = document.querySelector(".queso");
console.log(queso);
console.log(queso.classList); // devuelve todas las clases que tiene el elemento
queso.classList.add("nuevo");
console.log(queso.classList);

console.log(queso.classList.contains("nuevo")); //comprobación
console.log(queso.classList.contains("verdura"));

if (queso.classList.contains("nuevo")) {
  queso.classList.add("texto-rojo");
  queso.classList.remove("nuevo");
}

//! Crear elementos

//Nuevo ingrediente
const nuevoIngrediente = document.createElement("li");
nuevoIngrediente.setAttribute("id", "gorgonzola");
nuevoIngrediente.classList.add("ingrediente", "queso");
console.log(nuevoIngrediente);
nuevoIngrediente.innerText = "Gorgonzola";

//añadir a contenedor
const listaIngredientes = document.getElementById("lista-ingredientes");

listaIngredientes.appendChild(nuevoIngrediente);

//Eliminar ingrediente
listaIngredientes.removeChild(nuevoIngrediente);

//Event listener
function colorHexRandom() {
  const valores = "0123456789ABCDEF";
  let colorA = "#";
  for (i = 0; i < 6; i++) {
    colorA += valores[Math.floor(Math.random() * valores.length)];
  }
  return colorA;
}
console.log(colorHexRandom());

const mozarella = document.getElementById("mozarella");
console.log(mozarella.innerText);

function ingredienteRandom() {
  const valores = [
    "Mozarella",
    "Pimiento",
    "Aceituna",
    "Piña",
    "Gorgonzola",
    "Jamón",
  ];
  let ingred = "";
  for (i = 0; i < 1; i++) {
    ingred = valores[Math.floor(Math.random() * valores.length)];
  }
  return ingred;
}
console.log(ingredienteRandom());

mozarella.addEventListener("click", () => {
  mozarella.style.backgroundColor = colorHexRandom();
  mozarella.style.color = "black";
  mozarella.innerHTML = ingredienteRandom();
});
