// MÉTODO FOR LOOP

console.log("MÉTODO FOR LOOP");

let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log("Posición " + i + ": " + numbers[i]);
}

// Imprime:
// Posición 0: 10
// Posición 1: 20
// Posición 2: 30
// Posición 3: 40
// Posición 4: 50

/*
CASO PRÁCTICO:
Calcular el total de un carrito de compras
*/

let prices = [29.99, 15.50, 99.99, 5.00];
let total = 0;

for (let i = 0; i < prices.length; i++) {
    total += prices[i];
    console.log("Producto " + (i + 1) + ": $" + prices[i]);
}

console.log("Total a pagar: $" + total); // $150.48

// MÉTODO FOR...IN

console.log("MÉTODO FOR...IN");

let fruits = ["Apple", "Orange", "Banana"];

for (let index in fruits) {
    console.log(index + ": " + fruits[index]);
}

// Imprime:
// 0: Apple
// 1: Orange
// 2: Banana

/*
CASO PRÁCTICO:
Mostrar lista de productos disponibles
*/

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

console.log("Productos disponibles:");

for (let index in products) {
    console.log((parseInt(index) + 1) + ". " + products[index]);
}

// Imprime:
// Productos disponibles:
// 1. Laptop
// 2. Mouse
// 3. Keyboard
// 4. Monitor

// METODO SLICE()

console.log("MÉTODO SLICE()");

fruits = ["Apple", "Orange", "Banana", "Mango", "Grape"];

let someFruits = fruits.slice(1, 4);

console.log(someFruits); // ["Orange", "Banana", "Mango"]
console.log(fruits); // ["Apple", "Orange", "Banana", "Mango", "Grape"]
// El original no cambia

/*
CASO PRÁCTICO:
Sistema de paginación: mostrar solo 3 productos por página
*/

let allProducts = ["Product1", "Product2", "Product3", "Product4", "Product5", "Product6"];

// Página 1: primeros 3 productos
let page1 = allProducts.slice(0, 3);
console.log("Página 1:", page1);
// ["Product1", "Product2", "Product3"]

// Página 2: siguientes 3 productos
let page2 = allProducts.slice(3, 6);
console.log("Página 2:", page2);
// ["Product4", "Product5", "Product6"]

// MÉTODO SPLICE()

console.log("MÉTODO SPLICE()");

// Eliminar elementos
fruits = ["Apple", "Orange", "Banana", "Mango", "Grape"];

let removed = fruits.splice(1, 2); // Desde posición 1, eliminar 2

console.log(removed); // ["Orange", "Banana"]
console.log(fruits); // ["Apple", "Mango", "Grape"]

// Eliminar y agregar
numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 99, 88); // En posición 2, eliminar 1, agregar 99 y 88

console.log(numbers); // [1, 2, 99, 88, 4, 5]

/*
CASO PRÁCTICO:
Eliminar un producto del carrito (en cualquier posición)
y agregar uno nuevo en su lugar
*/

let cart = ["Laptop", "Mouse", "Keyboard", "Monitor"];
console.log("Carrito original:", cart);

// Usuario quiere cambiar el Mouse (posición 1) por un Headset
removed = cart.splice(1, 1, "Headset");

console.log("Producto eliminado:", removed); // ["Mouse"]
console.log("Carrito actualizado:", cart);
// ["Laptop", "Headset", "Keyboard", "Monitor"]

// Insertar sin eliminar (cantidad = 0)
cart.splice(2, 0, "Webcam");
console.log("Con Webcam agregada:", cart);
// ["Laptop", "Headset", "Webcam", "Keyboard", "Monitor"]

// MÉTODO SORT() Y REVERSE()

console.log("MÉTODO SORT() Y REVERSE()");

// Ordenar strings
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// Invertir
fruits.reverse();
console.log(fruits); // ["Orange", "Mango", "Banana", "Apple"]

// CUIDADO con números
numbers = [40, 100, 1, 5, 25];
numbers.sort();
console.log(numbers); // [1, 100, 25, 40, 5] ❌ ¡INCORRECTO!

/*
CASO PRÁCTICO:
Ordenar alfabéticamente una lista de estudiantes
*/

let students = ["Carlos", "Ana", "Pedro", "Laura", "Beatriz"];

console.log("Lista original:", students);

students.sort();
console.log("Orden alfabético:", students);
// ["Ana", "Beatriz", "Carlos", "Laura", "Pedro"]

students.reverse();
console.log("Orden inverso:", students);
// ["Pedro", "Laura", "Carlos", "Beatriz", "Ana"]

// ORDENAR NUMEROS

console.log("ORDENAR NUMEROS");

numbers = [40, 100, 1, 5, 25, 10];

// Orden ascendente (menor a mayor)
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers); // [1, 5, 10, 25, 40, 100] ✅

// Orden descendente (mayor a menor)
numbers.sort(function(a, b) {
    return b - a;
});
console.log(numbers); // [100, 40, 25, 10, 5, 1] ✅

/*
CASO PRÁCTICO:
Ordenar productos por precio (menor a mayor)
*/

prices = [99.99, 15.50, 199.99, 5.00, 49.99];

console.log("Precios originales:", prices);

// Ordenar de menor a mayor
prices.sort(function(a, b) {
    return a - b;
});

console.log("Precios de menor a mayor:", prices);
// [5.00, 15.50, 49.99, 99.99, 199.99]

// Mostrar los 3 más baratos
console.log("Los 3 más baratos:");
for (let i = 0; i < 3; i++) {
    console.log("$" + prices[i]);
}

// MÉTODO SORT() EN ARRAY DE EN OBJETOS

console.log("MÉTODO SORT() EN ARRAY DE OBJETOS");

students = [
    {name: "Carlos", age: 25},
    {name: "Ana", age: 22},
    {name: "Pedro", age: 28}
];

// Ordenar por edad
students.sort(function(a, b) {
    return a.age - b.age;
});

console.log(students);
// [{name: "Ana", age: 22}, {name: "Carlos", age: 25}, {name: "Pedro", age: 28}]

/*
CASO PRÁCTICO:
Ordenar productos por año de fabricación
*/

let cars = [
    {brand: "Volvo", year: 2016},
    {brand: "Saab", year: 2001},
    {brand: "BMW", year: 2010}
];

console.log("Coches originales:", cars);

// Ordenar del más antiguo al más nuevo
cars.sort(function(a, b) {
    return a.year - b.year;
});

console.log("Coches ordenados por año:");
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].year + " - " + cars[i].brand);
}
// 2001 - Saab
// 2010 - BMW
// 2016 - Volvo

