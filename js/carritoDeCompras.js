// Empiezo con el carrito vacio
let littleCar = [];
const storedLittleCar = JSON.parse(localStorage.getItem("littleCar"));
if (storedLittleCar) {
    littleCar = storedLittleCar;
}
let monto=0;

// Llamo los productos que existen la store
const arregloDeProducto = leerProductos(); 

function sumarACarrito(idProductoTarjeta){
    let productoCarrito = arregloDeProducto.find(producto => producto.productId === idProductoTarjeta)
    //Armo el elemento del carrito para enviar alcarito
    let elementoCarrito = new ProductCarrito (productoCarrito.productId ,productoCarrito.name,productoCarrito.precio,1)
    //Ahora sumo al arreglo del carrito
    littleCar.push(elementoCarrito);
    //Guardamos en el localStorage
    saveElemnetInLittleCar();

}

function saveElemnetInLittleCar(){
    localStorage.setItem("littleCar",JSON.stringify(littleCar))
}

function renderCarritoDeCompras()
{
    // Traigo con de lo voy a colocar
    const containerCuerpoTabla = document.querySelector("#cuerpoTabla");
    // Traigo los datos de localStorage
    const storedLittleCar = JSON.parse(localStorage.getItem("littleCar"));
    // Evaluo si hay elementos en el localStorage
    if (storedLittleCar){
        storedLittleCar.forEach( element => {
            monto=monto+(element.price)*(element.cantidad);
            console.log("monto"+monto);
            const newfile = document.createElement("tr");
            containerCuerpoTabla.innerHTML+=`<tr>
            <td>${element.idProduct}</td>
            <td>${element.name}</td>
            <td>$${element.price}</td>
            <td> ${element.cantidad}</td>
            <td>$${(element.price)*(element.cantidad)}</td>
            <td>
                <button class="btn btn-danger" onclick = "deleteElementeCarrito(${element.idProduct})" type="button">Borrar</button>
            </td>
            </tr> 
            `;
        containerCuerpoTabla.appendChild(newfile);    
        });
    crearPieDeTabla();
    }
}

function crearPieDeTabla(){
    console.log("Llege a crearPie de tabla monto"+monto);
    // Traigo con de lo voy a colocar
    const containerRespuestaDeTabla = document.querySelector("#respuestaDeTabla");
    // Traigo los datos de localStorage
    const newRespuestaDeTabla = document.createElement("div");
    newRespuestaDeTabla.classList=("container", "titulos","text-center");
    if (monto == 0){
        newRespuestaDeTabla.innerHTML=`
        <h2>El carrito se encuentra vacio.</h2>
        <a href="../index.html" class="btn btn-success form-control my-3"> BUSCAR PRODUCTOS  </a>
        `
        }else{
            newRespuestaDeTabla.innerHTML=`
            <h2>Su monto a pagar es <b> $ ${monto} </b></h2>
            `
        } 
    containerRespuestaDeTabla.appendChild(newRespuestaDeTabla);    
}

//sumarACarrito(2);
renderCarritoDeCompras();

function deleteElementeCarrito(elementoABorrar){
const elementIndex = littleCar.findIndex(element => element.idProduct == elementoABorrar);
if (elementIndex!==-1){
    littleCar.splice(elementIndex,1);
    saveElemnetInLittleCar();
    window.location.reload();
    
    }
}