let nombre = "ariel";
let apellido = "PECCIA";
let frase = "                 Bienvenidos a la clase";
//Concatenación

console.log(nombre + " " + apellido);
console.log(nombre, apellido);
console.log(`Mi nombre es ${nombre} ${apellido}`);

//Métodos propiedades
console.log(nombre.toUpperCase());
console.log(apellido.toLowerCase());
console.log(
  `el apellido tiene ` +
    apellido.length +
    `
caracteres`
);
console.log(frase.length);

//eliminar los espacias delante y detras
//console.log(frase.trim().length);
let fraseSinEspacio = frase.trim();

//si quiero quitar los espacios en blanco del medio
let sinEspacio = fraseSinEspacio.split(" ");
console.log(sinEspacio.join(""));

//obtener una o varias letras
console.log(apellido.charAt(0));
console.log(apellido.charAt(-1));

console.log(apellido.substring());

//como redondear números
let numeroDecimal = 34.783465736;

console.log(Math.floor(numeroDecimal));
console.log(Math.ceil(numeroDecimal));
console.log(Math.round(numeroDecimal));

//maximo numero
console.log(Math.max(1000, 23, 45, 67, 876, 543, 89, 65, 43, 677, 23, 443));
//numero minimo
console.log(Math.min(1000, 23, 45, 67, 876, 543, 89, 65, 43, 677, 23, 443));

let numeroString = "65.23654523";
//convertir a numero entero
let numeroEntero = parseInt(numeroString);
//convertir a numero flotante o decimal
let numeroFlotante = parseFloat(numeroString);
//numeros con dos decimal
console.log(Math.round(numeroFlotante * 100) / 100);
console.log(parseFloat(numeroFlotante.toFixed(2)));
Math.ceil(Math.random() * 10);

let num1 = parseFloat(prompt("ingrese el primer numero"));
let num2 = parseFloat(prompt("ingrese el segundo numero"));
let numerosMultiplicados = num1 * num2;
// console.log(
//   `El valor de multiplicar ${num1} con ${num2} es ${numerosMultiplicados}`
// );

console.log(`${num1} * ${num2} = ${numerosMultiplicados}`);
//practico 2
//ejercicio 1

// let edad = parseInt(prompt("Ingrese la edad:"));
// if (edad >= 18) {
//   alert("Es mayor de 18 años y puede conducir ");
// } else {
//   alert("Ingrese un número valido");
// }

// ejercicio 2
