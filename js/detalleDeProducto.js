// render();

function mostrarDetalleDeProducto(idProduct){
    let product = products.find(product => product.productId == idProduct);
    console.log(product);
    // Creamos el elemento 
    const newElementDetalle = document.createElement('div');
    // Agregamos la información la clase 
    newElementDetalle.classList.add('container'); // clase card de bootstrap, margen x-2
    // Coloco funciones de css
    // newProductCards.style.width='18rem';
    newElementDetalle.innerHTML=`
    <h1 class="titulos text-center h1-partners">Producto de la tienda</h1>
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
                                            <img src=${product.imagen} alt=${product.name}} class="card card-img-top">
                                        </div>
                                        <div class="carousel-item">
                                            <img src=${product.imagen} alt=${product.name}} class="d-block w-100 img-fluid rounded-start">
                                        </div>
                                        <div class="carousel-item">
                                            <img src=${product.imagen} alt=${product.name}} class="d-block w-100 img-fluid rounded-start">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${product.name} <br> ${product.productId}</h5>
                                    <hr>
                                    <p class="card-text">${product.descrip}</p>
                                    <p class="card-text"><small class="text-muted"><a href="#idDescripcion" class="text-decoration-none text-success">Ver mas características</a>.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Columna de forma de pago 3 columnas -->
                <div class="col-lg-3 col-md-4 col-sm-12 col-12 ">
                    <div class="mt-4 mb-3 titulos text-center">
                        <h4><b> ${product.name} </b><br> ${product.productId}</h4>
                        <h4 class="mt-3 mt-3 text-warning">$56000</h4>

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
                                <td>${product.productId}</td>
                            </tr>
                            <tr>
                                <th>Producto</th>
                                <td>${product.name}</td>
                            </tr>
                            <tr>
                                <th>Descripción</th>
                                <td>${product.descrip}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
            <!-- COMENTARIOS -->
            <article>
                <div class="mt-4">
                    <div class="titulos">
                        <h3 class="titulos text-center mt-3 mb-3">COMENTARIOS</h3>
                        <div class="mb-3">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <div class="form-floating titulosblack">
                            <textarea class="form-control" placeholder="Leave a comment here" id="idProductoComentarios"></textarea>
                            <label for="idProductoComentarios">Escriba su comentario</label>
                            <a href="../html/error404.html" class="text-white text-decoration-none"><button type="button" class="btn btn-secondary mt-3 mb-3">Enviar</button></a>

                        </div>
                        <hr>
                        <div>
                            <div class="mt-3 mb-3 d-flex">
                                <div class="me-auto">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <div>
                                    <small>12 nov 2022</small>
                                </div>
                            </div>
                            <p>Los amo fuerte. Vi varias reviews sobre headset inalámbricos y primero termine comprando los "g pro x wireless". Q no están mal, pero mi principal problema con esos auris era que el sidetone/monitoreo (escuchar mi voz al hablar)
                                era muy bajo y no pude corregirlo de ninguna manera y para mi eso era bastante molesto, así que los devolví y fui por estos que eran mi segunda opción y la verdad que me equivoque, estos deberían haber sido mi primera opción,
                                en cuanto al monitoreo de la voz no tuve ningún problema ya que se escucha bastante fuerte si lo regulas desde la app "astro command center" y la calidad del mic es decente. Por la batería ni te calentas, cuando no los
                                usas los dejas en la base y carga solo y cuando los usas la batería dura bastante (en cambio el g pro x tenia que enchufarlo yo, nada grave pero este me pareció mas practico) además me parecen mucho mas cómodos en las orejas
                                q los otros. Aunque si debo decir que en cuanto a calidad de sonido este astro A50 y el g pro x suenan muuuy bien así que en ese sentido no hay mucha diferencia, es una cuestión de gustos, para mi este es mas completo.
                                Son caros pero lo valen!.</p>
                        </div>

                        <hr>
                        <div>
                            <div class="mt-3 mb-3 d-flex">
                                <div class="me-auto">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <div>
                                    <small>01 oct 2022</small>
                                </div>
                            </div>
                            <p>Primero que nada, el precio es mucho mas elevado de lo que deberia. Habiendo dicho eso, vale la pena. Comodidad 7. 5/10. No es lo mas comodo del mundo pero lo suficiente como para tenerlo todo el dia sin molestia, eso que soy
                                medio cabezon y tengo pelo medio afro que ocupa una buena cantidad de lugar. Calidad de audio. 9/10. Sin lugar a duda tienen el mejor audio en auriculares inalambricos que probe, ademas podes descargar desde microsoft store
                                el software para equalizar y demas y suena bastante bien para lo que esperaba. Bateria. 11/10 desde la primera carga que no tuve la necesidad de dejarlos cargar nunca mas. Simplemente los uso todo el dia y la bateria no
                                se agota, ademas, cuando no los uso los dejo en la estacion de carga y se recupera, sino, los apoyas y automaticamente se apagan para no consumir de mas. Un lujo. Microfono, 4/10. Sirve, no se escucha bien, no se escucha
                                mal, safa y cumple pero deja mucho que desear. Lo que destaco es que no hace falta andar acercandolo para que se escuche, a la distancia que esta el mic, sirve. Conclusion. Solo lo compraria en caso de querer si o si unos
                                auriculares inalambricos, sino uno con cable le pasa el trapo por la mitad de precio (hyper x cloud revovler). Cumplen todos los estandares minimos como para que safe en todos los aspectos y destaca en lo que tiene que
                                destacar, que para mi es calidad de audio y duracion de bateria, no te van a abandonar salvo que no los cargues durante un buen tiempo. Recomiendo.</p>
                        </div>

                        <hr>
                        <div>
                            <div class="mt-3 mb-3 d-flex">
                                <div class="me-auto">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <div>
                                    <small>01 oct 2022</small>
                                </div>
                            </div>
                            <p>Es muy lindo, muy buen sonido. Tiene chiches como por ejemplo, se mutea cuando se sube el micrófono y se apaga para ahorrar batería cuando el auricular está acostado. Es muuuuy como y cubre toda la oreja. Lo malo, no tiene
                                bluetooth. Si tenés una notebook y te queres transportar con la notebook y el auricular, tenes que arrastrar la base porque ésta va conectada por usb a la notebook, asi que si lo que queres es estar moviendote de escritorio
                                o de lugar con tu notebook, no es para vos.</p>
                        </div>
                    </div>
                </div>
            </article>
    `
// BUSCO AL PADRE 
const dadContainer = document.querySelector('#idDetalleDeProducto'); // # porque adopta como ID. Este id es el contenedor el modal del index.html

// ADOPTO AL HIJO
dadContainer.appendChild(newElementDetalle);

}

// mostrarDetalleDeProducto('1');
