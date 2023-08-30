class Product {
    constructor(productId, name ,price, category, image, description, stock){
        this.id = productId;
        this.name= name;
        this.price= price;
        this.category= category;
        this.image= image;
        this.description= description;
        this.stock=stock;
    }
}
let products = [
    new Product('cucha44689', 'cucha', $16610, 'camas,cuchas y colchonetas', 'https://http2.mlstatic.com/D_NQ_NP_715462-MLA69840429077_062023-O.webp', 'cucha chica eco', 20),
    new Product('cucha234678', 'cucha', 23640, 'camas, cuchas y colchonetas', 'https://i.pinimg.com/564x/83/79/ca/8379ca20f3a091e6198882e491e8dab3.jpg', 'cucha mediana eco', 20),
    new Product('cucha42628','cucha',$38460,'camas,cuchas y colchonetas', 'https://http2.mlstatic.com/D_NQ_NP_2X_881110-MLA48242029979_112021-F.webp', 'cucha grande eco', 20 ),
    new Product('polar9087', 'Polar', $410, 'Ropa', 'https://http2.mlstatic.com/D_NQ_NP_2X_961504-MLA69227201391_052023-F.webp', 'polar comun n°0', 5),
    new Product('polar90137','Polar', $540, 'Ropa', 'https://perro-salchicha.club/wp-content/uploads/2022/10/perro-salchicha-mejor-abrigo.jpg', 'polar n°1', 5),
    new Product('polar7290', 'Polar', $660, 'Ropa', 'https://http2.mlstatic.com/D_NQ_NP_2X_775733-MLA69227098447_052023-F.webp', 'Polar común n°2', 5),
    new Product('shampoo123', 'Shampoo y acondicionador Osspret', $890,'Shampoos y acondicionadores', 'https://cerromascotas.com/wp-content/uploads/2020/09/shampo-osspret-2en1.jpg', 'Shampoo 2 en 1, shampoo+acondicionador pulguicida garrapaticida', 10),
    new Product('shampoo3456', 'Shampoo Osspret Aqua', $840, 'Shampoos y acondicionadores', 'https://petplanetshop.com.ar/images/product_image/472/0?w=400&h=400&fit=contain&dpr=2.625&q=80', 'Shampoo Aqua para perros cachorros', 10),
    new Product('shampoo987', 'Shampoo Osspret medicado',$800, 'Shampoos y acondicionadores','https://mascotasshop.com.ar/wp-content/uploads/2020/05/412-1.jpg', 10 ),
    new Product('canil985', 'Canil n°1', $11210,'Transportadores', 'https://http2.mlstatic.com/D_NQ_NP_2X_863309-MLA70369912947_072023-F.webp','canil pratiko metal n°1', 5),
    new Product('canil7483', 'Canil n°2', $15230,'Transportadores', 'https://leocan.com.ar/wp-content/uploads/2023/06/D_NQ_NP_678832-MLA45210504888_032021-O.webp','canil pratiko metal n°2', 5),
    new Product('cani4782', 'Canil Gipsy n°1', $6130,'Transportadores', 'https://http2.mlstatic.com/D_NQ_NP_948913-MLU69805127350_062023-O.webp','canil gipsy n°1 36x36x25', 5),
]