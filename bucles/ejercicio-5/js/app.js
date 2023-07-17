let dividendoDni = parseInt(prompt("Ingrese su DNI"));
let divisor = 23
let resto = dividendoDni % divisor
// alert(resto)
if(Number.isNaN(dividendoDni)){
  alert("Ingrese un número valido")
}else{
  if (resto == 0) {
    alert("T");
  } else if (resto == 17) {
    alert("R");
  } else if (resto == 3) {
    alert("W");
  } 
}