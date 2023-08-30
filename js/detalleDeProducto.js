let arregloProductos = leerProductos();
const productoAMostrar = JSON.parse(localStorage.getItem("productoAMostrar"));


function mostrarDetalleDeProducto(idProduct){

    
    let productoEncontrado = arregloProductos.find((producto)=>producto.productId === idProduct);    
    
    // Creamos el elemento 
    const newElementDetalle = document.createElement('div');
    // Agregamos la información la clase 
    newElementDetalle.classList.add('container'); 
    // Coloco funciones de css
    // newProductCards.style.width='18rem';
    newElementDetalle.innerHTML=`
    <h1 class="titulos text-center pt-3">Producto de la tienda</h1>
        <hr>
    <article class="row fondo titulos">
            <!-- card con el producto -->
                <div class="col-lg-9 col-md-8 col-sm-12 col-12 ">
                    <div class="card mt-3 mb-3">
                        <div class="row g-0 fondo productoShadow">
                            <div class="col-md-4 mt-4 mb-4 imagenEfecto">
                                <div id="idCarruselProducto" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner mx-2">
                                        <div class="carousel-item active">
                                            <img src=${productoEncontrado.imagen} alt=${productoEncontrado.name}} class="d-block w-100 img-fluid rounded-start">
                                        </div>
                                        <div class="carousel-item">
                                            <img src=${productoEncontrado.imagen} alt=${productoEncontrado.name}} class="d-block w-100 img-fluid rounded-start">
                                        </div>
                                        <div class="carousel-item">
                                            <img src=${productoEncontrado.imagen} alt=${productoEncontrado.name}} class="d-block w-100 img-fluid rounded-start">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${productoEncontrado.name} <br> ${productoEncontrado.productId}</h5>
                                    <hr>
                                    <p class="card-text">${productoEncontrado.descrip}</p>
                                    <p class="card-text"><small class="text-muted"><a href="#idDescripcion" class="text-decoration-none text-success">Ver mas características</a>.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Columna de forma de pago 3 columnas -->
                <div class="col-lg-3 col-md-4 col-sm-12 col-12 ">
                    <div class="mt-4 mb-3 titulos text-center">
                        <h4><b> ${productoEncontrado.name} </b><br> ${productoEncontrado.productId}</h4>
                        <h4 class="mt-3 mt-3 text-warning">$ ${productoEncontrado.precio}</h4>

                        <a href="../html/error404.html" class="text-white text-decoration-none"><button type="button" class="btn btn-outline-success detalleBotonPago">COMPRAR AHORA</button></a>
                        <a href="../html/error404.html" class="text-white text-decoration-none"><button type="button" class="btn btn-outline-success detalleBotonPago">AGREGAR AL CARRITO</button></a>

                        <div class="text-secondary">
                            <p class="mt-0 mb-0"><i class="bi bi-truck"></i> Envio gratis! Llega en 3 días</p>
                        </div>
                    </div>
                </div>
            </article>

            <!-- CARACTERÍSTICAS -->
            <article id="idDescripcion">
                <div>
                    <h3 class="titulos text-center mt-3 mb-3">CARACTERÍSTICAS</h3>
                    <table class="table table-light table-striped text-center">
                        <thead>
                            <tr>
                                <th scope="col">Característica</th>
                                <th scope="col">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Código</th>
                                <td>${productoEncontrado.productId}</td>
                            </tr>
                            <tr>
                                <th>Producto</th>
                                <td>${productoEncontrado.name}</td>
                            </tr>
                            <tr>
                                <th>Descripción</th>
                                <td>${productoEncontrado.descrip}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
           
    `
// BUSCO AL PADRE 
const dadContainer = document.querySelector('#idDetalleDeProducto'); // # porque adopta como ID. Este id es el contenedor el modal del index.html

// ADOPTO AL HIJO
dadContainer.appendChild(newElementDetalle);

}

mostrarDetalleDeProducto(productoAMostrar);
