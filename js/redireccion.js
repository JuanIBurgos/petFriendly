
function redireccionsTarjeta(productIdAMostrar){
location.href = "../html/detalleDeProducto.html"    

localStorage.setItem("productoAMostrar",JSON.stringify(productIdAMostrar))

}