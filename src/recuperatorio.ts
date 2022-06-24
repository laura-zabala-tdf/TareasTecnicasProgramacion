function cargarProductos(arrayProductos: string[]): void {
  for (let i: number = 0; i < arrayProductos.length; i++) {
    arrayProductos[i] = prompt("ingrese producto " + i + " en la cesta");
  }
}

function cargarPrecioxUnidad(arrayprecioxUnidad: number[]): void {
  for (let i: number = 0; i < arrayprecioxUnidad.length; i++) {
    let precio: number = Number(
      prompt("ingrese precio del producto " + productos[i])
    );
    arrayprecioxUnidad[i] = precio;
  }
}

function cargarCantidadxProducto(arraycantidadxProducto: number[]): void {
  for (let i: number = 0; i < arraycantidadxProducto.length; i++) {
    let cantidad: number = Number(
      prompt("ingrese cantidad de " + cantidadxProducto[i] + " en la cesta")
    );
    arraycantidadxProducto[i] = cantidad;
  }
}

function calcularPrecioTotal(): number {
  let total: number = 0;
  for (let i: number = 0; i < cantidadProductos; i++) {
    total = total + Number( precioxUnidad[i]) * Number(cantidadxProducto[i]);
  }
  return total;
}

function mostrarDetalleDeCompra(): void {
  console.log("el detalle de compra es: ");
  for (let i: number = 0; i < cantidadProductos; i++){
    console.log(
      cantidadxProducto[i] + " unidades de " + productos[i] + "a un precio por unidad" + precioxUnidad{i}
    );
  }
}

let cantidadProductos: number = Number(prompt("total de productos comprados"));
let productos: string[] = new Array(cantidadProductos);
let precioxUnidad: number[] = new Array(cantidadProductos);
let cantidadxProducto: number[] = new Array(cantidadProductos);
let precioTotal: number = 0;

cargarProductos(productos);
cargarPrecioxUnidad(precioxUnidad);
cargarCantidadxProducto(cantidadxProducto);
precioTotal = calcularPrecioTotal();

if (1001 < precioTotal && precioTotal <= 2000) {
  console.log("Su compra participa en un sorteo de una tv led " );
} else if (2001 < precioTotal && precioTotal <= 3000) {
  console.log("Su compra participa en un sorteo de una moto 0km ");
} else if ( 3001 < precioTotal) {
  console.log("Su compra participa en un sorteo de un auto 0km");
} else {
    console.log("Muchas gracias por su compra");
}