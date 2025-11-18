document.getElementById("form-contacto").addEventListener("submit", function(event) {
            event.preventDefault();

            const data = {
                nombre: document.getElementById("nombre").value,
                email: document.getElementById("email").value,
                telefono: document.getElementById("telefono").value,
                mensaje: document.getElementById("mensaje").value
            };

            console.log(data);

            alert("Formulario enviado correctamente (ver consola).");
        });