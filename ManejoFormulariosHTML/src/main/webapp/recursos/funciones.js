function validarForma(forma) {
    var usuario = forma.usuario;
    if (usuario.value == "" || usuario.value == "Escribir usuario") {
        alert("Debe ingresar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    
    var password = forma.password;
    if(password.value == "" || password.value.lenght < 3){
        alert("Debe ingresar un password con al menos de 3 caracteres");
        password.focus();
        password.select();
        return false;
    }
    
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    
    for(var i =0; i<tecnologias.length ; i++){
        if(tecnologias[i].checked){
            checkSeleccionado = true;
        }
    }
    
    if(!checkSeleccionado){
        alert("Debe seleccionar una tecnologia");
        return false;
    }
    
    var genero = forma.genero;
    var radioSeleccionado = false;
    for(var i =0 ; i<genero.length; i++){
        if(genero[i].checked){
            radioSeleccionado = true;
        }
    }
    
    if(!radioSeleccionado){
        alert("Debes seleccionar un genero");
        return false;
    }
    
    var ocupacion = forma.ocupacion;
    if(ocupacion.value == ""){
        alert("Debe seleccionar una ocupacion");
        return false;
    }
    
    //Formulario valido
    alert("Formulario valido, enviando datos al servidor");
    return true;
}
