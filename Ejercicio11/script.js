const section = document.querySelector('section');

const nuevoUL = document.createElement('ul');
for(let i = 1; i<6 ; i++){
    const nuevoli = document.createElement('li');
    nuevoli.textContent = `Elemento ${i}`;
    nuevoUL.appendChild(nuevoli);
}

section.appendChild(nuevoUL);
