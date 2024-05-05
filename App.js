// //Conección para la API 

// fetch("http://localhost:5221/api/Notas")
//     .then(response => response.json())
//     .then(data => {
//         const main = document.querySelector('.main'); // Seleccionar el contenedor de las cartas
//         data.forEach(element => {
//             const card = document.createElement("div"); // Crear un nuevo div para la carta
//             card.classList.add("card"); // Agregar clase "card" al div

//             const notas = document.createElement("p");
//             notas.textContent = element.notas;
//             card.appendChild(notas);
//             main.appendChild(card); // Agregar la carta al contenedor principal
//             //Agregamos el boton de crear para le crud
//             let btondetalles = document.createElement("button"); //Agrgamos el boton editar que me sacara un modal, aún no se
//             btondetalles.setAttribute("type", "button");//Agregamos el tipo boton
//             btondetalles.classList.add("btn", "btn-success", "btn-sm", "btn-detalles");
//             btondetalles.setAttribute("data-bs-toggle", "modal");//Agregamos el boton modal? /////
//             btondetalles.setAttribute("data-bs-target", "#detalles-nota"); // Este es el id de mi boton detalles-nota
//             btondetalles.innerText = "Detalles" // le agregamos el nombre detalles a mi bton
//             card.appendChild(btondetalles);

//             btondetalles.addEventListener("click", () => { //Agregamos la funcion al boton detalles - Aún no se si añadire sweet-alerts
//                 const modal_body = document.getElementById("modal-body");
//                 modal_body.innerHTML = `<h5>Nombre:${element.nombre}</h5>
//                 <h6>Apellidos: ${element.apellidos}</h6>
//                 <p><strong>Nota</strong>: ${element.notas}</p>
//                 <h6>Fecha de la nota:${element.enviado}</h6>
//                 <h6>ID :${element.id}
//                 <h6>Correo: ${element.correo}</h6>`;
//             })

//             //Agregamos el boton de eliminar
//             const btoneliminar = document.createElement("button");
//             btoneliminar.setAttribute("type", "button");
//             btoneliminar.classList.add("btn", "btn-danger", "btn-sm", "btn-eliminar");
//             btoneliminar.textContent = "Eliminar";
//             card.appendChild(btoneliminar);

//             btoneliminar.addEventListener("eliminar", () => {
//                 const info = (eliminar.parentElement).parentElement;
//                 const id = info.children[0];
//                 const FetchDelete = fetch(`http://localhost:5221/api/Notas${element.id})`, {
//                     method: "DELETE",
//                     headers: {
//                         "Content-type": "application/json"
//                     },
//                 })
//                     .then(alert("alert"));
//             }
//         {
//         });
//     });

// function guardar() {
//     Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Your work has been saved",
//         showConfirmButton: false,
//         timer: 1500
//     });
// }
// function eliminar() {
//     Swal.fire({
//         title: "Estas seguro?",
//         text: "no podras revertir esto!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success"
//             });
//         }
//     });
// }
// function alert() {
//     Swal.fire({
//         position: "top-center",
//         icon: "success",
//         title: "Se a eliminado con exito",
//         showConfirmButton: false,
//         timer: 1500
//     });
// }


// // Función para cambiar el tema
// function cambiarTema() {
//     let theme = document.getElementById("cambiotema").value;
//     let body = document.getElementById("tema");
//     if (theme == 1) {
//         body.classList.add("theme-light");
//         body.classList.remove("theme-dark");
//     } else if (theme == 2) {
//         body.classList.add("theme-dark");
//         body.classList.remove("theme-light");
//     }
// }
//Conección para la API 
fetch("http://localhost:5221/api/Notas")
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
            
            // Agregamos el boton de crear para el CRUD
            let btondetalles = document.createElement("button");
            btondetalles.setAttribute("type", "button");
            btondetalles.classList.add("btn", "btn-success", "btn-sm", "btn-detalles");
            btondetalles.setAttribute("data-bs-toggle", "modal");
            btondetalles.setAttribute("data-bs-target", "#detalles-nota");
            btondetalles.innerText = "Detalles";
            card.appendChild(btondetalles);

            btondetalles.addEventListener("click", () => { //Agregamos la funcion al boton detalles - Aún no se si añadire sweet-alerts
                const modal_body = document.getElementById("modal-body");
                modal_body.innerHTML = `<h5>Nombre:${element.nombre}</h5>
                <h6>Apellidos: ${element.apellidos}</h6>
                <p><strong>Nota</strong>: ${element.notas}</p>
                <h6>Fecha de la nota:${element.enviado}</h6>
                <h6>ID :${element.id}
                <h6>Correo: ${element.correo}</h6>`;
            });

            // Agregamos el boton de eliminar
            const btoneliminar = document.createElement("button");
            btoneliminar.setAttribute("type", "button");
            btoneliminar.classList.add("btn", "btn-danger", "btn-sm", "btn-eliminar");
            btoneliminar.textContent = "Eliminar";
            card.appendChild(btoneliminar);

            btoneliminar.addEventListener("eliminar", () => {
                const info = (eliminar.parentElement).parentElement;
                const id = info.children[0];
                const FetchDelete= fetch(`http://localhost:5221/api/Notas${id})`, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json"
                    },
                }).then(alert("alert"));
            });
        });
    });

function guardar() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
}

function eliminar() {
    Swal.fire({
        title: "Estas seguro?",
        text: "no podras revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}

function alert() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se a eliminado con exito",
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
