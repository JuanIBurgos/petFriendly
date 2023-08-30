let crearListaProductosAdmin = () => {
  let listaProductos = leerProductos();
  let lugarhtml = document.getElementById("listaProductos");
  listaProductos.forEach((producto) => {
    lugarhtml.innerHTML += crearFilaProducto(producto);
  });
};

let crearFilaProducto = (producto) => {
  const productoString = JSON.stringify(producto);
  return `
  
        <tr>
            <td id="producto-id-${producto.productId}">${producto.productId}</td>
            <td id="producto-nombre-${producto.productId}">${producto.name}</td>
            <td id="producto-descripcion-${producto.productId}">${producto.descrip}</td>
<<<<<<< HEAD
            <td id="producto-botones-${producto.productId}"><button class="btn btn-danger me-1" onclick="eliminarProducto(${producto.productId})">Eliminar🗑️</button>
            <button class="btn btn-info" id ="${producto.productId}" data-bs-toggle="modal" data-bs-target="#idModal" onclick ="llenarFormulario(${producto})">Editar ✏️</button></td>
        </tr>

    `;
=======
            <td id="producto-stock-${producto.productId}">${producto.stock}</td>
            <td id="producto-precio-${producto.productId}">$${producto.precio}</td>
            <td id="producto-botones-${producto.productId}">
            <button class="btn btn-danger me-1" onclick="eliminarProducto(${producto.productId})">Eliminar🗑️</button>
            <button class="btn btn-info" id ="${producto.productId}" data-bs-producto='${productoString}'data-bs-toggle="modal" data-bs-target="#idModal" >Editar ✏️</button>
            </td>
        </tr>
   `;
>>>>>>> 264fb35cec7691daf3072f06e11f3e1b34a7c522
};

let eliminarProducto = (productId) => {
  eliminarProductoLocalStorage(productId);
  location.reload();
};

let agregarProducto = (event) => {
  event.preventDefault();
  const ProductName = document.getElementById("product").value;
  const productId = document.getElementById("productId").value;
  const productDescrip = document.getElementById("descripcion2").value;
  const productImg = document.getElementById("img").value;
  const productStock = document.getElementById("stock2").value;
  const productPrecio = document.getElementById("precio2").value;
  const newProduct = new product(
    ProductName,
    productId,
    productDescrip,
    productImg,
    productStock,
    productPrecio
  );

  agregarProductoLocalStorage(newProduct); //agrega el producto al array
  location.reload(); //actualiza las tarjetas
};

crearListaProductosAdmin();

//! editar tarjetas
function modificarProducto(producto) {
  const modificarProduct = new product(
    document.querySelector("#nombreForm").value,
    parseInt(document.querySelector("#idForm").value),
    document.querySelector("#descripcionForm").value,
    document.querySelector("#imgForm").value,
    document.querySelector("#stockForm").value,
    document.querySelector("#precioForm").value
  );

  agregarModificarProductos(modificarProduct);
}

<<<<<<< HEAD
// }

   function modificarProducto(event) {
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
=======
const productoModal = document.getElementById("idModal");
if (productoModal) {
  // Boton que activa el modal
  productoModal.addEventListener("show.bs.modal", (event) => {
    //Extrae la información de los atributos data-bs-producto='${productoString}'
    const button = event.relatedTarget;

    //lo hago nuevamente un objeto
    const producto = JSON.parse(button.getAttribute("data-bs-producto"));
    productoModal.querySelector("#formSubmit").innerHTML = "Crear";
    productoModal.querySelector("#productoFormTitulo").innerHTML =
      "Crear Producto";
    productoModal.querySelector("#nombreForm").setAttribute("value", "");
    productoModal.querySelector("#idForm").setAttribute("value", "");
    productoModal.querySelector("#descripcionForm").setAttribute("value", "");
    productoModal.querySelector("#imgForm").setAttribute("value", "");
    productoModal.querySelector("#stockForm").setAttribute("value", "");
    productoModal.querySelector("#precioForm").setAttribute("value", "");

    // Actualizo el contenido del modal
    if (producto) {
      productoModal.querySelector("#formSubmit").innerHTML = "Editar";
      productoModal.querySelector("#productoFormTitulo").innerHTML =
        "Editar Producto";
      productoModal
        .querySelector("#nombreForm")
        .setAttribute("value", producto.name);
      productoModal
        .querySelector("#idForm")
        .setAttribute("value", producto.productId);
      productoModal
        .querySelector("#descripcionForm")
        .setAttribute("value", producto.descrip);
      productoModal
        .querySelector("#imgForm")
        .setAttribute("value", producto.imagen);
      productoModal
        .querySelector("#stockForm")
        .setAttribute("value", producto.stock);
      productoModal
        .querySelector("#precioForm")
        .setAttribute("value", producto.precio);
    }
  });
}
>>>>>>> 264fb35cec7691daf3072f06e11f3e1b34a7c522
