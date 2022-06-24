//Realizar el ejercicio de la calculadora con 4 operaciones 
//(suma, resta, multiplicacion y division) utilizando Switch y 
//la funcion dibujarLineas que veniamos usando.
let resultado: number;
  let numero1 = Number(prompt("Ingrese el primer numero "));
  let numero2 = Number(prompt("Ingrese el segundo numero"));
  let operacion = Number(prompt("Ingrese la opcion para operacion: 1 para suma, 2 para resta, 3 para multiplicacion, 4 para divicion"));  
 
function calculadora (numero1: number, numero2: number, operacion: number): number {
   switch (calculadora) {
  case 1:
    resultado = numero1 + numero2;
    console.log("la suma de ambos numeros es ", resultado);
    break;

  case 2:
    resultado = numero1 - numero2;
    console.log("la resta de ambos numeros es  ", resultado);
    break;

  case 3:
    resultado = numero1 * numero2;
    console.log("la multiplicacion entre ambos numeros es ", resultado);
    break;

  case 4:
    resultado = numero1 / numero2;
    console.log("la divicion entre ambos numeros es ", resultado);
    break;

  default:
    console.log("se a ingresado una operacion incorrecta");
}
console.log(calculadora)