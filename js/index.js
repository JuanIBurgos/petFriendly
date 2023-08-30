// Este archivo es el js de la página principal
const padreContainer = document.querySelector(".tarjetas"); //seccion de tarjetas
const formularioEliminaProducto = document.getElementById("eliminarID"); //input donde va el id que quiero borrar

// //!actualiza
function actualizarLista(arrayProductos) {
  padreContainer.innerHTML = ""; //limpia el contenedor

  arrayProductos.forEach(
    //cada vez que se actualiza la lista el programa vacia la seccion y crea todas las tarjetas otra vez
    (product) => {
      const newProductCard = document.createElement("div");
      newProductCard.id = product.productId;
      newProductCard.classList.add("card", "m-2");
      newProductCard.style.width = "18rem";
      newProductCard.innerHTML = `<img src=${product.imagen} class="card-img-top imagenProducto" alt="...">
         <div class="card-body">
         <h5 class="card-title"> ${product.name} </h5>
         <p class="card-text"> ${product.descrip} </p>
         <button class="btn btn-success form-control my-2" onclick="redireccionsTarjeta(${product.productId})">Ver mas </button>
         <button class="btn btn-success form-control" onclick="sumarACarrito(${product.productId})">Agregar a carrito </button>
         </div>`;
      padreContainer.appendChild(newProductCard);
    }
  );
}

actualizarLista(leerProductos()); //cada vez que se recargue la pagina se actualice la lista (solo con el array original de 8 productos)






