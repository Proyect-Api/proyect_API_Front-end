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
            main.appendChild(card); // Agregar la carta al contenedor principal
            //Agregamos el boton de crear para le crud
            let btondetalles = document.createElement("button"); //Agrgamos el boton editar que me sacara un modal, aún no se
            btondetalles.setAttribute("type", "button");//Agregamos el tipo boton
            btondetalles.classList.add("btn","btn-success","btn-sm","btn-detalles");
            btondetalles.setAttribute("data-bs-toggle","modal");//Agregamos el boton modal? /////
            btondetalles.setAttribute("data-bs-target", "#detalles-nota"); // Este es el id de mi boton detalles-nota
            btondetalles.innerText = "Detalles" // le agregamos el nombre detalles a mi bton
            card.appendChild(btondetalles);

            btondetalles.addEventListener("click",()=>{ //Agregamos la funcion al boton detalles - Aún no se si añadire sweet-alerts
                const modal_body = document.getElementById("modal-body");
                modal_body.innerHTML =`<h5>Nombre:${element.nombre}</h5>
                <p>Nota: ${element.notas}</p>
                <h6>Fecha de la nota:${element.enviado}</h6>
                <h6>ID :${element.id}`;
            })
            
            //  btondetalles.setAttribute("data-toggle", "modal");
            //  btondetalles.setAttribute("data-target", "#exampleModal");
            //  btondetalles.textContent = "Detalles";
            //  card.appendChild(btondetalles);
            

            ///////////Esta información me servira para los detalles de la carta////////

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
            
        });
    });

    function guardar(){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }


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
