let sumaFinal = 0;
do {
  let numero = parseInt(prompt("Ingresa un número"));
  if (Number.isNaN(numero)) {
    alert("No es un número");
  }else{
    sumaFinal = sumaFinal + numero;
  }
} while (confirm("Agregar número?"));
alert(sumaFinal);
