
// SWEETALERT RESTAURANTES

function guardarRestaurante() {


    Swal.fire({
        title: "",
        text: "El restaurante se ha registrado con éxito.",
        icon: "success",
        confirmButtonColor: "#ffaf01",
        confirmButtonText: "Aceptar",
    });

}


function editarRestaurante() {


    Swal.fire({
        title: "",
        text: "El restaurante se ha actualizado con éxito.",
        icon: "success",
        confirmButtonColor: "#ffaf01",
        confirmButtonText: "Aceptar",
    });

}

function eliminarRestaurante() {
    Swal.fire({
        title: "",
        text: "¿Deseas eliminar este restaurante?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#ffaf01",
        cancelButtonColor: "#f17228",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "",
                text: "El cliente ha sido eliminado.",
                icon: "success",
                confirmButtonColor: "#ffaf01",
                confirmButtonText: "Aceptar",
            }
            );
        }
    });
}


// SWEETALERT RESTAURANTES