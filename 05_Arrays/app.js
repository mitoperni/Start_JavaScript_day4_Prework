let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["Text", 42, true];

console.log(fruits); // ["Apple", "Banana", "Orange"]
console.log(numbers); // [1, 2, 3, 4, 5]

let colors = ["Red", "Green", "Blue", "Yellow"];

console.log(colors[0]);  // Red
console.log(colors[1]);  // Green
console.log(colors[2]);  // Blue
console.log(colors[3]);  // Yellow

let who = ["The dog", "My grandma", "The mailman"];
let action = ["ate", "peed on", "crushed"];
let what = ["my homework", "my phone", "the car"];

console.log(who[0]);     // The dog
console.log(action[1]);  // peed on
console.log(what[2]);    // the car

// Combinando: "The dog peed on the car"
console.log(who[0] + " " + action[1] + " " + what[2]);

let cities = ["Madrid", "Barcelona", "Valencia"];

console.log(cities.length);  // 3

let emptyArray = [];
console.log(emptyArray.length);  // 0

// Actualizando valores de un array

console.log("Actualizando valores de un array:", fruits); // ["Apple", "Orange", "Banana"]

fruits[1] = "Grape";

console.log("Actualizado:", fruits); // ["Apple", "Grape", "Banana"]

/*
CASO PRÁCTICO:
Sistema de carrito de compras donde actualizamos
el nombre de un producto
*/

let cart = ["Laptop", "Mouse", "Keyboard"];
console.log("Carrito actual:", cart);

// El usuario decidió cambiar el Mouse por un Headset
cart[1] = "Headset";

console.log("Carrito actualizado:", cart);
// ["Laptop", "Headset", "Keyboard"]

// PUSH()

console.log("MÉTODO PUSH()");

fruits = ["Apple", "Orange"];

fruits.push("Banana");
console.log(fruits); // ["Apple", "Orange", "Banana"]

fruits.push("Mango", "Grape");
console.log(fruits); // ["Apple", "Orange", "Banana", "Mango", "Grape"]

/*
CASO PRÁCTICO:
Sistema de notificaciones donde vamos agregando
nuevas notificaciones al final de la lista
*/

let notifications = [];

// Llega una nueva notificación
notifications.push("Tienes un nuevo mensaje");
console.log(notifications); // ["Tienes un nuevo mensaje"]

// Llega otra
notifications.push("Tu pedido ha sido enviado");
console.log(notifications);
// ["Tienes un nuevo mensaje", "Tu pedido ha sido enviado"]

// Agregar múltiples notificaciones
notifications.push("Nueva actualización disponible", "Comentario en tu post");
console.log(notifications);
// 4 notificaciones en total

// POP()

console.log("MÉTODO POP()");

fruits = ["Apple", "Orange", "Banana", "Mango"];

let removed = fruits.pop();

console.log("Producto eliminado:", removed); // "Mango"
console.log("Frutas restantes:", fruits); // ["Apple", "Orange", "Banana"]

/*
CASO PRÁCTICO:
Sistema de historial de navegación donde el usuario
puede ir hacia atrás (eliminar la última página visitada)
*/

let browserHistory = ["google.com", "youtube.com", "facebook.com", "twitter.com"];

console.log("Página actual:", browserHistory[browserHistory.length - 1]);
// "twitter.com"

// Usuario presiona botón "Atrás"
let previousPage = browserHistory.pop();
console.log("Volviendo a:", previousPage); // "twitter.com"
console.log("Página actual:", browserHistory[browserHistory.length - 1]);
// "facebook.com"

console.log("Historial:", browserHistory);
// ["google.com", "youtube.com", "facebook.com"]

// UNSHIFT()

console.log("MÉTODO UNSHIFT()");

fruits = ["Orange", "Banana"];

fruits.unshift("Apple");
console.log(fruits); // ["Apple", "Orange", "Banana"]

fruits.unshift("Mango", "Grape");
console.log(fruits); // ["Mango", "Grape", "Apple", "Orange", "Banana"]

/*
CASO PRÁCTICO:
Lista de tareas donde las tareas urgentes
se agregan al principio de la lista
*/

let tasks = ["Hacer ejercicio", "Leer un libro"];

console.log("Tareas:", tasks);

// ¡Tarea urgente! Agregar al inicio
tasks.unshift("Llamar al doctor");

console.log("Tareas actualizadas:", tasks);
// ["Llamar al doctor", "Hacer ejercicio", "Leer un libro"]

// Otra tarea urgente
tasks.unshift("Pagar factura");
console.log("Tareas:", tasks);
// ["Pagar factura", "Llamar al doctor", "Hacer ejercicio", "Leer un libro"]

// SHIFT()

console.log("MÉTODO SHIFT()");

let fruits = ["Apple", "Orange", "Banana"];

let removedShift = fruits.shift();

console.log("Producto eliminado:", removedShift); // "Apple"
console.log(fruits); // ["Orange", "Banana"]

/*
CASO PRÁCTICO:
Sistema de cola (queue) para atender clientes
El primero que llega es el primero que se atiende
*/

let customerQueue = ["Ana", "Carlos", "Pedro", "Laura"];

console.log("Cola de clientes:", customerQueue);
console.log("Atendiendo a:", customerQueue[0]);

// Atender al primer cliente
let servedCustomer = customerQueue.shift();
console.log(servedCustomer + " fue atendido");

console.log("Siguiente en la cola:", customerQueue[0]); // "Carlos"
console.log("Cola actual:", customerQueue);
// ["Carlos", "Pedro", "Laura"]
