const alertMensaje = document.getElementById("alertMensaje");
const btnEliminar = document.getElementById("btnEliminar");

window.addEventListener("load", function(event){
    if(this.localStorage.getItem("nombre")!=null){
        alertMensaje.innerHTML = `Hola <strong>${this.localStorage.getItem("nombre")}</strong>, 
        bienvenid@ de nuevo`
    }//if nombre 
    alertMensaje.style.display="block";
})

btnEliminar.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("nombre");
    location.href= "welcome.html"
    //history.go(0), actualiza la pagina
})