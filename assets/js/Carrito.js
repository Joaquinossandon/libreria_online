class Carrito {
  constructor(libros) {
    this.productos = [];
    this.libros = libros;
    this.total = 0;
  }

  mostrarProductos() {
    const listaProductos = document.getElementById("lista-carrito");
    const listaProductosHTML = this.productos.map((producto) => {
      return `
        <div
            class="list-group-item list-group-item-action d-flex ps-2 gap-3"
            aria-current="true"
          >
            <img
              src="${producto.portada}"
              width="50px"
              class="img-fluid rounded-2"
              alt=""
            />
            <div>
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${producto.titulo}</h5>
              </div>
              <p class="mb-1">${producto.sinopsis}</p>
              <small>$${new Intl.NumberFormat("es-ES", {
                style: "currency",
                currency: "CLP",
              }).format(producto.precio)}</small>
            </div>
          </div>
        `;
    });

    listaProductos.innerHTML = listaProductosHTML.join("");
  }

  agregarProducto(IDproducto) {
    const libroAgregado = this.libros.find((libro) => libro.id === IDproducto);
    this.productos.push(libroAgregado);
    localStorage.setItem("carrito", JSON.stringify(this.productos));
    this.contarLibros();
    this.mostrarProductos();
    this.calcularTotal()
  }

  contarLibros() {
    const badgeCarrito = document.getElementById("cantidad-carrito");
    badgeCarrito.textContent = this.productos.length;
  }

  getLocalStorage() {
    const carritoLS = localStorage.getItem("carrito")
      ? JSON.parse(localStorage.getItem("carrito"))
      : [];
    this.productos = carritoLS;
    this.contarLibros();
    this.mostrarProductos();
    this.calcularTotal()
  }

  calcularTotal() {
    const total = this.productos.reduce((acumulador, productoActual) => {
      return acumulador + productoActual.precio;
    }, 0);
    this.total = total;
    const totalCarritoElement = document.getElementById("total-carrito");
    totalCarritoElement.textContent = `$${new Intl.NumberFormat("es-ES", { style: 'currency', currency: 'CLP' }).format(this.total)}`;
  }

  vaciarCarrito() {
    this.productos = [];
    localStorage.removeItem("carrito");
    this.contarLibros();
    this.mostrarProductos();
    this.calcularTotal()
  }
}
