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
    window.alert("Se agrego el producto al carrito.");
}
function saveElemnetInLittleCar(){
    localStorage.setItem("littleCar",JSON.stringify(littleCar))
}