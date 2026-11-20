// Seleccionamos los elementos del HTML que vamos a modificar
const boton = document.getElementById('btnCambiarColor');
const mensaje = document.getElementById('mensaje');

// Definimos una lista de colores agradables
const colores = ['#FFD700', '#87CEEB', '#FFB6C1', '#98FB98', '#DDA0DD', '#FFA07A', '#AFEEEE'];

// Agregamos un "escuchador de eventos" al botón
boton.addEventListener('click', () => {
    // Generamos un color aleatorio de la lista
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    // Cambiamos el color de fondo del body
    document.body.style.backgroundColor = colorAleatorio;

    // Actualizamos el texto del mensaje
    mensaje.textContent = `¡El color de fondo ahora es ${colorAleatorio}! 🎨`;
});
