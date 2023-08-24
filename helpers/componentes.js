/**
 *Este metodo genera el header y lo agrega en el div <header> con id ="header"

 *Esto  para no tener que copiar y pegar el mismo componente en las diferentes vistas,
 */
function crearHeader() {
  let header = `
    <nav class="navbar nav navbar-expand-lg " >
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="/index.html"><img src="/asset/asset.navbar/Mi proyecto.png" alt="Logo" height="200px " width="200px"></a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="/index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a href="/html/login.html" class="nav-link active" aria-current="true">Login</a>
            </li>
             <li class="nav-item">
              <a class="nav-link active" href="#">Sobre nosotros</a>
             </li>
            <li class="nav-item">
            <a class="nav-link active" aria-disabled="true">Contactos</a>
             </li>
        </ul>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="¿Que estas buscando?" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">buscar</button>
        </form>
        </div>
    </nav>`;
  document.getElementById("header").innerHTML += header;
}

/**
 * Este metodo genera el footer y lo agrega en el div <footer> con id = "footer"
 
 * Esto  para no tener que copiar y pegar el mismo componente en las diferentes vistas,
 */
function crearFooter() {
  let footer = `
    <div class="row container-fluid pt-5 d-flex justify-content-around">       
    <div class="col-md-4 col-lg-4 col-xl-3">
        <img src="../asset/asset.navbar/Mi proyecto.png" class="img-footer border border-success border border-3" alt="Logo del Blog">
        <h5 class="text-start fw-bold"></h5>
        <p class="descripcion_logo">Al servicio de sus patitas</p>
    </div>
    <div class="col-md-4 col-lg-4 col-xl-3">
        <p>
            <h5>Contáctanos</h5>
        <li class="fas fa-phone me-3"> 4245678</li>
        <li class="fas fa-home me-3"> Bolivar 2557, San Miguel de Tucuman</li>
        <li class="fas fa-envelope me-3">petfriendly2023@gmail.com</li>
    </p>
    </div>
    <div class="col-md-4 col-lg-4 col-xl-3">
        <div class="text-center">
        <h5>Nuestras redes sociales</h5>
       <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
            <a href="https://www.facebook.com/" target="_blank" class="text-dark"> <i class="fab fa-facebook">PetFriendly</i></a>
        </li>
       </ul>
       <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
            <a href="https://twitter.com/home" target="_blank" class="text-dark"> <i class="fab fa-twitter"> PetFriendly2023</i></a>
        </li>
    </div>
    </div>
</div>`;

  document.getElementById("footer").innerHTML += footer;
}

/**
*para ejecutar la funcion render en cada vista para que se dibujen se debe:

* 1-Llamarla en el html 
*   <script src="/helpers/componentes.js"></script>
*   en este caso llamo a los helpers y luego el js de la vista correspondientes

* 2- tener el div contenedor del footer con el id "footer" para poder escribir dentro de el con la funcion
*   <footer class="footer" id="footer"></footer>
*
* 3- tener el div contenedor del header con el id "header" para poder escribir dentro de el con la funcion
*    <header class="header" id="header"></header>
*/
function render() {
  crearHeader();
  crearFooter();
}
