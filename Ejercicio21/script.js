const contenedor = document.getElementById('contenedor');

for(let i=0;i<3;i++){
    let nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = `Parrafo ${(i+1)}`;
    contenedor.appendChild(nuevoParrafo);
}

const parrafos = document.getElementsByTagName('p');
parrafos[1].remove();

