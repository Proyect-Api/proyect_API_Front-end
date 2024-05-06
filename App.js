// // // //Conección para la API 
// Conección para la API 
fetch("http://localhost:5221/api/Notas")
    .then(response => response.json())
    .then(data => {
        const main = document.querySelector('main'); // Seleccionar el contenedor de las cartas
        data.forEach(element => {
            const card = document.createElement("div"); // Crear un nuevo div para la carta
            card.classList.add("card"); // Agregar clase "card" al div
            const contenedor = document.createElement("div");
            contenedor.classList.add("contenedor"); //Este contenedor es para los botones
            card.appendChild(contenedor);

            // Agregar texto de notas a la carta
            const notas = document.createElement("p");
            notas.textContent = element.notas;
            card.appendChild(notas);
            main.appendChild(card); // Agregar la carta al contenedor principal

            // Botón de detalles para el CRUD
            const btondetalles = document.createElement("button");
            btondetalles.setAttribute("type", "button");
            btondetalles.classList.add("btn", "btn-success", "btn-sm", "btn-detalles");
            btondetalles.setAttribute("data-bs-toggle", "modal");
            btondetalles.setAttribute("data-bs-target", "#detalles-nota");
            btondetalles.innerText = "Detalles";
            contenedor.appendChild(btondetalles); //Agregamos el boton a masDetalles

            

            // Evento clic para mostrar detalles
            btondetalles.addEventListener("click", () => {
                const modal_body = document.getElementById("modal-body");
                modal_body.innerHTML = `<h5>Nombre: ${element.nombre}</h5>
                <h6>Apellidos: ${element.apellidos}</h6>
                <h6>Titulo: ${element.titulo}</h6>
                <p><strong>Nota</strong>: ${element.notas}</p>
                <h6>Fecha de la nota: ${element.date}</h6>
                <h6>ID: ${element.id}</h6>
                <h6>Correo: ${element.correo}</h6>`;
            });

            // Botón de eliminar
            const btoneliminar = document.createElement("button");
            btoneliminar.setAttribute("type", "button");
            btoneliminar.classList.add("btn", "btn-danger", "btn-sm", "btn-eliminar");
            btoneliminar.textContent = "Eliminar";
            contenedor.appendChild(btoneliminar); //Agregamos eliminar a contenedrocito

            // Función para eliminar
            function eliminar() {
                Swal.fire({
                    title: "¿Estás seguro?",
                    text: "No podrás revertir esto.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sí, eliminarlo"
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(`http://localhost:5221/api/Notas/${element.id}`, {
                            method: "DELETE",
                            headers: {
                                "Content-type": "application/json"
                            },
                        }).then(response => {
                            if (response.ok) {
                                Swal.fire({
                                    title: "¡Eliminado!",
                                    text: "Tu archivo ha sido eliminado.",
                                    icon: "success"
                                });
                            } else {
                                Swal.fire({
                                    title: "Error",
                                    text: "Ha ocurrido un error al intentar eliminar el archivo.",
                                    icon: "error"
                                });
                            }
                        });
                    }
                });
            }

            // Evento clic para eliminar
            btoneliminar.addEventListener("click", () => {
                eliminar();
            });

            // Botón de editar
            const btoneditar = document.createElement("button");
            btoneditar.setAttribute("type", "button");
            btoneditar.classList.add("btn", "btn-info", "btn-sm", "btoneditar");
            btoneditar.setAttribute("data-bs-toggle", "modal");
            btoneditar.setAttribute("data-bs-target", "#exampleModal");
            btoneditar.textContent = "Editar";
            contenedor.appendChild(btoneditar); //Agregamos edita a contenedor

            // Evento clic para editar
            btoneditar.addEventListener("click", () => {
                // Establecer los valores en el modal
                const Nombre = document.getElementById("nombre").value;
                const tituloNota = document.getElementById("titulonota").value;
                const Nota = document.getElementById("nota").value;
            });
        });
    });

// Función para guardar en la base de datos
function guardar(Nombre, tituloNota, Nota) {
    const datos = {
        nombre: Nombre,
        titulo: tituloNota,
        nota: Nota
    };
    // Hacemos el envío a la db
    fetch("http://localhost:5221/api/Notas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(datos);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    })
    .catch(error => {
        console.error("Error:", error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
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