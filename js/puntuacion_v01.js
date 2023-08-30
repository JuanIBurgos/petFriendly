let contador=5;

function calificar(item){
    console.log(item);
    // capturo el id de la estrella que hice el clic
    contador =item.id[0];// captura el primer digito del nombre del id.
    // console.log(contador);
    let nombre = item.id.substring(1); // me captura todo menos el primer caracter 'estrella'
    for (let i=0;i<5;i++){
        if(i<contador){
            document.getElementById((i+1)+nombre).style.color="gold";
        }else {
            document.getElementById((i+1)+nombre).style.color="black";
        }

    }
}
function publlicar(event){
    event.preventDefault();
    const newComentarioText = document.getElementById('idComentario').value;
    //creo el elemento en el html
    const newComentario = document.createElement('div');
    const id= new Date().getTime();
    newComentario.id = id;
    
    //Genero las estrellas en el comentario 
    let aux="";
    for(let i=0;i<5;i++){
        if(i<contador){
            aux=aux+'<i class="bi bi-star-fill cambiarColor"></i> ';
        }else{
            aux=aux+'<i class="bi bi-star"></i> ';
        }
    }
    
    // Inserto el comentario 
    newComentario.innerHTML=`
    <p>${aux} <br>${newComentarioText}</p> 
   <button class="btn btn-danger d-block ms-auto" onclick="eliminarComentario(${id})">Eliminar</button>
    `;
    // ADOPTO CLASES PARA DONDE VA A MOSTRAR
    newComentario.classList.add('titulos','fondo','my-3','container');

    //Busco al padre
    const contentComentario = document.querySelector('.contenedorComentario');

    // Adopta al hijo
    contentComentario.appendChild(newComentario);
    
    //Reseteo el form
    document.querySelector('form').reset();
    
    // let fecha=new Date();
    // fecha = fecha.toDateString();
    //armo el arreglo donde se almacena el nuevo comentario (id,idProduct,contador,newComentarioText)
    // let comentarioNuevo = new Comentarios(id,'2',contador,newComentarioText,fecha);
    // coments.push(comentarioNuevo);
}

// console.log(coments);
// Para elimnar el comentario
function eliminarComentario(id){
    // OJO debo recibir el id correspondiente
    const comentarioDelete = document.getElementById(id);
    comentarioDelete.remove();
}