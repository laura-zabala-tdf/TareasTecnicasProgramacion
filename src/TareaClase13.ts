//Leer valores del usuario hasta que introduzca un 0
//El usuario puede introducir valores numéricos, tanto positivos como negativos
//Contar la cantidad de valores introducidos que sean mayores a 0 y el porcentaje de positivos respecto del total
//Ejemplo:
//   Ingrese número: 9
//   Ingrese número: 7
//   Ingrese número: -1
//   Ingrese número: 1
//   Ingrese número: 0
//   3 positivos, 75% del total

let total: number = 0;
let cantidadPositivo: number = 0;
let porcenPositivo: number = 0;
let numIngres = Number(prompt("Ingrese un número"));

while (numIngres !== 0) {
  if (numIngres > 0) {
    cantidadPositivo++;
  }
  total++;
  numIngres = Number(prompt("Ingrese un número"));
}
if (total > 0) {
  porcenPositivo = (cantidadPositivo * 100) / total;
  console.log(cantidadPositivo, " positivos", porcenPositivo, " % del total.");
}
