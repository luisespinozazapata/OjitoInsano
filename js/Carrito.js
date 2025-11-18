const   carrito = document.getElementById("carrito"),
        productList = document.getElementById("lista_de_prod"),
        contenedorCart = document.querySelector('.carritoBuy .Productos');

let ArticulosCarrito = [];

document.addEventListener("DOMContentLoaded", () => {
    const datosGuardados = localStorage.getItem("carritoOjitoInsano");
    if (datosGuardados) {
        ArticulosCarrito = JSON.parse(datosGuardados);
        CarritoHTML();
    }

    RegistrarEventListener()
});

function RegistrarEventListener() {
    if (productList) {
        productList.addEventListener('click', agregarProd),
        productList.addEventListener('click', agregarProd2),
        productList.addEventListener('click', agregarProd3);
    }

//Elimminar producto
     carrito.addEventListener('click', eliminarProd);

// Descargar archivo TXT automáticamente al abrir el carrito
carrito.addEventListener("click", () => {
    descargarCarritoTXT();
});

}
//Agregar la Juegos
function agregarProd(e) {
    if (e.target.classList.contains("agregar_carrito")) {
        const Producto_select = e.target.closest('.JuegoMarco');
        leerInfo(Producto_select);
    }
}
//Agregar la lasaña
function agregarProd2(e) {
    if (e.target.classList.contains("agregar_carrito")) {
        const Producto_select2 = e.target.closest('.LasañasMarco');
        leerInfo(Producto_select2);
    }
}
//Agregar Ofertas
function agregarProd3(e) {
    if (e.target.classList.contains("agregar_carrito")) {
        const Producto_select3 = e.target.closest('.JuegoOferta');
        leerInfo(Producto_select3);
    }
}

function eliminarProd(e) {
    if (e.target.classList.contains("Borrar")) {
        const ProdID = e.target.getAttribute('data-id');
        ArticulosCarrito = ArticulosCarrito.filter(Producto => Producto.id !== ProdID);
        CarritoHTML();
    }
}
// Agarra la informacion :)
function leerInfo(Producto) {
    const infoProd = {
        imagen : Producto.querySelector('img').src,
        titulo : Producto.querySelector('h3').textContent,
        precio : parseFloat(Producto.querySelector('.dinero').textContent.replace("S/.", "").trim()),
        id : Producto.querySelector('button').getAttribute('data-id'),
        cantidad : 1
    };

//revisar si ya existe
     const existe = ArticulosCarrito.some(prod => prod.id === infoProd.id);
    if (existe) {
        ArticulosCarrito = ArticulosCarrito.map(prod => {
            if (prod.id === infoProd.id) {
                prod.cantidad++;
            }
            return prod;
        });
    } else {
        ArticulosCarrito = [...ArticulosCarrito, infoProd];
    }

    CarritoHTML();
}

function CarritoHTML() {
    limpiarHTML();
    ArticulosCarrito.forEach(Producto => {
        const fila = document.createElement('div');
        const totalPrecio = Producto.precio * Producto.cantidad;
        fila.innerHTML = `
            <img src=${Producto.imagen}></img>
            <p>${Producto.titulo}</p>
            <p>S/.${totalPrecio.toFixed(2)}</p>
            <p>${Producto.cantidad}</p>
            <p><span bold class="Borrar" data-id="${Producto.id}">X</span></p>        
        `;
        contenedorCart.appendChild(fila)
    });
    
    localStorage.setItem("carritoOjitoInsano", JSON.stringify(ArticulosCarrito));
    calcularTotal();
    //Descargar automaticamente
    
}

function calcularTotal() {

    const total = ArticulosCarrito.reduce((suma, prod) => suma + prod.precio * prod.cantidad, 0);

    const totalPrevio = document.querySelector('.total');
    if (totalPrevio) totalPrevio.remove();

    const totalDiv = document.createElement('div');
    totalDiv.classList.add('total');
    totalDiv.innerHTML = `<strong>Total: S/.${total.toFixed(2)}</strong>`;

    contenedorCart.appendChild(totalDiv);
}

//Eliminar productos

function limpiarHTML() {
    while (contenedorCart.firstChild) {
        contenedorCart.removeChild(contenedorCart.firstChild)
    }
}
//Descargar un archivo Carrito.txt cada vez que se hace clik al carrito de compras
function descargarCarritoTXT() {
    if (ArticulosCarrito.length === 0) return; // si el carrito está vacío, no descargar

    let texto = "CARRITO DE COMPRAS - OJITOS INSANOS\n\n";

    ArticulosCarrito.forEach(prod => {
        texto += `Producto: ${prod.titulo}\n`;
        texto += `Cantidad: ${prod.cantidad}\n`;
        texto += `Precio unitario: S/.${prod.precio}\n`;
        texto += `Subtotal: S/.${(prod.precio * prod.cantidad).toFixed(2)}\n`;
        texto += `------------------------------\n`;
    });

    const total = ArticulosCarrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
    texto += `TOTAL A PAGAR: S/.${total.toFixed(2)}\n`;

    const blob = new Blob([texto], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Carrito_OjitosInsanos.txt"; 
    a.click();

    URL.revokeObjectURL(url);
}
