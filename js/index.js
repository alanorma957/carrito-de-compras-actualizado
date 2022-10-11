
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");




const Productos = [
    {
        id: 1,
        Nombre: "Lona-Front",
        precio: 1150,
        cantidad: 1,

    },
    {
        id: 2,
        Nombre: "Vinilo",
        precio: 950,
        cantidad:1,

    },
    {
        id: 2,
        Nombre: "cortina para baño impresa",
        precio: 1850,
        cantidad:1,
    

    },
    {
        id: 2,
        Nombre: "Cuerina",
        precio: 2500,
        cantidad:1,
    },

];

let ProductosJSON = JSON.stringify(Productos)
localStorage.setItem("arrayProductos", ProductosJSON);


let carrito = [];



Productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <h3>${product.Nombre}</h3>
    <p calss"price">${product.precio}$ x metro cuadrado</p>
    `;
    shopContent.append(content);



    let comprar = document.createElement("button");
    comprar.innerText = "Añadir Producto";
    comprar.className = "comprar";
    content.append(comprar);


    const botonToast = comprar;




    comprar.addEventListener("click", () => {

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    console.log(repeat);
    if (repeat){
        carrito.map((product) => {
            if(product.id === product.id) {
                product.cantidad++;
            }
        });
    }
        carrito.push({
            id: product.id,
            Nombre: product.Nombre,
            precio: product.precio,
            cantidad: product.cantidad
        });
        
        console.log(carrito);

        botonToast.onClick = mostrarToast;
        function mostrarToast(comprar) {
            Toastify({
                text: "This is a toast",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "rigth",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function (mostrarToast) { }
            }).showToast(comprar);
        };
    });

});



