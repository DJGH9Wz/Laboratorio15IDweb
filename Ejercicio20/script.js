
const nuevoUL = document.createElement('ul');
for(let i=0;i<10;i++){
    let nuevoli = document.createElement('li');
    let nuevospan = document.createElement('span');
    nuevospan.textContent = 'Nivel Interno';
    nuevoli.appendChild(nuevospan);
    nuevoUL.appendChild(nuevoli);
}

document.body.appendChild(nuevoUL);

