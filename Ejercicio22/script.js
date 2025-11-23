const seccion = document.querySelector('section');

let nuevoTitulo = document.createElement('h2');
nuevoTitulo.textContent = `Titulo nuevo`;
seccion.appendChild(nuevoTitulo);

let nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = `Descripcion generada`;
seccion.appendChild(nuevoParrafo);

const nuevoUL = document.createElement('ul');
for(let i=0;i<3;i++){
    let nuevoli = document.createElement('li');
    nuevoli.textContent = 'Nuevo elemento de lista';
    nuevoUL.appendChild(nuevoli);
}

seccion.appendChild(nuevoUL);

const tituloh2 = document.querySelector('h2');
tituloh2.remove();

