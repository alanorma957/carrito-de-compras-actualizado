const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "row";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `<h4 class="modal-header-title">Carrito</h4>`;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("button");
    modalbutton.innerText = "❌";
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
        <p>cantidad: ${product.cantidad}<p>
        <p>total: ${product.cantidad * product.precio}<p>
        `;
        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "borrar-producto";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });



    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalFinal = document.createElement("div");
    totalFinal.className = "total-content";
    totalFinal.innerHTML = `total a pagar: ${total} $  pesos + IVA`;
    modalContainer.append(totalFinal);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundid = carrito.find((Element) => Element.id);

    carrito = carrito.filter((carritoid) => {
        return carritoid !== foundid
    });
    pintarCarrito();
};

