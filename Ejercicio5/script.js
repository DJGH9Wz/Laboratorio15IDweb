const primeraImagen = document.querySelector('img');
const boton = document.getElementById('btn1')

boton.addEventListener('click', (e) =>{
    primeraImagen.src = 'https://imagenes.elpais.com/resizer/v2/https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fprisa%2FNWTHO27KSWPFZBBBNZFQLNMBTM.jpg?auth=e8cd468a6ce9181125c8dfd21c25914ece0894672eea606f63cc1bcc727e91a8&width=1200&height=675&smart=true';
    primeraImagen.alt = 'Castillo preso';
});

