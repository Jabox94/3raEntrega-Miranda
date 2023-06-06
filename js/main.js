// Generar html para las cartas de curso
// JSON de cursos y maqueta de como agregar nuevos cursos
const dataJSON = `[
    {
       "nombre": "Curso de fotografia Fundamentos",
       "categoria": "fotografia",
       "precio": 230,
       "id": "CF1"
    },
    {
       "nombre": "Curso de fotografia Intermedio",
       "categoria": "fotografia",
       "precio": 320,
       "id": "CF2"
    },
    {
       "nombre": "Curso de fotografia Avanzado",
       "categoria": "fotografia",
       "precio": 400,
       "id": "CF3"
    },
    {
       "nombre": "Curso de cocina Fundamentos",
       "categoria": "cocina",
       "precio": 230,
       "id": "CC1"
    },
    {
       "nombre": "Curso de cocina Intermedio",
       "categoria": "cocina",
       "precio": 320,
       "id": "CC2"
    },
    {
       "nombre": "Curso de cocina Avanzado",
       "categoria": "cocina",
       "precio": 400,
       "id": "CC3"
    },
    {
       "nombre": "Curso de JavaScript Fundamentos",
       "categoria": "programacion",
       "precio": 230,
       "id": "CJ1"
    },
    {
       "nombre": "Curso de JavaScript Intermedio",
       "categoria": "programacion",
       "precio": 320,
       "id": "CJ2"
    },
    {
       "nombre": "Curso de JavaScript Avanzado",
       "categoria": "programacion",
       "precio": 400,
       "id": "CJ3"
    }
 ]
`;

// Convertir JSON a objeto
const listaCursos = JSON.parse(dataJSON);

// Identificar con que categoria de curso se trabaja
function filtrarCategoria() {
    listaCursos.forEach(curso => {
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
    const contenedorCocina = document.querySelector('#course-code');
    const contenedorCode = document.querySelector('#course-cooking');
    // Contenedor
    const contenido = document.createElement('div');

    switch (entrada.categoria) {

        case 'fotografia':
            contenido.innerHTML = `
            <div class="course__card">
                <div class="imagen">
                <img loading="lazy" src="./media/tumbnail/${entrada.id}.webp">
            </div>
            <div class="info__card">
                <p class="categoria">${entrada.categoria}</p>
                <h4 class="course__title">${entrada.nombre}</h4>
                <p>Precio: <span>$${entrada.precio}</span></p>
                <div class="button-container">
                    <button class="button-cart" id="add-to-cart">Añadir al carrito</button>
                </div>
            </div>
            </div>`;
            contenedorFoto.appendChild(contenido);
            break;

        case 'programacion':
            contenido.innerHTML = `
            <div class="course__card">
                <div class="imagen">
                <img loading="lazy" src="./media/tumbnail/${entrada.id}.webp">
            </div>
            <div class="info__card">
                <p class="categoria">${entrada.categoria}</p>
                <h4 class="course__title">${entrada.nombre}</h4>
                <p>Precio: <span>$${entrada.precio}</span></p>
                <div class="button-container">
                    <button class="button-cart" id="add-to-cart">Añadir al carrito</button>
                </div>
            </div>
            </div>`;
            contenedorCode.appendChild(contenido);
            break;

        case 'cocina':

            contenido.innerHTML = `
        <div class="course__card">
            <div class="imagen">
            <img loading="lazy" src="./media/tumbnail/${entrada.id}.webp">
        </div>
        <div class="info__card">
            <p class="categoria">${entrada.categoria}</p>
            <h4 class="course__title">${entrada.nombre}</h4>
            <p>Precio: <span>$${entrada.precio}</span></p>
            <div class="button-container">
                <button class="button-cart" id="add-to-cart">Añadir al carrito</button>
            </div>
        </div>
        </div>`;
            contenedorCocina.appendChild(contenido);
            break;
    }
}

// Mostrar lista del carrito
function carrito() {
    const cartIcon = document.querySelector('#cart-icon');
    const closeCart = document.querySelector('.close__cart');
    const objetivo = document.querySelector('.container__cart-products');

    cartIcon.addEventListener('click', () => {
        objetivo.classList.toggle('container__cart-products--active');
    });
    closeCart.addEventListener('click', () => {
        objetivo.classList.toggle('container__cart-products--active');
    });

    // // Carrito
    // const carrito = document.querySelector('#carrito');
    // const listaCursos = document.querySelector('#lista-cursos');
}



////////////////////////////////////////////////////////////////////////////////////////////
// Iniciar script
iniciar();
function iniciar() {
    filtrarCategoria();
    carrito();
}