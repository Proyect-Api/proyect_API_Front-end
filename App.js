  //Conección para la API 
 
// fetch("http://localhost:5126/api/proyect_API")
//     .then(response => response.json())
//     .then(data => {
//         const main = document.querySelector('.main'); // Seleccionar el contenedor de las cartas
//         data.forEach(element => {
//             const card = document.createElement("div"); // Crear un nuevo div para la carta
//             card.classList.add("card"); // Agregar clase "card" al div
            
//             const notas = document.createElement("p");
//             notas.textContent = element.notas;
//             card.appendChild(notas);
//        
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
            
            // Crear el botón de detalles y su menú desplegable
            const btnDetails = document.createElement("div");
            btnDetails.classList.add("btn-details");
            const dropdownToggle = document.createElement("button");
            dropdownToggle.classList.add("btn", "btn-secondary", "btn-sm", "dropdown-toggle");
            dropdownToggle.type = "button";
            dropdownToggle.setAttribute("data-bs-toggle", "dropdown");
            // Agregar aquí el icono o favicon que desees
            btnDetails.appendChild(dropdownToggle); // Agregar el botón al div de detalles
            const dropdownMenu = document.createElement("ul");
            dropdownMenu.classList.add("dropdown-menu");
            const editarItem = document.createElement("li");
            const editarLink = document.createElement("a");
            editarLink.classList.add("dropdown-item");
            editarLink.href = "#";
            editarLink.textContent = "Editar";
            editarLink.onclick = function() {
                // Función para editar (puedes definirla)
                editar(element.id); // Suponiendo que tienes un ID en cada elemento
            };
            editarItem.appendChild(editarLink);
            dropdownMenu.appendChild(editarItem);
            const borrarItem = document.createElement("li");
            const borrarLink = document.createElement("a");
            borrarLink.classList.add("dropdown-item");
            borrarLink.href = "#";
            borrarLink.textContent = "Borrar";
            borrarLink.onclick = function() {
                // Función para borrar (puedes definirla)
                borrar(element.id); // Suponiendo que tienes un ID en cada elemento
            };
            borrarItem.appendChild(borrarLink);
            dropdownMenu.appendChild(borrarItem);
            btnDetails.appendChild(dropdownMenu); // Agregar el menú desplegable al div de detalles
            
            card.appendChild(btnDetails); // Agregar el div de detalles a la carta
            
            main.appendChild(card); // Agregar la carta al contenedor principal
        });
    });


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
        //});
    //});
    //////////Agregamos el crud //////////////////
    function Create(){

    }

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
