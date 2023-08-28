let crearListaProductosAdmin = () => {
  let listaProductos = leerProductos();
  let lugarhtml = document.getElementById("listaProductos");
  listaProductos.forEach((producto) => {
    lugarhtml.innerHTML += crearFilaProducto(producto);
  });
};

let crearFilaProducto = (producto) => {
  return `
        <tr>
            <td id="producto-id-${producto.productId}">${producto.productId}</td>
            <td id="producto-nombre-${producto.productId}">${producto.name}</td>
            <td id="producto-descripcion-${producto.productId}">${producto.descrip}</td>
            <td id="producto-botones-${producto.productId}"><button onclick="eliminarProducto(${producto.productId})">Eliminar</button></td>
        </tr>
    `;
};

let eliminarProducto = (productId) => {
  eliminarProductoLocalStorage(productId);
  location.reload();
};

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
  actualizarLista(products); //actualiza las tarjetas
};

crearListaProductosAdmin();
