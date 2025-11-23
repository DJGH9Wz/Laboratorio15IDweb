const contenedor = document.querySelector('div');
const listaParrafos = contenedor.querySelectorAll('p');
const listaNueva = Array.from(listaParrafos);
const boton = document.getElementById("btn1");

boton.addEventListener("click", () => {
    listaNueva.sort((a, b) => {
    const textoa = a.textContent.trim().toLowerCase();
    const textob = b.textContent.trim().toLowerCase();
        return textoa.localeCompare(textob);
    });
    
    listaNueva.forEach(p => contenedor.appendChild(p));
});

