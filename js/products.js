//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    let promise = fetch("https://japdevdep.github.io/ecommerce-api/product/all.json", [options])
    //url a la que se envía el pedido
    //en options se colocan parámetros opcionales: método HHTP, encabezados, etc.



    let response = await fetch("https://japdevdep.github.io/ecommerce-api/product/all.json"); //Aquí va la url desde donde toma los datos

    if (response.ok) { //si el código de estado HTTP está entre 200-299
        //obtener el cuerpo de la respuesta (el método explicado debajo)
        let json = await response.json();
    } else {
        alert("HTTP-Error: " + response.status);
    }
});