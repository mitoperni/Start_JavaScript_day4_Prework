function multiply(a, b) {
  return a * b;
}

console.log("Resultado de ejecutar la multiplicación 2*3 = ", multiply(2, 3)); // 6

// Alcance de las funciones

let variableGlobal = 10;

function checkScope() {
  let variableLocal = 5;
  console.log("Ejecutando la función checkScope()");
  console.log(variableGlobal); // 10
  console.log(variableLocal); // 5
}

checkScope();

console.log("Ejecutando fuera de la función checkScope()");
console.log(variableGlobal); // 10

// OPERACIONES LÓGICAS

// COMPARACIONES BÁSICAS
console.log("5 == '5':", 5 == "5");     // true - igual valor
console.log("5 === '5':", 5 === "5");   // false - diferente tipo

console.log("5 > 3:", 5 > 3);           // true
console.log("5 != 3:", 5 != 3);         // true

// COMBINACIONES LÓGICAS
console.log("true && false:", true && false);    // false - AND
console.log("true || false:", true || false);    // true - OR
console.log("!true:", !true);                   // false - NOT

// EJEMPLOS PRÁCTICOS
let edad = 25;
let tieneLicencia = true;

console.log("Puede conducir:", edad >= 18 && tieneLicencia); // true
console.log("Es teenager:", edad >= 13 && edad <= 19);       // false