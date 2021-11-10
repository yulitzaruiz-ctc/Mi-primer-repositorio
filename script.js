function datos(){
    var nombres = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var fechanacimiento = document.getElementById("fecha-nacimiento").value;
    var f = document.getElementById("f").checked;
    var m = document.getElementById("m").checked;
    var estatura = document.getElementById("estatura").value;
    var peso = document.getElementById("peso").value;
    var deporte = document.getElementById("deporte").checked;

    var mensaje = "nombres:" + nombres
    + "\napellidos: " + apellidos
    + "\ncorreo electronico: " + email
    + "\Fecha de nacimiento: " + fechanacimiento
    + "\nEs mujer: " + f
    + "\nEs hombre: " + m
    + "\nPeso:" + peso + "kg"
    + "\nHace deporte: " + deporte;

    console.log(mensaje);

 
    var imc = peso / (estatura**2);
    var obesidad = imc >= 30;
    alert("IMC: " + imc + "\nes obeso: " + obesidad);

}
