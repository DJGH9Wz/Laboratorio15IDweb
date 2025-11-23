const parrafo = document.querySelector("p");
const boton = document.getElementById("btn1");

boton.addEventListener("click", () => {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.textContent = 'Parrafo reemplazado';
    parrafo.replaceWith(nuevoDiv);
});

