class product {
  constructor(name, productId, descrip, imagen, stock, precio) {
    this.name = name;
    this.productId = productId;
    this.descrip = descrip;
    this.imagen = imagen;
    this.stock = stock;
    this.precio = precio;
  }
}
let products = [
  new product(
    "Perfume",
    1,
    "Perfume para perros y gatos de diferentes aromas ",
    "https://d2r9epyceweg5n.cloudfront.net/stores/019/016/products/fragancias_700x700_web-289ba3a45ea6ae146615121891583076-1024-1024.jpg",
    5,
    1200
  ),
  new product(
    "Casita",
    2,
    "Casita acolchada, tamaño mediano",
    "https://m.media-amazon.com/images/I/61X0xow97BL._AC_UF1000,1000_QL80_.jpg",
    5,
    12000
  ),
  new product(
    "Vestimenta",
    3,
    "Vestí a tu mascota de tu equipo favorito",
    "https://http2.mlstatic.com/D_NQ_NP_709670-MLA47632048493_092021-O.webp",
    5,
    1800
  ),
  new product(
    "Transportador",
    4,
    "Transportador para gatos, tamaño mediano",
    "https://cnnespanol.cnn.com/wp-content/uploads/2022/01/sherpa-transportadora.jpg?quality=100&strip=info",
    5,
    15000
  ),
  new product(
    "Shampoo",
    5,
    "Shampoo para lavado en seco para perros y gatos ",
    "https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/1876/01-1612902135-63212a6517e37.jpeg",
    5,
    800
  ),
  new product(
    "Castillo",
    6,
    "Castillo interactivo para gatos, altura 1m",
    "https://mascosas.cl/storage/Products/ZXawRsmeDHLvumunRqNDMba7l994Tn3rz4ecoSpY.webp",
    5,
    10000
  ),
  new product(
    "Vestimenta",
    7,
    "Buzo para perros y gatos tamaño mediano - grande",
    "https://m.media-amazon.com/images/I/51ifktulRiL.jpg",
    5,
    1800
  ),
  new product(
    "Transportador",
    8,
    "Transportador para perros y gatos, tamaño grande",
    "https://naturallife.vtexassets.com/arquivos/ids/163368/13318.jpg?v=1778598075",
    5,
    2200
  ),
];
