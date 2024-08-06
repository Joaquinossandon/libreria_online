class ListaLibros {
  constructor(lista) {
    this.lista = lista;
  }

  static mostrarLibros(libros) {
    const listaLibros = document.getElementById("lista-libros");
    const htmlLibros = libros.map((libro) => {
      // devuleve un arreglo nuevo con los elementos que retorna
      return `
                <article class="col-6 col-md-4 col-lg-3" id="libro-${libro.id}">
                    <div class="card">
                        <img
                          src="${libro.portada}"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">${libro.titulo}</h5>
                          <p class="card-text">
                            ${libro.sinopsis}
                          </p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">${libro.autor}</li>
                          <li class="list-group-item">${
                            libro.oferta
                              ? `<s>${libro.precio}</s>`
                              : libro.precio
                          }</li>
                          ${
                            libro.oferta
                              ? `<li class="list-group-item">${libro.precioOferta}</li>`
                              : ""
                          }
                        </ul>
                        <div class="card-body">
                          <div class="row g-3">
                            <a class="col-12 btn btn-primary" href="/libro/${
                              libro.titulo
                            }">Ver más</a>
                            <button class="col-12 btn btn-primary">
                              Añadir al carrito
                            </button>
                          </div>
                        </div>
                    </div>
                </article>
                `;
    });

    listaLibros.innerHTML = htmlLibros.join("");
  }

  static filtrarLibros(filtros) {
    // filtros => [oferta, stock]
    const listaFiltrada = this.lista.filter((libro) => {
      return libro.oferta === true && libro.stock > 0;
    });

    console.log(listaFiltrada)
    this.mostrarLibros(listaFiltrada);
  }
}
