// HTML: <p id="demo">Texto original</p>

// Leer el contenido
let text = document.getElementById("demo").innerHTML;
console.log(text); // "Texto original"
console.log("Elemento:", document.getElementById("demo"));

// Cambiar el contenido
document.getElementById("demo").innerHTML = "Texto nuevo";
// Ahora el párrafo dice "Texto nuevo"

/*
CASO PRÁCTICO:
Actualizar el nombre del usuario en la página
*/

// HTML: <h1 id="welcome">Bienvenido</h1>

let userName = "Carlos";

// Cambiar el mensaje de bienvenida
document.getElementById('welcome').innerHTML = "Bienvenido, " + userName;

// Resultado en pantalla: "Bienvenido, Carlos"

// MATH.RANDOM()

console.log("MATH.RANDOM()");

// Genera número aleatorio entre 0 y 1
let random1 = Math.random();
console.log(random1); // 0.7234891... (diferente cada vez)

let random2 = Math.random();
console.log(random2); // 0.1823456... (diferente cada vez)

// Para obtener número entre 0 y 10:
let random10 = Math.random() * 10;
console.log(random10); // 7.234891... (entre 0 y 9.999...)

/*
CASO PRÁCTICO:
Dado digital (1-6)
*/

// Generar número entre 1 y 6
let diceRoll = Math.random() * 6; // 0 a 5.999...
console.log("Número con decimales:", diceRoll);

// Problema: tiene decimales y empieza en 0
// Solución en la siguiente slide...

// MATH.FLOOR()

console.log("MATH.FLOOR()");

// Math.floor() elimina decimales
console.log(Math.floor(3.9)); // 3
console.log(Math.floor(7.1)); // 7
console.log(Math.floor(9.999)); // 9

// Combinado con Math.random()
let random = Math.random() * 10; // 7.234891...
let rounded = Math.floor(random); // 7
console.log(rounded);

/*
CASO PRÁCTICO:
Elegir elemento aleatorio de un array
*/

let fruits = ["Apple", "Orange", "Banana", "Mango"];

// Paso 1: Generar número aleatorio entre 0 y 3.999...
let randomNumber = Math.random() * fruits.length; // 2.7831...

// Paso 2: Redondear hacia abajo para obtener índice válido
let randomIndex = Math.floor(randomNumber); // 2

// Paso 3: Obtener el elemento
let randomFruit = fruits[randomIndex];
console.log(randomFruit); // "Banana"

// TODO EN UNA LÍNEA:
let fruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(fruit); // Fruta aleatoria

// WINDOW.ONLOAD()

console.log("WINDOW.ONLOAD()");

// Este código se ejecuta INMEDIATAMENTE
console.log("Script cargado");

// Este código espera a que TODO cargue
window.onload = function() {
    console.log("Página lista");
};

// Orden de ejecución:
// 1. "Script cargado"
// 2. (se carga HTML, CSS, imágenes...)
// 3. "Página lista"

/*
CASO PRÁCTICO:
Mostrar mensaje personalizado al cargar la página
*/

// HTML: <h1 id="greeting">Cargando...</h1>

window.onload = function() {
    let hour = new Date().getHours();
    let message;

    if (hour < 12) {
        message = "Buenos días";
    } else if (hour < 20) {
        message = "Buenas tardes";
    } else {
        message = "Buenas noches";
    }

    document.getElementById('greeting').innerHTML = message;
};

// Cuando la página carga, el saludo cambia según la hora