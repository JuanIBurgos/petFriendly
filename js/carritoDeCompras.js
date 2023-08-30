// Empiezo con el carrito vacio
let littleCar = [];
const storedLittleCar = JSON.parse(localStorage.getItem("littleCar"));
if (storedLittleCar) {
    littleCar = storedLittleCar;
}

// Llamo los productos que existen la store
const arregloDeProducto = leerProductos(); 
//console.log(arregloDeProducto)

function sumarACarrito(idProductoTarjeta){
    let productoCarrito = arregloDeProducto.find(producto => producto.productId === idProductoTarjeta)
    
    //Armo el elemento del carrito para enviar alcarito
    let elementoCarrito = new ProductCarrito (productoCarrito.productId,productoCarrito.name,productoCarrito.precio,1)
    //Ahora sumo al arreglo del carrito
    littleCar.push(elementoCarrito);
    //Guardamos en el localStorage
    saveElemnetInLittleCar();
    //debo realizar un mostrar si gusto
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
    // Evaluo
    if (storedLittleCar){
        storedLittleCar.forEach( element => {
            const newfile = document.createElement("tr");
            containerCuerpoTabla.innerHTML=`<tr>
            <td>${element.idProduc}</td>
            <td>${element.name}</td>
            <td>$${element.price}</td>
            <td>$${element.cantidad}</td>
            <td>$${(element.precio*element.cantidad)}</td>
            <td>
                <button class="btn btn-danger" onclick = "borrar(this)" type="button">Borrar</button>
            </td>
            </tr> 
            `;
        containerCuerpoTabla.appendChild(newfile);    
        });
    }
}
// sumarACarrito(2);
renderCarritoDeCompras();