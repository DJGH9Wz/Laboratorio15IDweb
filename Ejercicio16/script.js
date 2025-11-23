const listaLis = document.getElementsByTagName('li');
const ul = document.querySelector('ul');
const boton = document.getElementById("btn1");

boton.addEventListener("click", () => {
    ultimoLi = listaLis[listaLis.length - 1];
    ul.prepend(ultimoLi);
    
});


