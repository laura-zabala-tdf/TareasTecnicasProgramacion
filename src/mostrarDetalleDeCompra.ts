function mostrarDetalleDeCompra(): void {
  console.log("el detalle de compra es: ");
  for (let i: number = 0; i < cantidadProductos; i++) {
    console.log(
      cantidadxProducto[i] +
        " unidades de " +
        productos[i] +
        "a un precio por unidad" +
        precioxUnidad[i]
    );
  }
}
