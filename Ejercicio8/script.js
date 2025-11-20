const colores = ["black", "green", "blue", "orange"];
const divs = document.querySelectorAll("div");

divs.forEach((div, i) => {
    div.style.backgroundColor = colores[i % colores.length];
});

