//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
let frase = prompt("Bienvenidos");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World");

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
console.log(3 + 5);

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
let nombre = prompt("Ingrese su nombre");
console.log(`Hola ${nombre}`);

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
console.log(num1 + num2);

//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num3 = parseInt(prompt("Primer número"));
let num4 = parseInt(prompt("Segundo número"));
let nunMayor = Math.max(num3, num4);
console.log(`El ${nunMayor} es el mayor`);

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let num5 = parseInt(prompt("Escribe un número"));
let num6 = parseInt(prompt("Escribe un segundo número"));
let num7 = parseInt(prompt("Escribe un tercer número"));
let mayor = Math.max(num5, num6, num7);
console.log(`El ${mayor} es el mayor`);

//8.- Escribe un programa que pida un número y diga si es divisible por 2

let numeroDivisible = prompt("Ingrese un numero para ver si es divisible en 2");
if (isNaN(numeroDivisible)) {
    console.warn(`Los siento no en un número`);
} else if (numeroDivisible % 2 == 0) {
    console.log(`El ${numeroDivisible} es divisible en 2 😍 `);
} else {
    console.log(`No es divisible en 2 😭`);
}

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let numero = parseInt(
    prompt`Ingrese un Número y verificaremos si es divisible en 2, 3, 5 o 7 `
);
if (isNaN(numero)) {
    console.error(`No ingresaste un número`);
} else {
    if (
    numero % 2 == 0 ||
    numero % 3 == 0 ||
    numero % 5 == 0 ||
    numero % 7 == 0
) {
    console.log(`El número ingresado ${numero} es divisible en 2, 3, 5 o 7`);
} else {
    console.log(
    `Lo siento, el número ingresado ${numero} no es divisible en 2, 3, 5 o 7`
    );
}
}

//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) {
    alert(`Ahora verificaremos en cuales de todos ellos es divisible`);
} else {
}
let divisibles = [];

if (numero % 2 == 0) {
    divisibles[divisibles.length] = 2;
}
if (numero % 3 == 0) {
    divisibles[divisibles.length] = 3;
}
if (numero % 5 == 0) {
    divisibles[divisibles.length] = 5;
}
if (numero % 7 == 0) {
    divisibles[divisibles.length] = 7;
}
if (divisibles.length > 0) {
    console.log(`El número es divisble en ${divisibles}🤯`);
}
