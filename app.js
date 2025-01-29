// declaracion de variables globales
let amigos = []; //entrada
let sorteados= []; //salida

function agregarAmigo(){
//ingresa nombre a la lista de participantes
    let ingresaNombre = document.getElementById('amigo');
    let nombre = ingresaNombre.value;

    //valida que el campo no este vacio
    if(nombre===""){
        alert("Por favor, ingresa un nombre válido.");
    }else{ //si no esta vacio, agrega el nombre a la lista
        amigos.push(nombre);
        //actualiza la lista visible en HTML
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = ''; //limpia la lista antes de actualizar
        for(let i=0; i<amigos.length; i++){
             lista.innerHTML +=`<col>${amigos[i]}, </col> `;
        }
        //limpia campo de texo
        ingresaNombre.value = "";
        }
    
}

function sortearAmigo(){
//filtra los amigos que no han sido sorteados
    let nombreDisponible = amigos.filter((nombre) => !sorteados.includes(nombre));
//valida que haya al menos un amigo disponible para sortear
    if(nombreDisponible.length===0){
        alert("No hay amigos disponible para sortear.");
    }else{
    //Selecciona a un amigo aleatoriamente de los nombres disponilbe
        let indiceAleatorio = Math.floor(Math.random()*nombreDisponible.length);
        let amigoSorteado = nombreDisponible[indiceAleatorio];

        //Agrega el amigo sorteado al arreglo de sorteados
        sorteados.push(amigoSorteado);

        //mostrar el amigo sorteado en la pagina
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<col>¡Felicidades!tu amigo secreto es: ${amigoSorteado}</col>`;
    }
}