// Función sin parámetros
function greet() {
  console.log("¡Hola!");
}

// Función con parámetros
function greetPerson(name) {
  console.log("¡Hola, " + name + "!");
}

// Función que devuelve un valor
function add(a, b) {
  return a + b;
}

// PARÁMETROS Y VALORES DE RETORNO:

console.log("PARÁMETROS Y VALORES DE RETORNO")

function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 3);
console.log(result); // 15

// Sin return
function sayHello(name) {
    console.log("Hello " + name);
    // No hay return
}

let nothing = sayHello("Ana");
console.log(nothing); // undefined

/*
CASO PRÁCTICO:
Calcular el precio final con descuento
*/

function calculateFinalPrice(price, discountPercent) {
    let discount = price * (discountPercent / 100);
    let finalPrice = price - discount;
    return finalPrice;
}

let originalPrice = 100;
let discount = 20; // 20%

let finalPrice = calculateFinalPrice(originalPrice, discount);
console.log("Precio original: $" + originalPrice);
console.log("Descuento: " + discount + "%");
console.log("Precio final: $" + finalPrice); // $80

// EJECUTAR UNA FUNCIÓN

console.log("EJECUTAR UNA FUNCIÓN")

function multiply(a, b) {
    return a * b;
}

// Llamar la función
multiply(3, 4); // Devuelve 12, pero no lo guardamos

// Llamar y guardar el resultado
let result1 = multiply(3, 4);
console.log(result1); // 12

let result2 = multiply(10, 2);
console.log(result2); // 20

// Usar directamente
console.log(multiply(5, 5)); // 25

/*
CASO PRÁCTICO:
Función para validar si un usuario es mayor de edad
*/

function isAdult(age) {
    return age >= 18;
}

let userAge1 = 20;
let userAge2 = 15;

if (isAdult(userAge1)) {
    console.log("Usuario 1: Acceso permitido");
} else {
    console.log("Usuario 1: Debes ser mayor de 18");
}
// "Usuario 1: Acceso permitido"

if (isAdult(userAge2)) {
    console.log("Usuario 2: Acceso permitido");
} else {
    console.log("Usuario 2: Debes ser mayor de 18");
}
// "Usuario 2: Debes ser mayor de 18"


// SCOPE DE LAS FUNCIONES

console.log("SCOPE DE LAS FUNCIONES")

let globalVar = "Soy global";

function myFunction() {
    let localVar = "Soy local";
    console.log(globalVar); // ✅ Funciona
    console.log(localVar); // ✅ Funciona
}

myFunction();

console.log(globalVar); // ✅ Funciona
console.log(localVar); // ❌ Error: localVar no está definida

/*
CASO PRÁCTICO:
Calcular impuestos - la variable de cálculo interno
no debe ser accesible fuera
*/

let totalSales = 1000;

function calculateTaxes(amount) {
    let taxRate = 0.21; // Variable local
    let taxes = amount * taxRate;
    return taxes;
}

let taxes = calculateTaxes(totalSales);
console.log("Ventas:", totalSales); // ✅
console.log("Impuestos:", taxes); // ✅
console.log(taxRate); // ❌ Error: taxRate solo existe dentro de la función

// FUNCIONES ANÓNIMAS

console.log("FUNCIONES ANÓNIMAS")

// ESTO YA LO VIMOS:
let numbers = [3, 1, 4, 2];

// Usando función anónima en .sort()
numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); // [1, 2, 3, 4]

// ❌ Sin función anónima (más complicado)
function compararNumeros(a, b) {
    return a - b;
}

numbers.sort(compararNumbers);

// Más ejemplos donde son útiles:
// En event listeners
button.addEventListener("click", function() {
    console.log("Click!");
});

// FUNCIONES QUE LLAMAN A FUNCIONES

console.log("FUNCIONES QUE LLAMAN A FUNCIONES")

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Llamadas anidadas
result = multiply(add(3, 5), add(1, 1));
console.log(result); // 16

// Paso a paso:
// add(3, 5) = 8
// add(1, 1) = 2
// multiply(8, 2) = 16

/*
CASO PRÁCTICO:
Sistema de compra con múltiples cálculos
*/

function calculateSubtotal(price, quantity) {
    return price * quantity;
}

function calculateTax(amount) {
    return amount * 0.21;
}

function calculateTotal(price, quantity) {
    let subtotal = calculateSubtotal(price, quantity);
    let tax = calculateTax(subtotal);
    return subtotal + tax;
}

// Comprar 3 productos de $50
let finalTotal = calculateTotal(50, 3);

console.log("Total a pagar: $" + finalTotal.toFixed(2));
// $181.50