const listaDiv = document.querySelectorAll('div');
const section = document.querySelector('section');
const boton = document.getElementById("btn1");

boton.addEventListener("click", () => {

    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = `En el HTML hay ${listaDiv.length} div's`;
    section.appendChild(nuevoParrafo);

});
