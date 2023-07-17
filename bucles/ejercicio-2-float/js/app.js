let nota = parseFloat(prompt("Ingrese la nota:"));
if (nota >= 0 && nota < 3) {
  alert("Muy deficiente");
} else if (nota >= 3 && nota < 5) {
  alert("Insuficiente");
} else if (nota >= 5 && nota < 7) {
  alert("Suficiente");
} else if (nota >= 7 && nota < 8) {
  alert("Bien");
} else if (nota >= 8 && nota < 10) {
  alert("Notable");
} else if (nota == 10) {
  alert("Sobresaliente");
} else {
  alert("Ingrese un número valido");
}

