let credencial=JSON.parse(localStorage.getItem("usuario")); //Levanta del localstorage el usuario
if (credencial.estado=="conectado"){ //Si está conectado
    location.href="categories.html"; //Deriva a la página de categorías
}