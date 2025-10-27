function checkAge() {
  let edad = 30;
  if (edad >= 18) {
    console.log("Mayor de edad");
  } else {
    console.log("Menor de edad");
  }
}

function checkAgeTernary() {
  let edad = 30;
  let message = edad >= 18 ? "Mayor de edad" : "Menor de edad";
  console.log(message);
}

// SWITCH
function checkDay(day) {
  switch (day) {
    case "monday":
      console.log("Inicio de semana");
      break;
    case "friday":
      console.log("¡Viernes!");
      break;
    default:
      console.log("Día normal");
  }
}

// WHILE

function sumFirstFiveNumbers() {
  let sum = 0;
  let i = 1;
  while (i <= 5) {
    sum += i;
    i++;
  }
  return sum;
}
console.log("Resultado de sumFirstFiveNumbers() =", sumFirstFiveNumbers()); // 15

/*
CASO PRÁCTICO:

Supón que trabajas en una web que carga datos desde un servidor (por ejemplo, una API de productos).
Quieres reintentar la solicitud hasta que la respuesta sea exitosa.

*/

let success = false;
let attempts = 0;

while (!success && attempts < 5) {
  console.log("Intentando conectar...");
  success = Math.random() > 0.8; // simula éxito
  attempts++;
}

console.log(success ? "Conexión exitosa" : "Falló después de varios intentos"); // Operador ternario

// BUCLES FOR:

console.log("Bucle FOR:");
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}

/*
CASO PRÁCTICO:
Estás mostrando una lista de 10 productos destacados en tu tienda online.
Sabes exactamente cuántas veces necesitas renderizar un producto.
*/
function renderProducts() {
  for (let i = 0; i < 10; i++) {
    console.log("Renderizando producto " + i);
  }
}

// BUCLES FOR...IN:

console.log("Bucle FOR...IN:");
const perro = {
  nombre: "Rocky",
  raza: "Gran Danés",
  edad: 3,
};

for (let prop in perro) {
  console.log(prop + ": " + perro[prop]);
}

/*
CASO PRÁCTICO:
Necesitas construir dinámicamente una cadena de consulta (query string) con los filtros seleccionados por el usuario.
*/
const filters = {
  category: "books",
  sort: "price",
  limit: 10
};

let query = "";

for (let key in filters) {
  query += `${key}=${filters[key]}&`;
}

console.log(query); // "category=books&sort=price&limit=10&"


