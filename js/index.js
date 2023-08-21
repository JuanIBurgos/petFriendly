// Este archivo es el js de la página principal
render();

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
    "Perfumeria y limpieza",
    "higuiene01",
    "Los mejores productos de higuiene para tus mascotas",
    "https://www.onlinezoo.es/media/f0/ca/6c/1666246730/Hundeparf%C3%BCm%20und%20Katzenparf%C3%BCm.jpg"
  ),
  new product(
    "Casitas y cuchas",
    "cucha01",
    "Encontrá la mejor comodidad para que tu mascota descanse",
    "https://m.media-amazon.com/images/I/61X0xow97BL._AC_UF1000,1000_QL80_.jpg"
  ),
  new product(
    "Vestimenta",
    "ropa01",
    "El mejor vestuario para tus peludos",
    "https://http2.mlstatic.com/D_NQ_NP_703688-MLA54902967666_042023-O.webp"
  ),
  new product(
    "Transportadores",
    "transportador01",
    "Transporta a tu mascota con seguridad",
    "https://cnnespanol.cnn.com/wp-content/uploads/2022/01/sherpa-transportadora.jpg?quality=100&strip=info"
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
