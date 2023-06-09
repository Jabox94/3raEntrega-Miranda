// Generar html para las cartas de curso
// JSON de cursos y maqueta de como agregar nuevos cursos
const dataJSON = `[
    {
       "nombre": "Curso de fotografia Fundamentos",
       "categoria": "fotografia",
       "precio": 88.9,
       "id": "CF1"
    },
    {
       "nombre": "Curso de fotografia Intermedio",
       "categoria": "fotografia",
       "precio": 120.9,
       "id": "CF2"
    },
    {
       "nombre": "Curso de fotografia Avanzado",
       "categoria": "fotografia",
       "precio": 180.9,
       "id": "CF3"
    },
    {
       "nombre": "Curso de cocina Fundamentos",
       "categoria": "cocina",
       "precio": 88.9,
       "id": "CC1"
    },
    {
       "nombre": "Curso de cocina Intermedio",
       "categoria": "cocina",
       "precio": 120.9,
       "id": "CC2"
    },
    {
       "nombre": "Curso de cocina Avanzado",
       "categoria": "cocina",
       "precio": 180.9,
       "id": "CC3"
    },
    {
       "nombre": "Curso de JavaScript Fundamentos",
       "categoria": "programacion",
       "precio": 88.9,
       "id": "CJ1"
    },
    {
       "nombre": "Curso de JavaScript Intermedio",
       "categoria": "programacion",
       "precio": 120.9,
       "id": "CJ2"
    },
    {
       "nombre": "Curso de JavaScript Avanzado",
       "categoria": "programacion",
       "precio": 180.9,
       "id": "CJ3"
    }
 ]
`;

// Convertir JSON a objeto
const listaCursosJSON = JSON.parse(dataJSON);

// Identificar con que categoria de curso se trabaja
function filtrarCategoria() {
    listaCursosJSON.forEach(curso => {
        if (curso.categoria === 'fotografia') {
            // console.table(curso);
            generarHTML(curso);
        }
        if (curso.categoria === 'cocina') {
            // console.table(curso);
            generarHTML(curso);
        }
        if (curso.categoria === 'programacion') {
            // console.table(curso);
            generarHTML(curso);
        }
    });
}

function generarHTML(entrada) {
    // Definiciones
    const contenedorFoto = document.querySelector('#course-photo');
    const contenedorCocina = document.querySelector('#course-cooking');
    const contenedorCode = document.querySelector('#course-code');
    // Contenedor
    const contenido = document.createElement('a');
    contenido.setAttribute('href', "#");
    contenido.setAttribute('role', "link");

    switch (entrada.categoria) {

        case 'fotografia':
            contenido.innerHTML = `
            <div class="course__card">
                <div class="imagen">
                <img loading="lazy" src="./media/tumbnail/${entrada.id}.webp" alt="${entrada.nombre}">
            </div>
            <div class="info__card">
                <p class="categoria">${entrada.categoria}</p>
                <h4 class="course__title">${entrada.nombre}</h4>
                <p>Precio: <span>$${entrada.precio}</span></p>
                <div class="button-container">
                    <button class="button-cart add-to-cart" data-id="${entrada.id}">Añadir al carrito</button>
                </div>
            </div>
            </div>`;
            contenedorFoto.appendChild(contenido);
            break;

        case 'cocina':

            contenido.innerHTML = `
        <div class="course__card">
            <div class="imagen">
            <img loading="lazy" src="./media/tumbnail/${entrada.id}.webp" alt="${entrada.nombre}">
        </div>
        <div class="info__card">
            <p class="categoria">${entrada.categoria}</p>
            <h4 class="course__title">${entrada.nombre}</h4>
            <p>Precio: <span>$${entrada.precio}</span></p>
            <div class="button-container">
                <button class="button-cart add-to-cart" data-id="${entrada.id}">Añadir al carrito</button>
            </div>
        </div>
        </div>`;
            contenedorCocina.appendChild(contenido);
            break;

        case 'programacion':
            contenido.innerHTML = `
            <div class="course__card">
                <div class="imagen">
                <img loading="lazy" src="./media/tumbnail/${entrada.id}.webp" alt="${entrada.nombre}">
            </div>
            <div class="info__card">
                <p class="categoria">${entrada.categoria}</p>
                <h4 class="course__title">${entrada.nombre}</h4>
                <p>Precio: <span>$${entrada.precio}</span></p>
                <div class="button-container">
                    <button class="button-cart add-to-cart" data-id="${entrada.id}">Añadir al carrito</button>
                </div>
            </div>
            </div>`;
            contenedorCode.appendChild(contenido);
            break;
    }
}

// Mostrar lista del carrito
function carritoModal() {
    // Funcionalidad del modal
    const cartIcon = document.querySelector('#cart-icon');
    const closeCart = document.querySelector('.close__cart');
    const objetivo = document.querySelector('.container__cart-products');

    cargarEventos()
    function cargarEventos() {
        cartIcon.addEventListener('click', () => {
            objetivo.classList.toggle('container__cart-products--active');
        });
        closeCart.addEventListener('click', () => {
            objetivo.classList.toggle('container__cart-products--active');
        });
    }
}

function agregarCurso() {
    // Agregar y quitar cursos a la lista de carrito
    const listaCarrito = document.querySelector('#cart-list__items');
    const vaciarCarrito = document.querySelector('#empty-cart');
    const listadoCursos = document.querySelector('#course-list');
    let articulosCarrito = [];

    cargarEventos();
    function cargarEventos() {
        listadoCursos.addEventListener('click', agregarCurso);

        vaciarCarrito.addEventListener('click', () => {
            articulosCarrito = [];
            limpiarHTML();
        });
    }

    function agregarCurso(a) {
        a.preventDefault();
        if (a.target.classList.contains('add-to-cart')) {
            const cursoSeleccionado = a.target.parentElement.parentElement.parentElement;
            leerDatoCurso(cursoSeleccionado);
        }
    }

    function leerDatoCurso(curso) {
        // crear un objeto para almacenar los datos leidos del curso
        const infoCurso = {
            imagen: curso.querySelector('div.imagen img').getAttribute('src'),
            nombre: curso.querySelector('div.info__card h4').textContent,
            precio: curso.querySelector('div.info__card p span').textContent,
            id: curso.querySelector('.info__card .button-container button').getAttribute('data-id'),
            cantidad: 1
        }

        // Verifica si hay items en el carrito que esten repetidos
        const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
        if (existe) {
            // Actualiza cantidad
            const cursos = articulosCarrito.map(curso => {
                if (curso.id === infoCurso.id) {
                    curso.cantidad++;
                    return curso;
                } else {
                    return curso;
                }
            });
            articulosCarrito = [...cursos];
        } else {
            // Agregar elementos al arreglo para luego enviarlo a la lista del carrito
            articulosCarrito = [...articulosCarrito, infoCurso];
        }
        carritoHTML();
    }

    function carritoHTML() {
        const contadorHTML = document.querySelector('.cart__items-counter');

        // Limpiar el HTML
        limpiarHTML();

        // Recorre el carrito y genera el HTML
        articulosCarrito.forEach((curso, contador) => {
            const { imagen, nombre, precio, cantidad } = curso;
            const contenido = document.createElement('div');

            contenido.innerHTML = `
            <div class="inner__item-container">
                <div class="item-img">
                    <img src="${imagen}" alt="${nombre}">
                </div>
                <div class="item-name">
                ${nombre}
                </div>
                <div class="item-price">
                ${precio}
                </div>
                <div class="item-q">
                ${cantidad}
                </div>
            </div>
                `;

            listaCarrito.appendChild(contenido);
        });
    }

    function limpiarHTML() {
        listaCarrito.innerHTML = '';
    }
}


////////////////////////////////////////////////////////////////////////////////////////////
// Iniciar script
iniciar();
function iniciar() {
    filtrarCategoria();
    carritoModal();
    agregarCurso();
}