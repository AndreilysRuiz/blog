//Cambiar la imagen del blog 
let miImage = document.querySelector('img');
miImage.onclick = function(){
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'Imagenes/mozilla.png'){
        miImage.setAttribute('src','Imagenes/codecode.jpg')
    }else{
        miImage.setAttribute('src','Imagenes/mozilla.png')
    }
}

//Creando las variables para el evento del boton
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

//Funcion para cambiar el nombre del usuario
function establecerNombreUsuario(){
    let miNombre = prompt('Por favor, ingresa tu nombre');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es Genial ' + miNombre;
    if(!miNombre){
        establecerNombreUsuario();
    }
    else{
        let nombreAlmacenado = localStorage.getItem('nombre');
        miTitulo.textContent = 'Mozilla es genial ' + nombreAlmacenado;
    }
    
}
miBoton.onclick = function(){
    establecerNombreUsuario();
}
