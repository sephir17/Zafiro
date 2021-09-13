<a href="index.html" onclick="signOut();">Desconectarse</a>

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("Usuario desconectado");
      location.reload();
    });

  }

//Función de deslogueo de Google