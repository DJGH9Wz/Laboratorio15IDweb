const primeraImagen = document.querySelector('img');
const boton = document.getElementById('btn1')

boton.addEventListener('click', () =>{
    primeraImagen.src = 'Castillo-expresidente.avif';
    primeraImagen.alt = 'Castillo preso';
});

