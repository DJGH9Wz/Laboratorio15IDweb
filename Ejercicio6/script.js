const listados = document.getElementsByTagName("li");
const ocultos = document.querySelectorAll(".oculto");
const boton = document.getElementById("btn1");

boton.addEventListener("click", (e) => {
  for (let li of ocultos) {
    li.classList.remove("oculto");
  }
  for (let li of listados) {
    li.classList.add("resaltado");
  }
});

