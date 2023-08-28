const editarproduct = document.querySelector("#editProduct")
const editarproductId = document.querySelector("#editProductId")
const editardescripcion = document.querySelector("#editDescripcion")
const editarimg = document.querySelector("#editImg")

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
            <td id="producto-botones-${producto.productId}"><button class="btn btn-danger me-1" onclick="eliminarProducto(${producto.productId})">Eliminar🗑️</button><button class="btn btn-info" id ="${product.productId}" data-bs-toggle="modal" data-bs-target="#idModal" >Editar ✏️</button></td>
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

  agregarProductoLocalStorage(newProduct); //agrega el producto al array
  location.reload(); //actualiza las tarjetas
};

crearListaProductosAdmin();

//! editar tarjetas
  function modificarProducto() {
    event.preventDefault();
    const modificarProduct = new product(
      editarproduct.value,
      editarproductId.value,
      editardescripcion.value,
      editarimg.value
     )
     const arrayProductos = leerProductos();
     arrayProductos.splice ( parseInt(modificarProduct.productId) -1, 1, modificarProduct); 
     localStorage.setItem("productos", JSON.stringify(arrayProductos));
     location.reload()
   
    }
