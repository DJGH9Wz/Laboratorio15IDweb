const parrafos = document.querySelectorAll('p');
const boton = document.getElementById("btn1");

boton.addEventListener("click", () => {
    parrafos[parrafos.length-1].remove();
});

