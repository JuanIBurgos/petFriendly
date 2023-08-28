function iniciar() {
  if (localStorage.getItem("usuarios") == null) {
    localStorage.setItem("usuarios", JSON.stringify(createdUsers));
  }
  if (localStorage.getItem("productos") == null) {
    localStorage.setItem("productos", JSON.stringify(products));
  }
}

function leerProductos() {
  return JSON.parse(localStorage.getItem("productos"));
}

function agregarProductoLocalStorage(producto) {
  let listaProductos = leerProductos(); //obtiene los elementos
  listaProductos.push(producto);
  localStorage.setItem("productos", JSON.stringify(listaProductos));
}
function eliminarProductoLocalStorage(productoId) {
  let listaProductos = leerProductos(); //obtiene los elementos
  let productoEncontrado = listaProductos.find(
    (producto) => producto.productId === productoId
  ); //busca el elemento por id
  let indexProducto = listaProductos.indexOf(productoEncontrado); //saca el index del elemento
  listaProductos.splice(indexProducto, 1); //saca el elemento de la lista
  localStorage.setItem("productos", JSON.stringify(listaProductos)); //guarda en el localStorage el nuevo array
}

function leerUsuarios(email, password) {
  //traer usuarios
  const listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));

  console.log("tengo" + listaUsuarios);

  const usuarioEncontrado = listaUsuarios.find(
    (listaUsuarios) =>
      listaUsuarios.password == password && listaUsuarios.email == email
  );
  if (usuarioEncontrado) {
    alert("ingreso");
    if (usuarioEncontrado.status == "admin") {
      window.location.assign(window.location.origin + "/html/pagAdmi.html");
    } else {
      window.location.assign(window.location.origin + "/index.html");
    }
  } else {
    alert("datos incorrectos"); //no ingresa
  }
}

iniciar();
