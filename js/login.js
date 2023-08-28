function login(event) {
  event.preventDefault();
  const guardarMail = document.getElementById("email").value;
  console.log(guardarMail);
  const guardarPassword = document.getElementById("password").value;
  console.log(guardarPassword);

  leerUsuarios(guardarMail, guardarPassword);
}
