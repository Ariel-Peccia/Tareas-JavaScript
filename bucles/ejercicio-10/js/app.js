let fila = parseInt(prompt("Ingresda N° de fila"));
    let columna = parseInt(prompt("Ingresda N° de columna"));
     let filaDisminucion = fila * columna + 1;
    for (let i = 7; i >= 1; i--) {
      let filafinal = "";
      for (let j = 1; j <= 5; j++) {
        filaDisminucion = filaDisminucion - 1;
        if (filaDisminucion < 10) {
          filafinal = filafinal + "  ||  " + "0" + filaDisminucion;
        } else {
          filafinal = filafinal + "  ||  " + filaDisminucion;
        }
      }
      console.log( filafinal);
      // console.log("a", i + " " + filaDisminucion);
}