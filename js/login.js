//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function verificar(usuario, clave){

    let credencial = {}; //Objeto que va a guardar el usuario
    if (usuario.trim()==="") {
            dato.className= "isInvalid"
            alert("El campo usuario está vacío");
        } else if (clave.trim()===""){
        alert("Ingrese su clave")
        }else{
            location.href = "categories.html";
            credencial.nombre = usuario;
            credencial.estado = "conectado";
            credencial.clave = clave;

            localStorage.setItem("usuario",JSON.stringify(credencial)); //Guarda el objeto en el localstorage convertida a string
            sessionStorage.setItem("usuario",JSON.stringify(credencial));

        }
}


function desconectar(){
    localStorage.clear();
    location.href="index.html";

}