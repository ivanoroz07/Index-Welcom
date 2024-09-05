const alertMensaje = document.getElementById("alertMensaje");

window.addEventListener("load", function(event) {
    if (this.localStorage.getItem("nombre")!=null){
        alertMensaje.innerHTML =`Hola, ${this.localStorage.getItem("nombre")}
         bienvenido de nuevo`;
    }//if nombre = !null
    alertMensaje.style.display = "block";
});