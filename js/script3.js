const productos=[
    {
        id:1,
        nombre:"VEGGIE SNAKS GRANIX FINAS HIERBAS 90GRS",
        precio:2600,
        img: `<img src="./assets/veggieSnackGranixFinasHierbas.jpg" alt="snack finas hierbas">`
    },
    {
        id:2,
        nombre:"VEGGIE SNAKS GRANIX PIZZA 90GRS",
        precio:2600,
        img: `<img src="./assets/veggieSnackGranixPizza.jpg" alt="snack pizza">`
    },
    {
        id:3,
        nombre:"VEGGIE SNAKS GRANIX CEBOLLA 90GRS",
        precio:2600,
        img: `<img src="./assets/veggieSnackGranixCebolla.jpg" alt="snack cebolla">`
    },
    {
        id:4,
        nombre:"VEGGIE SNAKS GRANIX BARBACOA 90GRS",
        precio:2600,
        img: `<img src="./assets/veggieSnackGranixFinasHierbasBarbacoa.jpg" alt="snack barbacoa">`

    },
    {
        id:5,
        nombre:"ALFAJOR MANI",
        precio:2300,
        img: `<img src="./assets/alfajorMani.jpg" alt="alfajor mani">`
    },
    {
        id:6,
        nombre:"ALFAJOR MEMBRILLO",
        precio:2300,
        img: `<img src="./assets/alfajorMembrillo.jpeg" alt="alfajor membrillo">`
    },
    {
        id:7,
        nombre:"CHOCOLATE AMARGO 70% BENOT 100GR",
        precio:7500,
        img: `<img src="./assets/chocolateAmargoBenot70.jpg" alt="chocolate amargo 70%">`
    },
    {
        id:8,
        nombre:"BARRITA NUTRIVEG FIT",
        precio:1900,
        img: `<img src="./assets/barritaNutrivegFit.jpeg" alt="barrita nutriveg fit">`
    },
    {
        id:9,
        nombre:"BARRITA NUTRIVEG ENERGY",
        precio:1900,
        img: `<img src="./assets/barritaNutrivegEnergy.jpg" alt="barrita nutriveg energy">`
    }
];

let cartStorage= localStorage.getItem("cartProductos");
cartStorage=JSON.parse(cartStorage);

let cartContainer= document.getElementById("carritoContainer");

function renderCarrito(cartItems){
    cartItems.forEach(producto =>{
        const cardCarrito= document.createElement("div");
        cardCarrito.innerHTML=`${producto.img}
                            <h3>${producto.nombre}</h3>
                            <h4>$${producto.precio}</h4>`;
        cartContainer.appendChild(cardCarrito);
    })
}

renderCarrito(cartStorage);

const totalCompra= cartStorage.reduce((acc,producto)=>acc+producto.precio,0);

let total=document.createElement("h3");
total.innerHTML=`Total: $${totalCompra}`;
cartContainer.appendChild(total);