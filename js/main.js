const btnGuardar = document.getElementById("btnGuardar");
const txtNombre = document.getElementById("txtNombre");
const alertValidaciones = document.getElementById("alertValidaciones");


btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
        alertValidaciones.innerHTML="";
        alertValidaciones.style.display="none";//none sirve para que desaparezca
        
    if(txtNombre.value.length<3){
        alertValidaciones.innerHTML="Existe un error";
        alertValidaciones.style.display="block";
        return false;
        }// if length <3

        localStorage.setItem("nombre", txtNombre.value);
    }) //btnAgregar.addEventListener
