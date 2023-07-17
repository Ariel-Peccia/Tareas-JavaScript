for (let fila = 7; fila > 0; fila--) {
  // console.log(fila)
  let lineStep = "";
  for (let columnas = 1; columnas <= 5; columnas++) {
    // console.log(columnas)
    lineStep = lineStep + (fila * columnas).toString();
  }
  console.log(fila + " " + lineStep);
}
