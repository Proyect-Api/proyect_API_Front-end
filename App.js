  //Conección para la API 
 
fetch("http://localhost:5126/api/proyect_API")
    .then(response => response.json())
    .then(data => {
        const main = document.querySelector('.main'); // Seleccionar el contenedor de las cartas
        data.forEach(element => {
            const card = document.createElement("div"); // Crear un nuevo div para la carta
            card.classList.add("card"); // Agregar clase "card" al div
            
            const notas = document.createElement("p");
            notas.textContent = element.notas;
            card.appendChild(notas);
            // Crear y agregar contenido a la carta
            // const nombre = document.createElement("h2");
            // nombre.textContent = "Nombre: " + element.nombre;
            // card.appendChild(nombre);

            // const apellidos = document.createElement("p");
            // apellidos.textContent = "Apellidos: " + element.apellidos;
            // card.appendChild(apellidos);

            // const correo = document.createElement("p");
            // correo.textContent = "Correo: " + element.correo;
            // card.appendChild(correo);


            // const enviado = document.createElement("p");
            // enviado.textContent = "Enviado: " + element.enviado;
            // card.appendChild(enviado);
            
            main.appendChild(card); // Agregar la carta al contenedor principal
        });
    });

// Función para cambiar el tema
function cambiarTema() {
    let theme = document.getElementById("cambiotema").value;
    let body = document.getElementById("tema");
    if (theme == 1) {
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
    } else if (theme == 2) {
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
    }
}
