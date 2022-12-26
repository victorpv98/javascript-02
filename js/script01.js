function calcularPrecio() {
  // Obtener los datos de entrada
  let monopolio = document.getElementById("cantidad-monopolio").value;
  let ajedrez = document.getElementById("cantidad-ajedrez").value;
  let lego = document.getElementById("cantidad-lego").value;
  let dama = document.getElementById("cantidad-dama").value;
  let laberinto = document.getElementById("cantidad-laberinto").value;

  // Calcular la suma de todos los juguetes
  let suma = monopolio + ajedrez + lego + dama + laberinto;
  let suma_total = monopolio * 70.99 + ajedrez * 78.99 + lego * 100.99 + dama * 58.50 + laberinto * 35.00;

  // Determinar el descuento aplicable
  let descuento = 0;
  if (suma < 10) {
    descuento = 3.5;
  } else if (suma <= 20) {
    descuento = 7.0;
  } else {
    descuento = 9.5;
  }

  // Calcular el importe de compra, el importe descuento y el importe a pagar
  let importeCompra = suma_total;
  let importeDescuento = importeCompra * descuento / 100;
  let importePagar = importeCompra - importeDescuento;

  // Actualizar la interfaz de usuario con los resultados de los cálculos
  document.getElementById("importe-compra").innerHTML = importeCompra;
  document.getElementById("importe-descuento").innerHTML = importeDescuento;
  document.getElementById("importe-pagar").innerHTML = importePagar;
}