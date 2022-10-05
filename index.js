const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");




const Productos = [
    {
        id: 1,
        Nombre: "Lona-Front",
        precio: 1150,

    },
    {
        id: 2,
        Nombre: "Vinilo",
        precio: 950,

    },
    {
        id: 2,
        Nombre: "cortina para baño impresa",
        precio: 1850,

    },
    {
        id: 2,
        Nombre: "Cuerina",
        precio: 2500,

    },

];

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
    comprar.innerText = "añadir producto";
    comprar.className = "comprar";
    content.append(comprar);

    
    const botonToast = comprar;
    botonToast.onClick = mostrarToast;
    function mostrarToast () {
    Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    };

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            Nombre: product.Nombre,
            precio: product.precio,
        });
        console.log(carrito);
        
    });

});


verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "row";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `<h4 class="modal-header-title">Carrito.</h4>`;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h4");
    modalbutton.innerText = "X"
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });


    modalHeader.append(modalbutton);


    const botonSwal = modalbutton
    botonSwal.onclick = mostarSwal

    function mostarSwal() {
        Swal.fire({
            lcon: "success",
            title: "cancelar pedido",

        })
    }




    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <h5>${product.Nombre}</h5>
        <p calss"price">${product.precio}$ x metro cuadrado</p>
        `;
        modalContainer.append(carritoContent);

    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalFinal = document.createElement("div");
    totalFinal.className = "total-content";
    totalFinal.innerHTML = `total a pagar: ${total} $  pesos + IVA`;
    modalContainer.append(totalFinal);
});

