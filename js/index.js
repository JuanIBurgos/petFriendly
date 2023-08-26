// Este archivo es el js de la página principal
const padreContainer = document.querySelector('.tarjetas');//seccion de tarjetas
const formularioEliminaProducto = document.getElementById('eliminarID');//input donde va el id que quiero borrar

class product {
  constructor(name, productId, descrip, imagen) {
    this.name = name;
    this.productId = productId;
    this.descrip = descrip;
    this.imagen = imagen;
  }
}
let products = [
  new product(
    "Perfume",
    1,
    "Perfume para perros y gatos de diferentes aromas ",
    "https://d2r9epyceweg5n.cloudfront.net/stores/019/016/products/fragancias_700x700_web-289ba3a45ea6ae146615121891583076-1024-1024.jpg"
  ),
  new product(
    "Casita",
    2,
    "Casita acolchada, tamaño mediano",
    "https://m.media-amazon.com/images/I/61X0xow97BL._AC_UF1000,1000_QL80_.jpg"
  ),
  new product(
    "Vestimenta",
    3,
    "Vestí a tu mascota de tu equipo favorito",
    "https://http2.mlstatic.com/D_NQ_NP_709670-MLA47632048493_092021-O.webp"
  ),
  new product(
    "Transportador",
    4,
    "Transportador para gatos, tamaño mediano",
    "https://cnnespanol.cnn.com/wp-content/uploads/2022/01/sherpa-transportadora.jpg?quality=100&strip=info"
  ),
  new product(
    "Shampoo",
    5,
    "Shampoo para lavado en seco para perros y gatos ",
    "https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/1876/01-1612902135-63212a6517e37.jpeg"
  ),
  new product(
    "Castillo",
    6,
    "Castillo interactivo para gatos, altura 1m",
    "https://mascosas.cl/storage/Products/ZXawRsmeDHLvumunRqNDMba7l994Tn3rz4ecoSpY.webp"
  ),
  new product(
    "Vestimenta",
    7,
    "Buzo para perros y gatos tamaño mediano - grande",
    "https://m.media-amazon.com/images/I/51ifktulRiL.jpg"
  ),
  new product(
    "Transportador",
    8,
    "Transportador para perros y gatos, tamaño grande",
    "https://naturallife.vtexassets.com/arquivos/ids/163368/13318.jpg?v=1778598075"
  ),
];

let agregarProducto = (event) => {
  event.preventDefault();
  const ProductName = document.getElementById("product").value;
  const productId = document.getElementById("productId").value;
  const productDescrip = document.getElementById("descripcion").value;
  const productImg = document.getElementById("img").value;
  const newProduct = new product(
    ProductName,
    productId,
    productDescrip,
    productImg
  );
  products.push(newProduct); //agrega el producto al array
  actualizarLista(products);//actualiza las tarjetas
};
//! eliminar productos 
function eliminarTarjeta(event) {
  event.preventDefault();
  const idProductoEliminado = parseInt(formularioEliminaProducto.value);//guarda el ID ingresado en una variable
  products.splice(idProductoEliminado - 1, 1);//en base a esa variable saca un elemento del array
  actualizarLista(products)//actualizas la lista

}
// //!actualiza
function actualizarLista(arrayProductos) {

  padreContainer.innerHTML = ""; //limpia el contenedor 

  arrayProductos.forEach( //cada vez que se actualiza la lista el programa vacia la seccion y crea todas las tarjetas otra vez
    product => {
      const newProductCard = document.createElement('div')
      newProductCard.id = product.productId;
      newProductCard.classList.add('card', 'm-2');
      newProductCard.style.width = '18rem';
      newProductCard.innerHTML = `<img src=${product.imagen} class="card-img-top imagenProducto" alt="...">
         <div class="card-body">
         <h5 class="card-title"> ${product.name} </h5>
         <p class="card-text"> ${product.descrip} </p>
         <a href="#" class="btn btn-success form-control"> Ver mas </a>
         </div>`
      padreContainer.appendChild(newProductCard);
    }
  );
}

actualizarLista(products);//cada vez que se recargue la pagina se actualice la lista (solo con el array original de 4 productos)





