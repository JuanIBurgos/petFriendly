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

const createdUsers = [
  //instanciar users
  new User("jorge", "navarro", "jorge@gmail.com", 0, "admin", "123"),
  new User("sol", "lobo", "sol@gmail.com", 1, "user", "123"),
];
