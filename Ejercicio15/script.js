const main = document.querySelector('main');
const articulo = document.querySelector('article');
const boton = document.getElementById("btn1");
const articuloClonado = articulo.cloneNode(true);

boton.addEventListener("click", () => {
    main.appendChild(articuloClonado);
});


