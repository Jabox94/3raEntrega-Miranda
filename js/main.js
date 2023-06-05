// Mostrar lista del carrito
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