let textoFinal = "";
do {
  let frase = prompt("Infresa la frese");
  let fraseGuion = "-" + frase
  textoFinal = textoFinal + fraseGuion;
} while (confirm("Agregar frase?"));
alert(textoFinal.slice(1));

