
const listaSecciones = document.querySelectorAll('section');
const boton = document.getElementById("btn1");

boton.addEventListener("click", () => {

    for(let i=0;i<=listaSecciones.length;i++){
        listaSecciones[i].setAttribute('data-index', (i+1));
    }

});

