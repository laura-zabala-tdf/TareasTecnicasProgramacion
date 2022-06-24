// Una empresa desea premiar a sus empleados con un aumento de sueldo.
//Este aumento se ajusta a la siguiente tabla:
//Sueldo Actual  Sueldo con Aumento
//0 - 15.000 $                    20%
//15.001 - 20.000  $          10%
//20.001 - 25.000  $           5%
//Más de 25.000 $       No hay aumento
//Desarrolle un algoritmo dado el salario actual de un empleado determine
//el aumento de sueldo a aplicar y se lo muestre
let salario: number = Number(prompt("Ingrese su salario actual"));
let salarioHoy: number = salario;
let nuevoSalario: number = 0;
if (0 < salarioHoy && salarioHoy <= 15000) {
  nuevoSalario = salarioHoy * 1.2;
  console.log("Su sueldo con aumento es de ", nuevoSalario);
} else if (15001 < salarioHoy && salarioHoy <= 20000) {
  nuevoSalario = salarioHoy * 1.1;
  console.log("Su sueldo con aumento es de ", nuevoSalario);
} else if (20001 < salarioHoy && salarioHoy <= 25000) {
  nuevoSalario = salarioHoy * 1.05;
  console.log("Su sueldo con aumento es de ", nuevoSalario);
} else {
  nuevoSalario = salarioHoy;
  console.log("No hay aumento");
}
