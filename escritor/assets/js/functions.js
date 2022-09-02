//Cargar los datos de los libros
fetch("/escritor/assets/data/data.json").then(response => {
   return response.json();
}).then(librosJSON => {
  let librosEl = document.getElementById("libros");
  let recomendadosEl = document.getElementById("recomendados");

  cargarLibros(librosJSON.es.libros, librosEl);
  cargarLibros(librosJSON.es.recomendados, recomendadosEl);
});

const cargarLibros = (libros, listElement) => {
  libros.forEach(libro => {
    const node = crearNodoLibro(libro);
    listElement.append(node);
  });
};

const crearNodoLibro = (libro) => {
  let node = document.createElement("div");
  node.classList.add("libro");
  
  let portada = document.createElement("div");
  portada.classList.add("portada");
  let img = document.createElement("img");
  img.setAttribute("src", libro.imagen);
  img.setAttribute("alt", libro.titulo);

  let contenido = document.createElement("div");
  contenido.classList.add("contenido");
  contenido.classList.add("fall-transition");
  let titulo = document.createElement("p");
  titulo.classList.add("titulo");
  titulo.innerText = libro.titulo;
  let autor = document.createElement("p");
  autor.classList.add("autor");
  autor.innerText = libro.autor;
  let opinion = document.createElement("p");
  opinion.classList.add("opinion");
  opinion.innerText = libro.opinion;
  let link = document.createElement("a");
  link.setAttribute("target", "_blank");
  link.innerText = "Ir al libro";
  link.href = libro.link;
  
  portada.append(img);
  node.append(portada);
  contenido.append(titulo);
  contenido.append(autor);
  contenido.append(opinion);
  contenido.append(link);
  node.append(contenido);
  

  // Remove the transition class
  contenido.classList.remove('fall-transition');

  // Create the observer, same as before:
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contenido.classList.add('fall-transition');
        return;
      }

      //contenido.classList.remove('fall-transition');
    });
  });

  observer.observe(node);

  return node;
}
