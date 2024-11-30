/*async function fetchProductos() {
    try {
        const response = await fetch("./db/data1.json"); 
        const productos = await response.json();
        renderProductos(productos);
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}*/

const cartStorage = localStorage.getItem("cartProductos");
let cartProductos = cartStorage ? JSON.parse(cartStorage) : [];
let cartContainer= document.getElementById("carritoContainer");

let productsContainer= document.getElementById("productosContainer");

function renderCarrito(cartItems){
    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    cartItems.forEach(producto =>{
        const cardCarrito= document.createElement("div");
        cardCarrito.innerHTML=`${producto.img}
                                <h3>${producto.nombre}</h3>
                                <h4>${producto.precio}</h4>
                                <h4>Cantidad: ${producto.cantidad}</h4>
                                <h4>Subtotal: $${producto.precio * producto.cantidad}</h4>`;

        cartContainer.appendChild(cardCarrito);
    })

    const totalCompra = cartItems.reduce((acc, producto) => acc + producto.precio, 0);
    const total = document.createElement("h3");
    total.innerHTML = `Total: $${totalCompra}`;
    cartContainer.appendChild(total);

    if(cartItems.length>0){
        const finalizarCompraButton = document.createElement("button");
        finalizarCompraButton.innerHTML = "FINALIZAR COMPRA";
        finalizarCompraButton.className = "finalizarCompra";
        cartContainer.appendChild(finalizarCompraButton);

        finalizarCompraButton.onclick = finalizarCompra;
    }
}

function finalizarCompra(){
    Swal.fire({
        title: "Queres confirmar la compra?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            cartProductos=[];
            localStorage.setItem("cartProductos", JSON.stringify(cartProductos));
            

            renderCarrito(cartProductos);

            Swal.fire({
            title: "GRACIAS",
            text: "Tu compra fue realizada con exito.",
            icon: "success"
        });
    }
    });
}

renderCarrito(cartProductos);
