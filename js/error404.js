// Se creará la page del error 404 a partir del main
function generatedError404(){
    const newElement = document.createElement ('div');
    newElement.style.margin='auto';
    newElement.style.textAlign='center';
    // newElement.style.background='#e0f7e0';
    newElement.style.verticalAlign='center';
    newElement.innerHTML = `
    <div class="container">
        <img src="../asset/imgError404_SinFondo.png" class="img-fluid" alt="Perrito error 404">
        <div class="">
            <a href="../index.html" class="btn btn-success">Volver a pagina principal</a>
        </div>
    </div>`
    const padreElement = document.querySelector('main'); 
    padreElement.appendChild(newElement); 
}

generatedError404();