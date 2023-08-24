// Este archivo es el js de la página principal

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
    "higuiene01",
    "Perfume para perros y gatos de diferentes aromas ",
    "https://d2r9epyceweg5n.cloudfront.net/stores/019/016/products/fragancias_700x700_web-289ba3a45ea6ae146615121891583076-1024-1024.jpg"
  ),
  new product(
    "Casita",
    "cucha01",
    "Casita acolchada, tamaño mediano",
    "https://m.media-amazon.com/images/I/61X0xow97BL._AC_UF1000,1000_QL80_.jpg"
  ),
  new product(
    "Vestimenta",
    "ropa01",
    "Vestí a tu mascota de tu equipo favorito",
    "https://http2.mlstatic.com/D_NQ_NP_709670-MLA47632048493_092021-O.webp"
  ),
  new product(
    "Transportador",
    "transportador01",
    "Transportador para gatos, tamaño mediano",
    "https://cnnespanol.cnn.com/wp-content/uploads/2022/01/sherpa-transportadora.jpg?quality=100&strip=info"
  ),
  new product(
    "Shampoo",
    "higuiene02",
    "Shampoo para lavado en seco para perros y gatos ",
    "https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/1876/01-1612902135-63212a6517e37.jpeg"
  ),
  new product(
    "Castillo",
    "cucha02",
    "Castillo interactivo para gatos, altura 1m",
    "https://mascosas.cl/storage/Products/ZXawRsmeDHLvumunRqNDMba7l994Tn3rz4ecoSpY.webp"
  ),
  new product(
    "Vestimenta",
    "ropa02",
    "Buzo para perros y gatos tamaño mediano - grande",
    "https://m.media-amazon.com/images/I/51ifktulRiL.jpg"
  ),
  new product(
    "Transportador",
    "transportador02",
    "Transportador para perros y gatos, tamaño grande",
    "https://naturallife.vtexassets.com/arquivos/ids/163368/13318.jpg?v=1778598075"
  ),
];

let agregarProducto = (event) => {
  event.preventDefault();
  console.log("hola funcion");
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
  products.push(newProduct);
  mostrarProducto(newProduct); //muestra el ultimo producto
};

let mostrarProducto = (product) => {
  const newProductCard = document.createElement("div");
  newProductCard.id = product.productId;
  //!agregamos info
  newProductCard.classList.add("card", "m-2");
  newProductCard.style.width = "18rem";
  newProductCard.innerHTML = `<img src=${product.imagen} class="card-img-top imagenProducto" alt="...">
            <div class="card-body">
              <h5 class="card-title"> ${product.name} </h5>
              <p class="card-text"> ${product.descrip} </p>
              <a href="#" class="btn btn-success form-control"> Ver mas </a>
            </div>
            `;
  //!buscamos al padre en el html
  const padreContainer = document.querySelector(".tarjetas");
  padreContainer.appendChild(newProductCard);
};

products.forEach((product) => {
  mostrarProducto(product);
});
//! eliminar productos
const eliminarProducto = () => {
  const productoAeliminar = prompt(
    "¿Qué producto desea eliminar?"
  ).toLocaleLowerCase();
  const productoEncontrado = products.find(
    (product) => product.name.toLocaleLowerCase() === productoAeliminar
  );
  if (productoEncontrado) {
    // Elimina el producto encontrado
    const index = products.indexOf(productoEncontrado);
    if (index !== -1) {
      products.splice(index, 1);
      alert("Producto eliminado");
      // Llama a una función para actualizar la lista de productos
      actualizarListaProductos();
    }
  } else {
    alert("Producto no encontrado");
  }
};
//! actualizar lista de productos
function actualizarListaProductos() {
  const padreContainer = document.querySelector(".tarjetas");
  padreContainer.innerHTML = ""; //limpia el contenedor

  products.forEach((product) => {
    const newProductCard = document.createElement("div");
    newProductCard.id = product.productId;
    newProductCard.classList.add("card", "m-2");
    newProductCard.style.width = "18rem";
    newProductCard.innerHTML = `
          <img src=${product.imagen} class="card-img-top imagenProducto" alt="...">
          <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.descrip}</p>
              <a href="#" class="btn btn-success form-control">Ver mas</a>
          </div>
      `;

    // Agrega la tarjeta de producto al contenedor
    padreContainer.appendChild(newProductCard);
  });
}
