document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("¡Mensaje enviado con éxito!");
        this.reset();
    }
});