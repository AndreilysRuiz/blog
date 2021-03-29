//JavaScript Basico



const miTitulo = document.querySelector('h1');
miTitulo.textContent = 'Hola Mundo !';

//Declaracion de variables

varibale1 = 'Andreilys';

let variable2 = 'Nicolas';


//Condicionales

let helado = 'Vainilla';
if(helado === 'chocolate'){
    alert('Si, es mi favorito');
}else{
    alert('Pero mi favorito es el de chocolate');
}

//Funciones 

let parrafo = document.querySelector('p');
parrafo.textContent = 'Esto es un parrafo a traves de JavaScript';

function multiplica(num1,num2){
    let resultado = num1 * num2;
    return resultado;
}

//Eventos 

//Forma corta del evento
document.querySelector('html').onclick = function(){
    console.log('Deja de Pincharme');
}

//Forma larga 
let miHTML = document.querySelector('html');
miHTML.onclick = function(){};


