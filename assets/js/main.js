const libros = new ListaLibros([
  new Libro(
    1,
    "El Señor de los Anillos",
    "J.R.R. Tolkien",
    "La historia de un anillo que puede destruir la tierra media",
    15000,
    true,
    10000,
    "./assets/img/libros/libro1.jpg",
    100
  ),
  new Libro(
    2,
    "Harry Potter",
    "J.K. Rowling",
    "La historia de un niño mago que debe vencer al mago oscuro",
    20000,
    false,
    0,
    "./assets/img/libros/libro2.jpg",
    3
  ),
  new Libro(
    3,
    "Cien años de soledad",
    "Gabriel García Márquez",
    "La historia de una familia en Macondo",
    25000,
    true,
    20000,
    "./assets/img/libros/libro3.jpg",
    0
  ),
  new Libro(
    4,
    "El amor en los tiempos del cólera",
    "Gabriel García Márquez",
    "La historia de un amor que dura toda la vida",
    30000,
    false,
    0,
    "./assets/img/libros/libro4.jpg",
    50
  ),
  new Libro(
    5,
    "Crónica de una muerte anunciada",
    "Gabriel García Márquez",
    "La historia de un asesinato anunciado",
    15000,
    false,
    0,
    "./assets/img/libros/libro5.jpg",
    10
  ),
  new Libro(
    6,
    "Rayuela",
    "Julio Cortázar",
    "La historia de un amor en París",
    20000,
    true,
    15000,
    "./assets/img/libros/libro6.jpg",
    1
  ),
]);

ListaLibros.mostrarLibros(libros.lista);

const btnFiltros = document.getElementById("btn-filtros");

btnFiltros.addEventListener("click", (e) => {
  const checkboxFiltros = document.querySelectorAll(
    "#filtros input[type='checkbox']:checked"
  );
  const filtrosAAplicar = []
  checkboxFiltros.forEach((checkbox) => {
    const nombreFiltro = limpiarIDElemento(checkbox.id); // stock o oferta
    filtrosAAplicar.push(nombreFiltro)
  });

  ListaLibros.filtrarLibros(filtrosAAplicar)
});

const limpiarIDElemento = (IDElemento) => {
  return IDElemento.replace(/\w{0,}-/g, "");
};
