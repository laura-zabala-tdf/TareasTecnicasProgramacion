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
for (let i: number = 0; i < cantidadProductos; i++ ) {
  total= total + 
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
