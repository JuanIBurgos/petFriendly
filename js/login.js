class User {
  constructor(name, surname, email, id, status, password) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.id = id;
    this.status = status;
    this.password = password;
  }
}

createdUsers = [
  //instanciar users
  new User("jorge", "navarro", "jorge@gmail.com", 0, "admin", "123"),
  new User("sol", "lobo", "sol@gmail.com", 1, "user", "123"),
];
guardarUsuarios(createdUsers);

function login(event) {
  event.preventDefault();
  const guardarMail = document.getElementById("email").value;
  console.log(guardarMail);
  const guardarPassword = document.getElementById("password").value;
  console.log(guardarPassword);

  leerUsuarios(guardarMail, guardarPassword);
}
