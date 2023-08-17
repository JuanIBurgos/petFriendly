function guardarUsuarios(arrayDeUsuarios) {
  localStorage.setItem("usuarios", JSON.stringify(arrayDeUsuarios));
}

function leerUsuarios(email, password) {
  //traer usuarios
  const listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));

  console.log("tengo" + listaUsuarios);

  const usuarioEncontrado = createdUsers.find(
    (listaUsuarios) =>
      listaUsuarios.password == password && listaUsuarios.email == email
  );
  if (usuarioEncontrado) {
    alert("ingreso");
    if (usuarioEncontrado.status == "admin") {
      window.location.assign(window.location.origin + "/admin.html");
    } else {
      window.location.assign(window.location.origin + "/index.html");
    }
  } else {
    alert("datos incorrectos"); //no ingresa
  }
}
